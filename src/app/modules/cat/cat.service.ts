import { ICat } from './cat.interface';
import { Cat } from './cat.model';

const addCat = async (catData: ICat): Promise<ICat> => {
  const result = await Cat.create(catData);
  return result;
};

const getAllCats = async () => {
  const result = await Cat.find().exec();
  return result;
};

export const catServices = {
  addCat,
  getAllCats,
};
