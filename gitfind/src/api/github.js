export const githubService = {
    getUser: async (username) => {
      const user = username.startsWith("@") ? username.substring(1) : username;
      const response = await fetch(`https://api.github.com/users/${user}`);
      return response.json();
    },
    
    getUserRepos: async (username) => {
      const user = username.startsWith("@") ? username.substring(1) : username;
      const response = await fetch(`https://api.github.com/users/${user}/repos`);
      return response.json();
    }
  };