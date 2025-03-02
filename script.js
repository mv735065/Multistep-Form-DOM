let body = document.body;
let content = document.querySelector(".content");
let sidebar = document.querySelector(".sidebar");
let mainSection = document.querySelector(".main-section");
let form = document.querySelector(".personal-info");


let selectOptionForm=document.querySelector('#selectOption');

let monthlyOrYearlyInput=document.querySelector('#monthlyOrYearly');

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


let chooseOption=document.querySelector('#chooseOption');
let arcade=document.querySelector('.arcade span');
let advance=document.querySelector('.advance span');
let pro=document.querySelector('.pro span');

let planOption=document.querySelectorAll('.plan-option div' );

chooseOption.addEventListener('click', (event) => {
  if (monthlyOrYearlyInput.checked) {
    pro.innerText = '$150/yr';
    arcade.innerText = '$90/yr';
    advance.innerText = '$120/yr';
    console.log(planOption);
    
            for(let i=0;i<3;i++) {
          let element=planOption[i].querySelector(('.freetrail'));
      element.classList.remove('hidden');
     let test=planOption[i].querySelector('h5');
     test.classList.add('hidden');
    };
    
   
  } else {
    for(let i=0;i<3;i++) {
      let element=planOption[i].querySelector(('.freetrail'));
  element.classList.add('hidden');
 let test=planOption[i].querySelector('h5');
 test.classList.remove('hidden');
};

    arcade.innerText = '$9/mo';
    advance.innerText = '$12/mo';
    pro.innerText = '$15/mo';
  }
});




