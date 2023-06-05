const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const convertBtn = document.querySelector("#convert");

let url =
  "https://api.freecurrencyapi.com/v1/latest?apikey=kDs9oRoxoEFfqMEWqJmNWdvX98nvxeBh4jRZSoGf&base_currency=";
function takeInputs(e) {
  const amount = Number(amountInput.value);
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;
  getValues(amount, firstOptionValue, secondOptionValue).then((result) => {
    resultInput.value = result.toFixed(3);
  });
}
async function getValues(amount, firstOptionValue, secondOptionValue) {
  const response = await fetch(url + firstOptionValue);
  const result = await response.json();
  const exchangedValue = amount * result.data[secondOptionValue];
  return exchangedValue;
}

convertBtn.addEventListener("click", takeInputs);
