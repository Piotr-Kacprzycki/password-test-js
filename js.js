const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 9;


const checkPassword = () => {
  if (
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {

  

    p.textContent = "Masz bardzo dobre hasło !!";
    p.style.color = "Green";

  }
  else if (pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = "Masz dobre hasło";
    p.style.color = "gold";
  } else {
    p.textContent = "Masz za słabe hasło";
    p.style.color = "red";
  }
};

const formLog = () => {
  if (pass.value.length > minValue) {
    p.textContent = "Długość ok";
    checkPassword();
  } else {
    p.textContent = "Masz za krótkie hasło !!";
  }
};

pass.addEventListener("keyup", formLog);
document.body.addEventListener("click", () => {
  p.textContent = "";
  
});




