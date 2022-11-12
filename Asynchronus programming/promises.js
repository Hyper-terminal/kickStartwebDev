// promises

let posts = [
    {
        title: "post 1",
        body: "this is post 1 body"
    },
    {
        title: "post 2",
        body: "this is post 2 body"
    },
    {
        title: "post 3",
        body: "this is post 3 body"
    }
];

const user = { name: "sherlock", lastUpdate: new Date().getTime() };

function getPosts() {
    let output = "";
    for (i = 0; i < posts.length; i++) {
        output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) / 1000
            }</li>`;
    }

    console.log("Showing posts");

    document.body.innerHTML = output;
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });


            let error = false;

            if (error) reject("Error: Something went wrong!");
            else resolve("Created new post successfuly");
        }, 2000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length === 0) {
                reject("Error: No post present to delete");
            } else {
                console.log("deleting post");
                posts.pop();
                resolve;
            }
        }, 1000);

    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        if (user) {
            user.lastUpdate = new Date().getTime();
            resolve(user.lastUpdate)
        }
        else reject();
    })
}



Promise.all([createPost({ title: "post 4", body: "this is post 4 body" }), updateLastUserActivityTime(),])
    .then(([val, updateUser]) => {
        console.log(val);
        console.log(updateUser);
    })
    .catch(err => console.log("Error aa gaya "))