import { Request, Response } from "express";

const list = async (req: Request, res: Response) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    console.log("object :>> ", error);
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.send(`Hello World! ${id}`);
  } catch (error) {
    console.log("object :>> ", error);
  }
};

export { list, read };
