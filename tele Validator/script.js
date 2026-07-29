   const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function isValidUSPhoneNumber(number) {
  const regex =
    /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return regex.test(number);
}

// Example phone numbers to show to the user
const exampleValidNumbers = [
  "123-456-7890",
  "(123) 456-7890",
  "123 456 7890",
  "1234567890",
  "1 123 456 7890",
  "11234567890"
];

const exampleInvalidNumbers = [
  "12-3456-7890",
  "123-45-67890",
  "1234567",
  "abcdefghij",
  "123) 456-7890",
  "+44 20 7946 0958"
];

checkBtn.addEventListener("click", () => {
  const input = userInput.value;

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  // Show the validation result and example lists
  const isValid = isValidUSPhoneNumber(input);
  const statusText = isValid ? `Valid US number: ${input}` : `Invalid US number: ${input}`;

  // Build HTML for examples
  const validList = exampleValidNumbers.map(n => `<li>${n}</li>`).join("");
  const invalidList = exampleInvalidNumbers.map(n => `<li>${n}</li>`).join("");

  resultsDiv.innerHTML = `
    <p>${statusText}</p>
    <div>
      <strong>Example valid US numbers:</strong>
      <ul>${validList}</ul>
    </div>
    <div>
      <strong>Example invalid numbers:</strong>
      <ul>${invalidList}</ul>
    </div>
  `;
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});
