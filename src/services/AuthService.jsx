const AuthService = {
    // Simulated user data for demonstration purposes
    users: [
      { id: 1, username: 'user1', password: 'password1' },
      { id: 2, username: 'user2', password: 'password2' },
    ],
  
    // Method to authenticate a user
    login: (username, password) => {
      // Simulate user authentication
      const user = AuthService.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        // Store user data in local storage or session storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true; // Authentication successful
      }
      return false; // Authentication failed
    },
  
    // Method to check if a user is authenticated
    isAuthenticated: () => {
      // Check if currentUser is stored in local storage or session storage
      return localStorage.getItem('currentUser') !== null;
    },
  
    // Method to get the current authenticated user
    getCurrentUser: () => {
      // Retrieve currentUser from local storage or session storage
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  
    // Method to log out the current user
    logout: () => {
      // Remove currentUser from local storage or session storage
      localStorage.removeItem('currentUser');
    },
  };
  
  export default AuthService;
  