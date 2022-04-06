import AuthService from "./AuthService.js";
import bcrypt from "bcryptjs";
import { validationResult } from 'express-validator';

class AuthController {
  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ message: errors });

      const { username, password } = req.body;

      const candidate = await AuthService.getUsersByUsername(username);
      if (candidate) return res.status(400).json({ message: 'Username already taken' })

      const hashPassword = bcrypt.hashSync(password, 7);

      const user = { username, password: hashPassword };

      const createdUser = await AuthService.register(user);
      res.json(createdUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async login(req, res) {
    try {

    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await AuthService.getUsers(req.body);
      res.json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new AuthController();