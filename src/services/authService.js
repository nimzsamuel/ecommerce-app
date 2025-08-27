// Mock Auth API (you can replace with Firebase/Auth0 later)

let users = [];

export const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    const exists = users.find((u) => u.email === email);
    if (exists) reject("User already exists");
    else {
      const newUser = { id: Date.now(), username, email, password };
      users.push(newUser);
      resolve(newUser);
    }
  });
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) reject("Invalid credentials");
    else resolve(user);
  });
};
