const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item, authorName) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}">${authorName}</span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };
  });

  return promise;
};

const usersCache = {};

xhrPromise("GET", url)
  .then((response) => JSON.parse(response))
  .then((posts) => {
    const promises = posts.map((post) => {
      if (usersCache[post.userId]) {
        return Promise.resolve(usersCache[post.userId]);
      } else {
        return xhrPromise(
          "GET",
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        ).then((response) => {
          const user = JSON.parse(response);
          usersCache[post.userId] = user.name;
          return user.name;
        });
      }
    });

    return Promise.all(promises);
  })
  .then((authorNames) => {
    const result = authorNames.reduce((acc, authorName, index) => {
      const post = post[index];
      return acc + template(post, authorName);
    }, "");

    document.getElementById("blog").innerHTML = result;
  })
  .catch((error) => console.error(error));
