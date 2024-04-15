/*const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
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
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
		let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;

})
.then(() => {
  const users = document.querySelectorAll('.author')
  users.forEach(user => {
      xhrPromise('GET', `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
      .then(response => {
          let userName = JSON.parse(response)
          user.textContent = userName.name
      })
  })
})*/

const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlUsers = "https://jsonplaceholder.typicode.com/users";

const template = (item, user) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}">${user.name}</span></strong></p>
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
        resolve(JSON.parse(xhr.response));
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };
  });

  return promise;
};


const userCache = {};

/*xhrPromise("GET", urlPosts)
  .then(posts => {
    const userPromises = posts.map(post => {
      if (userCache[post.userId]) {
        return Promise.resolve(userCache[post.userId]); 
      } else {
        return xhrPromise("GET", `${urlUsers}/${post.userId}`); 
      }
    });

    Promise.all(userPromises)
      .then(users => {
        users.forEach((user, index) => {
          userCache[user.id] = user; 
        });

        const result = posts.map((post, index) => template(post, users[index]));
        document.getElementById("blog").innerHTML = result.join('');
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });*/
  xhrPromise("GET", urlPosts)
  .then(posts => {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      let userPromise;
      if (userCache[post.userId]) {
        userPromise = Promise.resolve(userCache[post.userId]);
      } else {
        userPromise = xhrPromise("GET", `${urlUsers}/${post.userId}`);
      }

      userPromise
        .then(user => {
          userCache[user.id] = user;
          const result = template(post, user);
          document.getElementById("blog").innerHTML += result;
        })
        .catch(error => {
          console.error(error);
        });
    }
  })
  .catch(error => {
    console.error(error);
  });


    




