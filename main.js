let name = prompt("Введіть своє ім'я:");
let age = prompt("Введіть свій вік:");
let country = prompt("Введіть свою країну");

const user = {
    name: name,
    age: age,
    country: country
}

localStorage.setItem("user", JSON.stringify(user));
