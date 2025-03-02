let body = document.body;
let content = document.querySelector(".content");
let sidebar = document.querySelector(".sidebar");
let mainSection = document.querySelector(".main-section");
let form = document.querySelector(".personal-info");
let steps = document.querySelectorAll(".steps");

let userData = {
  isMothly: true,
  package: "arcade",
};
let packageDetails = {
  arcade: 9,
  advance: 12,
  pro: 15,
};

let presentStep = 1;
changeStatusOfSteps();

let selectOptionForm = document.querySelector("#selectOption");

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

    selectOptionForm.classList.remove("hidden");

    presentStep += 1;
    changeStatusOfSteps();
  }
});

let monthlyOrYearlyInput = document.querySelector("#monthlyOrYearly");

let chooseOption = document.querySelector("#chooseOption");
chooseOption.style.backgroundColor = "hsl(231, 100%, 99%)";
let arcadeSpan = document.querySelector(".arcade span");
let advanceSpan = document.querySelector(".advance span");
let proSpan = document.querySelector(".pro span");

let planOptionDiv = document.querySelectorAll(".plan-option div");
changeBorderOfPackages(planOptionDiv[0]);

let planOption = document.querySelector(".plan-option");

planOption.addEventListener("click", (event) => {
  let parent = event.target;
  if (event.target.classList.contains("option")) {
    parent = event.target;
  } else {
    parent = event.target.parentElement;
  }

  let option = parent.classList[0];
  userData.package = option;
  changeBorderOfPackages(parent);
});

function changeBorderOfPackages(parent) {
  planOptionDiv.forEach((div) => {
    if (div == parent) {
      div.style.borderColor = "hsl(243, 100%, 62%)";
    } else {
      div.style.borderColor = "hsl(229, 24%, 87%)";
    }
  });
}

chooseOption.addEventListener("click", (event) => {
  if (monthlyOrYearlyInput.checked) {
    userData["isMothly"] = false;
    proSpan.innerText = "$150/yr";
    arcadeSpan.innerText = "$90/yr";
    advanceSpan.innerText = "$120/yr";
    document.querySelector(".monthly").style.color = "hsl(231, 11%, 63%)";
    document.querySelector(".yearly").style.color = "hsl(225, 82%, 20%)";

    for (let i = 0; i < 3; i++) {
      let element = planOptionDiv[i].querySelector(".freetrail");
      element.classList.remove("hidden");
      let test = planOptionDiv[i].querySelector("h5");
      test.classList.add("hidden");
    }
  } else {
    userData["isMothly"] = true;
    for (let i = 0; i < 3; i++) {
      let element = planOptionDiv[i].querySelector(".freetrail");
      element.classList.add("hidden");
      let test = planOptionDiv[i].querySelector("h5");
      test.classList.remove("hidden");
    }
    document.querySelector(".monthly").style.color = "hsl(225, 82%, 20%)";
    document.querySelector(".yearly").style.color = "hsl(231, 11%, 63%)";

    arcadeSpan.innerText = "$9/mo";
    advanceSpan.innerText = "$12/mo";
    proSpan.innerText = "$15/mo";
  }
});

let selectOptionFormBackButton=selectOptionForm.querySelector('.footer button');

selectOptionFormBackButton.addEventListener('click',(event)=>{
  form.classList.remove("hidden");
  selectOptionForm.classList.add('hidden');

})

selectOptionForm.addEventListener("submit", (event) => {
  presentStep += 1;
  changeStatusOfSteps();
  event.preventDefault();
  selectOptionForm.classList.add("hidden");
  document.querySelector('.add-ons').classList.remove('hidden');
});

function changeStatusOfSteps() {
  console.log(presentStep);

  let step = steps[presentStep - 1];
  step.querySelector("span").style.backgroundColor = "hsl(206,94%,87%)";
  step.querySelector("span").style.color = "black";
  step.querySelector("span").classList.remove("border");
  if (presentStep != 1) {
    console.log("inside");

    let prev = steps[presentStep - 2];
    prev.querySelector("span").style.backgroundColor = "transparent";
    prev.querySelector("span").style.color = "white";
    prev.querySelector("span").classList.add("border");
  }
}


let addsON=document.querySelector('.adds-on');
let serviceOptions=document.querySelector(".serviceOptions");

serviceOptions.querySelectorAll('input').forEach((input)=>{
  let parent=input.parentElement;
  parent.querySelector('.cost').style.color='hsl(243, 100%, 62%)';
  input.style.width='1.5rem';
  input.style.height='1.5rem';
  input.style.backgroundColor='hsl(243, 100%, 62%)';
  console.log('Input background color:', input.style.backgroundColor);
  if(input.checked){
    console.log('checkd');
    
    parent.style.backgroundColor='hsl(229, 24%, 87%)';
  }

})
