const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const body = document.querySelector("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  const { dividend, divider } = Object.fromEntries(entries);

  const test = isNaN(dividend)
  
  console.log(test)

  if (isNaN(dividend) || isNaN(divider)) {
    body.innerText = "Something critical went wrong. Please reload the page";
    throw new Error("Something critical went wrong. Please reload the page");
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
