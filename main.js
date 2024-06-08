const billAmount = document.querySelector("#billAmount");
const tipPercentage = document.querySelector("#tipPercentage");
const btnCalculate = document.querySelector("#btnCalc");
const totalTip = document.querySelector("#total");

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();
  const bill = billAmount.value;
  const tip = tipPercentage.value;
  const tipValue = bill * (1 + tip / 100);
  totalTip.innerHTML = `${tipValue} €`;
});
