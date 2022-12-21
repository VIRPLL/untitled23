let url = new URL(location.href);
let id = url.searchParams.get(`data`);
console.log(id);
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const user in value) {
            let divUser = document.createElement(`div`);
            if (typeof value[user] !== `object`) {
                divUser.innerText = `${user} - ${value[user]}`;
            } else {
                divUser.innerText = `${user}`;

                for (const key in value[user]) {
                    let indiv = document.createElement(`div`);
                    if (typeof value[user][key] !== `object`) {
                        indiv.innerText = `${key} - ${value[user][key]}`
                    } else {
                        indiv.innerText = `${key}`;

                        for (const one in value[user][key]) {
                            let oindiv = document.createElement(`div`);
                            if (typeof value[user][key][one] !== `object`) {
                                oindiv.innerText = `${one} - ${value[user][key][one]}`;
                            } else {
                                oindiv.innerText = `${one}`;
                            }
                            indiv.append(oindiv);
                        }

                    }
                    divUser.append(indiv);
                }
            }

            document.body.append(divUser);
        }
        let btn = document.createElement(`button`);
        btn.innerText = `Post of current user`;
        btn.style.width = `250px`;
        btn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value1 => value1.json())
                .then(value1 => {
                    let divPosts = document.createElement(`div`);
                    divPosts.classList.add(`posts`);
                    for (let post of value1) {
                        let divPost = document.createElement(`div`);
                        divPost.classList.add(`post`);
                        divPost.innerHTML =
                        `
                            <p>Post ID - ${post.id}</p>
                            <p>Title - ${post.title}</p>
                        `;
                        let a = document.createElement(`a`);
                        a.innerText = `Post of current user`;
                        a.setAttribute(`href`, `post-detail.html?data=${post.id}`);
                        divPost.append(a);
                        divPosts.append(divPost);
                    }
                    document.body.append(divPosts);
                })
        }
        document.body.append(btn);
    })
