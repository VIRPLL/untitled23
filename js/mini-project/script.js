fetch(`https://jsonplaceholder.typicode.com/users`)
.then(value => value.json())
.then(value => {
    for (let user of value) {
        let div = document.createElement(`div`);
        div.style.border = `2px solid #000000`;
        div.classList.add(`user`);
        div.innerHTML = `

            <h4>ID - ${user.id}</h4>
            <p>Name - ${user.name}</p>
                        `;

        let a = document.createElement(`a`);
        a.innerText = `More`;
        a.setAttribute(`href`, `user-detail.html?data=${user.id}`);
        div.append(a);
        document.body.append(div);
    }
})