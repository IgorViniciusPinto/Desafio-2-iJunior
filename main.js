
let name = document.getElementById("cardholder-name");
let spanName = document.querySelector("#cardholder-name + span");
let number = document.getElementById("card-number");
let spanNumber = document.querySelector("#card-number + span");
let months = document.getElementById("expiration-date-m");
let years = document.getElementById("expiration-date-y");
let spanDate = document.querySelector("div.input + span");
let cvc = document.getElementById("cvc");
let spanCvc = document.querySelector("#cvc + span");
let nameInCard = document.querySelector(".card-name");
let numberInCard = document.querySelector(".card-number");
let monthInCard = document.querySelector(".card-expiration-date .month");
let yearsInCard = document.querySelector(".card-expiration-date .years");
let cvcInCard = document.querySelector(".card-back span");
let buttonConfirm = document.querySelector("button.confirm");
let buttonContinue = document.querySelector("button.continue");

let secForm = document.querySelector("section.form");
let secState = document.querySelector("section.completed-state");

name.addEventListener("input", function () {
  nameInCard.textContent = name.value;
});

number.addEventListener("input", function () {
  let value = number.value.replace(/\s+/g, "");
  if (!/^\d*$/.test(value)) {
    spanNumber.textContent = "Just A Number";
    number.value = number.value.slice(0, -1);
    return;
  }
  spanNumber.textContent = "";
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || "";
  number.value = formattedValue;

  numberInCard.textContent = formattedValue;
});

months.addEventListener("input", function () {
  if (/^(0[1-9]|1[0-2])$/.test(months.value)) {
    monthInCard.textContent = months.value;
    spanDate.textContent = "";
  } else if (months.value === "") {
    spanDate.textContent = "Can't Be Blank";
  } else if (!/^(0[1-9]|1[0-2])$/.test(months.value)) {
    spanDate.textContent = "Wrong Format";
  }
});

years.addEventListener("input", function () {
  if (/^\d{2}$/.test(years.value)) {
    yearsInCard.textContent = years.value.match(/^\d{2}$/);
    spanDate.textContent = "";
  } else if (years.value === "") {
    spanDate.textContent = "Can't Be Blank";
  } else if (!/^\d{2}$/.test(years.value)) {
    spanDate.textContent = "Wrong Format";
  }
});

cvc.addEventListener("input", function () {
  if (/^\d{3}$/.test(cvc.value)) {
    cvcInCard.textContent = cvc.value;
    spanCvc.textContent = "";
  } else if (!/^\d{3}$/.test(cvc.value)) {
    spanCvc.textContent = "Just Number";
  } else if (cvc.value === "") {
    spanCvc.textContent = "Can't Be Blank";
  }
});

buttonConfirm.addEventListener("click", function () {
  if (
    name.value !== "" &&
    number.value.length > 16 &&
    months.value.match(/^(0[1-9]|1[0-2])$/) !== "" &&
    years.value.match(/^\d{2}$/) !== "" &&
    cvc.value.match(/^\d{3}$/)
  ) {
    secState.style.display = "flex";
    secForm.style.display = "none";
  }
});

buttonContinue.addEventListener("click", function () {
  secState.style.display = "none";
  secForm.style.display = "flex";
  window.location.reload();
});
