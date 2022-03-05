import { Request, Response } from 'express';
import UserModel from '../models/User.model';

const login = (req: Request, res: Response) => {
  res.render('pages/auth/login');
};

const loginPost = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.render('pages/auth/login', {
      error: 'User not found',
    });
  }

  if (user.password !== password) {
    return res.render('pages/auth/login', {
      error: 'Wrong password',
    });
  }

  // req.session.user = user as any;
  res.redirect('/students');
};

const register = (req: Request, res: Response) => {
  res.render('pages/auth/register');
};

const registerPost = async (
  req: Request,
  res: Response
) => {
  const { username, password, confirmPassword } = req.body;

  if (password === confirmPassword) {
    const user = await UserModel.create({
      username,
      password,
    });
    // req.session.user = user as any;
    res.redirect('/students');

    return;
  }

  res.render('pages/auth/register', {
    error: 'Passwords do not match',
  });
};

export default {
  login,
  loginPost,
  register,
  registerPost,
};
