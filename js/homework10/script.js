// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let cont = document.createElement(`div`);
document.body.append(cont);
fetch(`http://jsonplaceholder.typicode.com/users`)
.then(value => value.json())
.then(value => {
    let ul = document.createElement(`ul`);
    cont.append(ul);
    for (const valueElement of value) {
        let li = document.createElement(`li`);
        li.innerText = `ID = ${valueElement.id} Name = ${valueElement.name}`;
        let pos = document.createElement(`a`);
        pos.href = `user.html?data=${valueElement.id}`;
        pos.innerText = ` more`;
        li.append(pos);
        ul.append(li);
    }

});