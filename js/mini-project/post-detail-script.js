let url = new URL(location.href);
let id = url.searchParams.get(`data`);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(value => value.json())
.then(value => {
    let divPost = document.createElement(`div`);
    divPost.classList.add(`post`);
    divPost.innerHTML =`
        <p>User Id - ${value.userId}</p>
        <p>Id - ${value.id}</p>
        <p>Title - ${value.title}</p>
        <p>Body - ${value.body}</p>
    `;
    let btn = document.createElement(`button`);
    btn.innerText = `Comments`;
    btn.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value1 => value1.json())
            .then(value1 => {
                let commentsDiv = document.createElement(`div`);
                commentsDiv.classList.add(`comments`);
                for (let comment of value1) {
                    let commentDiv = document.createElement(`div`);
                    commentDiv.classList.add(`comment`);
                    commentDiv.innerHTML = `
                        <p>Post Id - ${comment.postId}</p>
                        <p>Id - ${comment.id}</p>
                        <p>Name - ${comment.name}</p>
                        <p>Email - ${comment.email}</p>
                        <p>Body ${comment.body}</p>
                    `;
                    commentsDiv.append(commentDiv);
                }
                document.body.append(commentsDiv);
            })
    }
    divPost.append(btn);
    document.body.append(divPost);
})