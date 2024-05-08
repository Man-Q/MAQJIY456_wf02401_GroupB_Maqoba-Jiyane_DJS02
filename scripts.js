const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  const { dividend, divider } = Object.fromEntries(entries);

  if (Number(dividend) === NaN || Number(divider) === NaN) {
    throw "Something critical went wrong. Please reload the page";
  }

  if (dividend === "" || divider === "") {
    result.innerText = `Division not performed. Both values are required in inputs. Try again`;
    return;
  }
  
  if (Number(divider) === 0) {
    result.innerText = `Division not performed. Invalid number provided. Try again`;
    console.trace("Cannot divide by zero.")
    return;
  }
  result.innerText = Math.floor(dividend / divider);
});
