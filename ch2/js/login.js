export function login() {
  const loginEmail = document.getElementById("email-info");
  const emailButton = document.getElementById("email-button");

  const changeInputValue = (e) => {
    if (e.target.value.length > 0) {
      emailButton.classList.add("active");
    } else {
      emailButton.classList.remove("active");
    }
  };

  loginEmail.addEventListener("keyup", changeInputValue);
}

login();
