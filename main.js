
async function getGithubUserInfo(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

const data = await getGithubUserInfo('octocat').json;
console.log(data);
