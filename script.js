let content = document.querySelector(".content");
let sidebar = document.querySelector(".sidebar");
let mainSection = document.querySelector(".main-section");
let firstForm = document.querySelector(".personal-info");
let steps = document.querySelectorAll(".steps");
// body.style.height='100vh';
content.style.height='65vh';
mainSection.style.height="100%";
document.querySelectorAll('form').forEach((form)=>form.style.height="100%")

let userPackage = {
  isMothly: true,
  package: "arcade",
};
let packageDetails = {
  arcade: 9,
  advance: 12,
  pro: 15,
};

let usersAddsOn = {
  online: false,
  storage: false,
  custom: false,
};

let addsOnServicesCost = {
  online: 1,
  storage: 2,
  custom: 2,
};

let presentStep = 1;
changeStatusOfSteps();

let selectOptionForm = document.querySelector("#selectOption");

firstForm.addEventListener("submit", (event) => {
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
    firstForm.classList.add("hidden");

    selectOptionForm.classList.remove("hidden");

    presentStep = 2;
    changeStatusOfSteps();
  }
});

let monthlyOrYearlyInput = document.querySelector("#monthlyOrYearly");

let chooseOption = document.querySelector("#chooseOption");
chooseOption.style.backgroundColor = "hsl(231, 100%, 99%)";


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
  userPackage.package = option;
  changeBorderOfPackages(parent);
});


chooseOption.addEventListener("click", (event) => {
  let arcadeSpan = document.querySelector(".arcade span");
let advanceSpan = document.querySelector(".advance span");
let proSpan = document.querySelector(".pro span");
  if (monthlyOrYearlyInput.checked) {
    userPackage["isMothly"] = false;
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
    userPackage["isMothly"] = true;
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

let selectOptionFormBackButton =
  selectOptionForm.querySelector(".footer button");

selectOptionFormBackButton.addEventListener("click", (event) => {
  presentStep = 1;
  firstForm.classList.remove("hidden");
  selectOptionForm.classList.add("hidden");
  changeStatusOfSteps();

});

selectOptionForm.addEventListener("submit", (event) => {
  presentStep = 3;
  changeStatusOfSteps();
  event.preventDefault();
  selectOptionForm.classList.add("hidden");
  document.querySelector(".add-ons").classList.remove("hidden");
  loadAddsOnOptionsDetails();

});


let addsON = document.querySelector(".add-ons");
let serviceOptions = document.querySelector(".serviceOptions");

serviceOptions.addEventListener('click',(eve)=>{
  let div=eve.target;
  
  while (!div.classList.contains('options') && div !== document.body) {
    div = div.parentElement;  
  }

  inputIsCheckedAddStyleForOptions(div.querySelector('input'),div);
  
})

function loadAddsOnOptionsDetails() {
  let options = serviceOptions.querySelectorAll(".options");

  options.forEach((option) => {
    let className = option.classList[0];

    if (!userPackage.isMothly) {
      option.querySelector(".cost span").innerText = `${
        addsOnServicesCost[className] * 10
      }/yr`;
    } else {
      option.querySelector(".cost span").innerText = `${
        addsOnServicesCost[className] * 1
      }/mo`;
    }
    
  });
  
}
addsON.querySelector(".footer button").addEventListener("click", (event) => {
  selectOptionForm.classList.remove("hidden");
  addsON.classList.add("hidden");
  presentStep = 2;
  changeStatusOfSteps();

});

addsON.addEventListener("submit", (event) => {
  presentStep = 4;
  changeStatusOfSteps();
  event.preventDefault();
  addsON.classList.add("hidden");
  document.querySelector(".finishing-up").classList.remove("hidden");

  LoadDocAndAddPaymengDetalis();
});


let finishingUp = document.querySelector(".finishing-up");
finishingUp.addEventListener("submit", (eve) => {
  eve.preventDefault();
  finishingUp.classList.add("hidden");
  document.querySelector(".thankyou-form").classList.remove("hidden");
});

finishingUp.querySelector(".goBack").addEventListener("click", (eve) => {
  addsON.classList.remove("hidden");
  finishingUp.classList.add("hidden");
  LoadDocAndAddPaymengDetalis();
  presentStep = 3;
  changeStatusOfSteps();

});

let paymentDetails = document.querySelector(".paymentDetails");

let totalAmountNeedToPay = 0;

function LoadDocAndAddPaymengDetalis() {
  
  let sum = 0;
  paymentDetails.style.backgroundColor = "hsl(231, 100%, 99%)";

  let paymentPackage = paymentDetails.querySelector(".package");

  let className = paymentPackage.classList[0];
  let monthly = userPackage.isMothly;
  let packageName = userPackage.package;
  let transformedStr =
    packageName.charAt(0).toUpperCase() + packageName.slice(1).toLowerCase();
  let packageCostItem = packageDetails[packageName] * (monthly ? 1 : 10);
  sum += parseInt(packageCostItem);
  if (className === "package") {
    paymentPackage.querySelector("p").innerText = `${transformedStr} ${
      monthly ? "(Monthly)" : "(Yearly)"
    }`;
    paymentPackage.querySelector(".cost").innerText = `  ${packageCostItem}${
      monthly ? "/mo" : "/yr"
    }`;
  }
  usersExtraServices(sum);
}
function usersExtraServices(sum) {
  

  let monthly = userPackage.isMothly;
  let addBorder=false;

  Object.keys(usersAddsOn).forEach((ele) => {
    let service = paymentDetails.querySelector(`.${ele}`);
    if(service.classList[0]==='package') return;
    if (usersAddsOn[ele]) {
    service.classList.remove("hidden");

      let span = service.querySelector("span");
       
      const cost = addsOnServicesCost[ele] * (monthly ? 1 : 10);
      sum += parseInt(cost);
      if(span.classList[0]==='package-change') return;
      span.innerText = `+${cost}${monthly ? "/mo" : "/yr"}`;
      addBorder=true;
    } else {
      service.classList.add("hidden");
    }
  });
  document.querySelector(".totalAmountDetails span").innerText = `${
    monthly ? "(Monthly)" : "(Yearly)"
  }`;
  document.querySelector(".totalAmount").innerText = `+${sum}${
    monthly ? "/mo" : "/yr"
  }`;
  if(addBorder){
paymentDetails.querySelector('.package').style.borderBottom='1px solid hsl(229, 24%, 87%)';

  }
  else{
paymentDetails.querySelector('.package').style.borderBottom='none';
    
  }
}

let changeGoBackToStep2=paymentDetails.querySelector('.package span')


changeGoBackToStep2.addEventListener('click',(eve)=>{
  eve.target.style.color='hsl(243, 100%, 62%)';
  finishingUp.classList.add("hidden");
  selectOptionForm.classList.remove("hidden");
  presentStep=2;
  changeStatusOfSteps();
})

function changeBorderOfPackages(parent) {
  planOptionDiv.forEach((div) => {
    if (div == parent) {
      div.style.borderColor = "hsl(243, 100%, 62%)";
    } else {
      div.style.borderColor = "hsl(229, 24%, 87%)";
    }
  });
}

// console

function changeStatusOfSteps() {
  for(let i=0;i<4;i++){
    let step = steps[i];
    if(i==presentStep-1){
     
      step.querySelector("span").style.backgroundColor = "hsl(206,94%,87%)";
      step.querySelector("span").style.color = "black";
      step.querySelector("span").classList.remove("border");
    }
    else{
      step.querySelector("span").style.backgroundColor = "transparent";
      step.querySelector("span").style.color = "white";
      step.querySelector("span").classList.add("border");
    }
  }
  
}


function inputIsCheckedAddStyleForOptions(input, parent) {
  let className = parent.classList[0];
  if (input.checked) {
    usersAddsOn[className] = false;
    input.checked = false;
    parent.style.borderColor = "hsl(229, 24%, 87%)";
    parent.style.backgroundColor = "transparent";
  } else {
    input.checked = true;
    usersAddsOn[className] = true;
    parent.style.borderColor = " hsl(243, 100%, 62%)";
    parent.style.backgroundColor = "hsl(231, 100%, 99%)";
  }
}