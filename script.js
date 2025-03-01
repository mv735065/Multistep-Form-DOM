let body = document.body;
let content = document.querySelector(".content");
let sidebar = document.querySelector(".sidebar");
let mainSection = document.querySelector(".main-section");
let form = document.querySelector(".personal-info");

let selectOption = document.querySelector("#selectOption");

form.addEventListener("submit", (event) => {
  console.log("clicked");
  event.preventDefault();
  let isValid = true;

  let inputName = document.getElementById("name");
  let name = inputName.value.trim();
  let nameError = document.querySelector("#nameError");
  if (name === "") {
    nameError.classList.remove("hidden");
    isValid = false;
    inputName.style.borderColor = "red";
  } else {
    nameError.classList.add("hidden");
    inputName.style.borderColor = "hsl(229,24%,87%)";
  }

  let email = document.getElementById("email").value.trim();
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.classList.remove("hidden");
    isValid = false;
    document.getElementById("email").style.borderColor = "red";
  } else {
    emailError.classList.add("hidden");
    document.getElementById("email").style.borderColor = "hsl(229,24%,87%)";
  }

  let phone = document.getElementById("phoneNumber").value.trim();
  let phoneError = document.getElementById("phoneNumberError");
  if (phone === "") {
    phoneError.classList.remove("hidden");
    document.getElementById("phoneNumber").style.borderColor = "red";
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
    document.getElementById("phoneNumber").style.borderColor =
      "hsl(229,24%,87%)";
  }

  if (isValid) {
    form.classList.add("hidden");
    selectOption.classList.remove("hidden");
  }
});

// const toggleContainer = document.getElementById("toggleContainer");
// const toggleSwitch = document.getElementById("toggleSwitch");
// const monthlyLabel = document.getElementById("monthlyLabel");
// const yearlyLabel = document.getElementById("yearlyLabel");

// toggleContainer.addEventListener("click", () => {
//   toggleSwitch.classList.toggle("bg-blue-900");

//   // Move the switch
//   toggleSwitch.children[0].classList.toggle("translate-x-6");

//   // Change text color
//   monthlyLabel.classList.toggle("text-gray-400");
//   monthlyLabel.classList.toggle("text-blue-900");

//   yearlyLabel.classList.toggle("text-gray-400");
//   yearlyLabel.classList.toggle("text-blue-900");
// });
