import { Request, Response } from "express";
import URLModel from "../model/url.schema";
import slugify from "slugify";

export const aliasName = async (req: Request, res: Response) => {
  try {
    const { name, url } = req.body;
    if (!name || !url) {
      res.status(400).json({ error: "Alias Name or URL is required" });
      return;
    }
    if (name.length <= 2) {
      res
        .status(400)
        .json({ error: "the Alias name should be more than length 2" });
      return;
    }
    const slug = slugify(name);

    const checkPresent = await URLModel.findOne({ name: slug });

    if (checkPresent) {
      res.status(400).json({ error: "Choose another name" });
      return;
    }

    const newURL = new URLModel({
      name: slug,
      url,
    });

    await newURL.save();

    res
      .status(200)
      .json({ message: "URL created", url: process.env.URL + name });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const redirectURL = async (req: Request, res: Response) => {
  try {
    const { alias } = req.params;
    if (!alias) {
      res
        .status(400)
        .json({ error: "Something went wrong, there is no params" });
      return;
    }
    const URL = await URLModel.findOne({ name: alias });
    if (!URL) {
      res.status(400).json({ error: "No url associated with this url" });
      return;
    }
    res.redirect(URL.url);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: "Internal server error " + error.message });
      return;
    }
    res.status(500).json({ error: "Unknown error" });
  }
};
