import Service from "../models/Service.js";
import { createError } from "../utils/error.js";

export const createServise = async (req, res, next) => {
  const newService = new Service(req.body);

  try {
    const savedServise = await newService.save();
    res.status(200).json(savedServise);
  } catch (error) {
    next(error);
  }
};

export const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

export const getServiceById = async (req, res, next) => {
  // const failed = true;
  // if (failed) return next(createError(401, "You are not authenticated!"));

  try {
    const currentServise = await Service.findById(req.params.id);
    res.status(200).json(currentServise);
  } catch (error) {
    next(error);
  }
};

export const updateServiceById = async (req, res, next) => {
  try {
    const updatedServise = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedServise);
  } catch (error) {
    next(error);
  }
};

export const deleteServiceById = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(204).json({ data: null });
  } catch (error) {
    next(error);
  }
};
