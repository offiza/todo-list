import UserSchema from "../DbSchema/UserSchema.js";

class AuthService {
  async register(user) {
    if (!user.username || !user.password) return;

    const createdUser = await UserSchema.create(user);
    return createdUser;
  }

  async login(req, res) {
    try {

    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getUsers() {
    const users = await UserSchema.find();
    return users;
  }

  async getUsersByUsername(username) {
    const users = await UserSchema.findOne({ username });
    return users;
  }
}

export default new AuthService();