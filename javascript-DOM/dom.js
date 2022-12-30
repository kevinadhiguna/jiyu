const p = document.getElementById("message");
console.log(p); // <p id="message">England Premier League</p>

const btnRate = document.getElementById("btn-rate");
const output = document.getElementById("output");

btnRate.addEventListener('click', () => {
  const rates = document.getElementsByName("rate");
  console.log(rates);
  rates.forEach(rate => {
    if (rate.checked) {
      output.innerText = `You selected ${rate.value}`;
    }
  });
});
