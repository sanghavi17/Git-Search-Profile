const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


const fectch = async (user) => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=8bf30c558cd846d58066&client_secret=16f3bc210831dfa129360f9987783051a08752c7`
  );

  const data = await api_call.json();
  return { data };
};

const showdata = () => {
  fectch(inputValue.value).then((res) => {
    console.log(res);

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
    unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
    reposContainer.innerHTML = `Repository: <span class="main__profile-value">${res.data.public_repos}</span>`;
    urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showdata();
});
