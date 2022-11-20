const form = document.querySelector("#form_inscription");

let fn = document.querySelector("input[name='fname']");

let ln = document.querySelector("input[name='lname']");

let adresse = document.querySelector("input[name='address']");

let phone = document.querySelector("input[name='phone']");

let dat = document.querySelector("input[name='date']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    "First Name": fn.value,
    "Last Name": ln.value,
    "Adress": adresse.value,
    "Phone": phone.value,
    "Date": dat.value,
  };
  localStorage.setItem("client_data", JSON.stringify(obj));
  console.log(localStorage.getItem("client_data"));
});
