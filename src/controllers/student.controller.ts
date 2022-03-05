import { Request, Response } from 'express';
import Student from '../models/Student.model';
const index = async (req: Request, res: Response) => {
  const students = await Student.find();
  res.render('pages/students/list', { students });
};

const create = async (req: Request, res: Response) => {
  res.render('pages/students/add');
};

const store = async (req: Request, res: Response) => {
  const { studentCode, fullname, address } = req.body;
  await Student.create({
    studentCode,
    fullname,
    address,
  });

  res.redirect('/students');
};

const edit = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await Student.findById(id);

  if (!student) {
    res.redirect('/students');
  }

  res.render('pages/students/edit', { student });
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { studentCode, fullname, address } = req.body;
  await Student.findByIdAndUpdate(id, {
    studentCode,
    fullname,
    address,
  });

  res.redirect('/students');
};

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Student.deleteOne({ _id: id });
  res.redirect('/students');

};
const search = async (req: Request, res: Response) => {
  let { term } = req.query;
  console.log(term)
  const students = await Student.find({studentCode: {$regex: new RegExp(term as string, 'i')}})
  res.render('pages/students/list', { students });
};
export default {
  index,
  create,
  store,
  edit,
  update,
  destroy,
  search
};
