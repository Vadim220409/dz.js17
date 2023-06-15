let storedUser = localStorage.getItem("user");

if (storedUser) {
    let user = JSON.parse(storedUser);

    let nameElement = document.querySelector(".name")
    nameElement.textContent = "Ваше ім'я: " + user.name;
}

else {
    cns.log("Інформація про користувача не знайдена."); 
}