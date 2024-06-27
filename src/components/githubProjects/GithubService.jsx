// GithubService.js

import { git_baseURL, git_token, git_username } from "../../constants";


export const fetchProjects = async () => {
  try {
    const response = await fetch(`${git_baseURL}/users/${git_username}/repos`, {
      headers: {
        Authorization: `token ${git_token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};
