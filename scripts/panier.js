let ip = document.querySelector("input[name='IP']");
let vip = document.querySelector("input[name='VIP']");
let uvip = document.querySelector("input[name='UVIP']");

const form = document.querySelector("#ticker_form");

form.addEventListener("submit", (e) => {
  let obj = {
    ip: parseInt(ip.value),

    vip: parseInt(vip.value),

    uvip: parseInt(uvip.value),
  };
  console.log(obj);
  localStorage.setItem("tickets", JSON.stringify(obj));
});
