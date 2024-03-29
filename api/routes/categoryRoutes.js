import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCurrentCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/category", authenticate, authorizeAdmin, createCategory);
router.put(
  "/category/:categoryId",
  authenticate,
  authorizeAdmin,
  updateCurrentCategory
);
router.delete(
  "/category/:categoryId",
  authenticate,
  authorizeAdmin,
  deleteCategory
);
router.get("/category", authenticate, authorizeAdmin, getAllCategory);
router.get("/category/:categoryId", authenticate, authorizeAdmin, getCategory);

export default router;
