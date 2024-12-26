import { Request, Response } from "express";
import URLModel from "../model/url.schema";
export const aliasName = async (req: Request, res: Response) => {
  try {
    const { name, url } = req.body;
    if (!name || !url) {
      res.status(400).json({ error: "Alias Name or URL is required" });
      return;
    }

    const newURL = new URLModel({
      name,
      url,
    });

    await newURL.save();

    res.status(200).json({ message: "URL created", url: newURL.url });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
