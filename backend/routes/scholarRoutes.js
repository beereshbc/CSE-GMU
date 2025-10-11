import express from "express";
import {
  getFaculties,
  getScholarData,
  getAllPublications,
} from "../controllers/scholarController.js";

const router = express.Router();

// Faculty list
router.get("/faculties", getFaculties);

// Single scholar data by ID
router.get("/scholar/:authorId", getScholarData);

// All publications
router.get("/all-publications", getAllPublications);

export default router;
