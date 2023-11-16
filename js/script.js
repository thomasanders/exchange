let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.3614;
let rateGBP = 4.9925;
let rateUSD = 4.0079;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "USD":
      result = amount / rateUSD;
      break;

    case "GBP":
      result = amount / rateGBP;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(3)}  PLN = <strong>${result.toFixed(3)} ${currency}</strong>`;
});
