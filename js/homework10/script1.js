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

})