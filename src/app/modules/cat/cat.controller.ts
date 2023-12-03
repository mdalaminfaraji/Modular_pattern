/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { catServices } from './cat.service';

export const createCatController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await catServices.addCat(data);
    res.status(200).json({
      success: true,
      message: 'create cat successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something wend Wrong',
      error: error,
    });
  }
};
export const getAllCatController = async (req: Request, res: Response) => {
  try {
    const result = await catServices.getAllCats();
    res.status(200).json({
      success: true,
      message: 'Cat faced successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something wend Wrong',
      error: error,
    });
  }
};
