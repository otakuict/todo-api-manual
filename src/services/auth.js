import jwt from "jsonwebtoken";

export function generateAccessToken(username, password) {
  const userStorage = {
    username: process.env.TODO_USERNAME,
    password: process.env.PASSWORD,
  };

  if (username === userStorage.username && password === userStorage.password) {
    return jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
  }
  return null;
}
//
