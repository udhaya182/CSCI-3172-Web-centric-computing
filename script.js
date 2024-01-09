// Get form elements
const numberForm = document.getElementById("numberForm");
const numberInput = document.getElementById("numberInput");
const resultContainer = document.getElementById("resultContainer");
const container = document.querySelector(".container");

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Function to change background color based on the selected day
function changeBackgroundColor() {
    const selectedDay = daySelect.value;

    switch (selectedDay) {
        case "Monday":
            container.style.backgroundColor = "red";
            break;
        case "Tuesday":
            container.style.backgroundColor = "blue";
            break;
        case "Wednesday":
            container.style.backgroundColor = "green";
            break;
        case "Thursday":
            container.style.backgroundColor = "purple";
            break;
        case "Friday":
            container.style.backgroundColor = "orange";
            break;
        case "Saturday":
            container.style.backgroundColor = "pink";
            break;
        case "Sunday":
            container.style.backgroundColor = "yellow";
            break;
        default:
            container.style.backgroundColor = "white";
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const inputValue = parseInt(numberInput.value);

    if (isNaN(inputValue)) {
        resultContainer.innerHTML = "Please enter a valid number.";
    } else {
        const isEven = inputValue % 2 === 0;
        const isPrimeNumber = isPrime(inputValue);
        let resultMessage = `The number entered is ${isEven ? "even" : "odd"}`;

        if (isPrimeNumber) {
            resultMessage += " prime";
        } else {
            resultMessage += " composite";
        }

        if (inputValue <= 50) {
            resultMessage += " and less than or equal to 50.";
        } else if (inputValue <= 75) {
            resultMessage += " and greater than 50 but less than or equal to 75.";
        } else if (inputValue <= 100) {
            resultMessage += " and greater than 75 but less than or equal to 100.";
        } else {
            resultMessage += " and greater than 100.";
        }

        resultContainer.innerHTML = resultMessage;
    }
}

// Add a submit event listener to the form
numberForm.addEventListener("submit", handleFormSubmit);

// Keep the background color changer code
const daySelect = document.getElementById("daySelect");
daySelect.addEventListener("change", changeBackgroundColor);
