import express from "express";
import Service from "../models/Service.js";
import {
  createServise,
  deleteServiceById,
  getAllServices,
  getServiceById,
  updateServiceById,
} from "../controllers/serviceController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createServise);

router.get("/:id", getServiceById);

router.get("/", getAllServices);

router.patch("/:id", verifyAdmin, updateServiceById);

router.delete("/:id", verifyAdmin, deleteServiceById);

export default router;
