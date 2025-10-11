// config/serpapi.js - Updated to use your backend API

const API_BASE_URL = "http://localhost:4000/api/serpapi";

// Fetch publications by author ID using your backend
export const fetchAuthorPublications = async (authorId, num = 30) => {
  try {
    console.log(`Fetching publications for author ID: ${authorId}`);

    const response = await fetch(
      `${API_BASE_URL}/author/${authorId}?num=${num}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || "Failed to fetch publications");
    }
  } catch (error) {
    console.error(`Error fetching publications for author ${authorId}:`, error);
    throw error;
  }
};

// Search publications using your backend
export const searchPublications = async (query, params = {}) => {
  try {
    const searchParams = new URLSearchParams({
      q: query,
      ...params,
    });

    const response = await fetch(
      `${API_BASE_URL}/search?${searchParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || "Search failed");
    }
  } catch (error) {
    console.error("Error searching publications:", error);
    throw error;
  }
};

// Get all faculty profiles from backend
export const getFacultyProfiles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/faculty`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || "Failed to fetch faculty profiles");
    }
  } catch (error) {
    console.error("Error fetching faculty profiles:", error);
    throw error;
  }
};

// Fetch all faculty publications at once from backend
export const fetchAllFacultyPublicationsFromAPI = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/faculty/publications`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error || "Failed to fetch faculty publications");
    }
  } catch (error) {
    console.error("Error fetching all faculty publications:", error);
    throw error;
  }
};

// Keep the facultyProfiles array for backward compatibility
export const facultyProfiles = [
  {
    id: 1,
    name: "Dr. John Smith",
    scholarId: "KoJsHP8AAAAJ",
    email: "john.smith@university.edu",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    scholarId: "v0oICbUAAAAJ",
    email: "sarah.johnson@university.edu",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    scholarId: "s2J3tYQAAAAJ",
    email: "michael.chen@university.edu",
  },
  {
    id: 4,
    name: "Dr. Emily Davis",
    scholarId: "r0l4pXcAAAAJ",
    email: "emily.davis@university.edu",
  },
  {
    id: 5,
    name: "Dr. Robert Wilson",
    scholarId: "q9k8mZaAAAAJ",
    email: "robert.wilson@university.edu",
  },
  {
    id: 6,
    name: "Dr. Lisa Brown",
    scholarId: "p5j7nVbAAAAJ",
    email: "lisa.brown@university.edu",
  },
  {
    id: 7,
    name: "Dr. David Miller",
    scholarId: "o4i6lUcAAAAJ",
    email: "david.miller@university.edu",
  },
  {
    id: 8,
    name: "Dr. Maria Garcia",
    scholarId: "n3h5kTcAAAAJ",
    email: "maria.garcia@university.edu",
  },
  {
    id: 9,
    name: "Dr. James Wilson",
    scholarId: "m2g4jSbAAAAJ",
    email: "james.wilson@university.edu",
  },
  {
    id: 10,
    name: "Dr. Patricia Taylor",
    scholarId: "l1f3iRaAAAAJ",
    email: "patricia.taylor@university.edu",
  },
];
