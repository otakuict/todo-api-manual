import express from "express";

import { v4 as uuidv4 } from "uuid";
import * as itemServices from "../../services/task.js";
export const router = express.Router();
let storage = [];

router.get("/", getItemLists);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export async function getItemLists(req, res, next) {
  try {
    const data = itemServices.getItemListService();

    res.status(200).json({ data: data });
  } catch (e) {
    console.log("🚀 ~ getItemLists ~ e:", e);

    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getItemById(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "id is required!" });
    }

    const item = itemServices.getItemByIdService(id);

    res.status(200).json({ data: item });
  } catch (e) {
    console.log("🚀 ~ getItemById ~ e:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createItem(req, res, next) {
  let id = uuidv4();

  try {
    let body = req.body;

    if (!body) {
      res.status(400).json({ message: "body is required!" });
    }

    const created = itemServices.createItemService(id, body);

    res.status(201).json(created);
  } catch (e) {
    console.log("🚀 ~ createItem ~ e:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateItem(req, res, next) {
  try {
    if (!req.body) {
      res.status(400).json({ message: "body is required!" });
    }
    const { id } = req.params;
    const { name, desc } = req.body;

    //validate body
    if (!id) {
      res.status(400).json({ message: "id is required!" });
    }
    const updated = itemServices.updateItemService({ id, name, desc });

    res.status(200).json({ message: "updated", data: updated });
  } catch (e) {
    console.log("🚀 ~ updateItem ~ e:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteItem(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "id is required!" });
    }

    itemServices.deleteItemService(id);

    res.status(200).json({ message: "deleted" });
  } catch (e) {
    console.log("🚀 ~ deleteItem ~ e:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}
