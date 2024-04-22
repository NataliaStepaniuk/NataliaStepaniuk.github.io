/*const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

const template = (item, user) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}">${user.name}</span></strong></p>
`;

const userCache = {};

async function getPosts() {
  try {
    const response = await fetch(urlPosts);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
    const posts = await response.json();

    const userPromises = posts.map(async post => {
      if (userCache[post.userId]) {
        return userCache[post.userId]; 
      } else {
        const userResponse = await fetch(`${urlUsers}/${post.userId}`);
        if (!userResponse.ok) {
          throw new Error(`Error fetching user ${post.userId}: ${userResponse.status}`);
        }
        const user = await userResponse.json();
        userCache[user.id] = user;
        return user;
      }
    });

    const users = await Promise.all(userPromises);
    const result = posts.map((post, index) => template(post, users[index]));
    document.getElementById("blog").innerHTML = result.join('');
  } catch (error) {
    console.error(error);
  }
}

getPosts();*/
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

const template = (item, user) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}">${user.name}</span></strong></p>
`;

const userCache = {};

async function getPosts() {
  try {
    const response = await fetch(urlPosts);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
    const posts = await response.json();

    for (const post of posts) {
      if (!userCache[post.userId]) {
        const userResponse = await fetch(`${urlUsers}/${post.userId}`);
        if (!userResponse.ok) {
          throw new Error(`Error fetching user ${post.userId}: ${userResponse.status}`);
        }
        const user = await userResponse.json();
        userCache[post.userId] = user;
      }

      const result = template(post, userCache[post.userId]);
      document.getElementById("blog").innerHTML += result;
    }
  } catch (error) {
    console.error(error);
  }
}

getPosts();
