const AuthService = {
  users: [
    { id: 1, username: 'user1', passwordHash: 'hashedPassword1' },
    { id: 2, username: 'user2', passwordHash: 'hashedPassword2' },
  ],

  login: (username, password) => {
    const user = AuthService.users.find(
      (user) => user.username === username && AuthService.comparePasswords(password, user.passwordHash)
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  },

  isAuthenticated: () => {
    return localStorage.getItem('currentUser') !== null;
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  },

  logout: () => {
    localStorage.removeItem('currentUser');
  },

  comparePasswords: (password, passwordHash) => {
    // Implement password hashing and comparison logic
    // Example:
    // return bcrypt.compareSync(password, passwordHash);
    return password === passwordHash; // Simulated comparison
  },
};

export default AuthService;
