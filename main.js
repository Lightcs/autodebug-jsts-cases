
async function getGithubUserInfo(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

console.log(getGithubUserInfo('octocat').json());
