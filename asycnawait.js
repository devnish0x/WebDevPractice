// async function getData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // waits until fetch completes
//     const data = await response.json(); // waits until data is converted to JSON
//     console.log(data);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// getData();

// async function example() {
//   const data = await (await fetch('https://api.github.com/users/devnish0x')).text();
//   console.log(data);
// }

// example();

async function getUser() {
  try {
    console.log("fetching data...");

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new error(`Failed to fetch ${response.status}`);
    }
    let user = await response.json();

    // console.log(user);

    let us1 = user[0];
    console.log(`Fetching post for ${us1.name}`);

    let postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${us1.id}`
    );

    if (!(await postResponse).ok) {
      throw new error(`Failed to fetch 2 ${response.status}`);
    }

    const posts = await postResponse.json();

    console.log(`Post by ${us1.name}`);

    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });

    // posts.array.forEach((post, index) => {
    //   console.log(`${index + 1}.${post.title}`);
    // });
    return {
      user: us1,
      posts: posts,
    };
  } catch (error) {
    console.error("ERROR :", error.message);
  }
}

getUser();
