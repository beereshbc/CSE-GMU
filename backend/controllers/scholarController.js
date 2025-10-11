import fetch from "node-fetch";
import dotenv from "dotenv";
import { facultyData } from "../data/facultyData.js";

dotenv.config();

const API_KEY =
  process.env.SERPAPI_KEY ||
  "9b7d440dd92a051f71fe40d040cb201f834236767a54c74e26938af7b213159b";

/* 
  --------------------------
  🔹 Utility Function
  --------------------------
*/
const fetchScholarData = async (authorId) => {
  const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`❌ Failed for ${authorId} → HTTP ${response.status}`);
      return null;
    }

    const data = await response.json();
    // console.log(data);

    if (!data || Object.keys(data).length === 0) {
      console.warn(`⚠️ No data returned for author ID: ${authorId}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      `🚨 Error fetching scholar data for ${authorId}:`,
      error.message
    );
    return null;
  }
};

/* 
  --------------------------
  🔹 Controllers
  --------------------------
*/

// ✅ 1. Get all faculty list
export const getFaculties = (req, res) => {
  try {
    if (!facultyData || facultyData.length === 0) {
      return res.status(404).json({ message: "No faculty data available" });
    }
    res.status(200).json(facultyData);
  } catch (error) {
    console.error("Error fetching faculties:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ 2. Get scholar data for a specific author
export const getScholarData = async (req, res) => {
  const { authorId } = req.params;

  try {
    const data = await fetchScholarData(authorId);

    if (!data) {
      return res.status(404).json({ error: "No scholar data found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(`Error fetching scholar for ID ${authorId}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ 3. Get all publications from all faculties
export const getAllPublications = async (req, res) => {
  try {
    if (!facultyData || facultyData.length === 0) {
      return res.status(404).json({ error: "Faculty list is empty" });
    }

    const allPublications = [];

    for (const faculty of facultyData) {
      console.log(`📘 Fetching publications for: ${faculty.name}`);
      const data = await fetchScholarData(faculty.id);

      if (data?.articles?.length) {
        const publications = data.articles
          .filter((article) => article.title) // Ensure valid entries
          .map((article) => ({
            ...article,
            facultyName: faculty.name,
            facultyDepartment: faculty.department,
            facultyId: faculty.id,
          }));

        allPublications.push(...publications);
      } else {
        console.warn(`⚠️ No articles found for ${faculty.name}`);
      }

      // Delay to prevent SerpAPI rate-limiting
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (allPublications.length === 0) {
      return res.status(404).json({ message: "No publications found" });
    }

    // Safe sorting (handles missing or non-numeric years)
    const sortedPublications = allPublications.sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      return yearB - yearA;
    });

    res.status(200).json(sortedPublications);
  } catch (error) {
    console.error("❌ Error fetching all publications:", error.message);
    res.status(500).json({ error: "Failed to fetch publications" });
  }
};

/* 
  --------------------------
  🔹 Export helper for testing
  --------------------------
*/
export { fetchScholarData };
