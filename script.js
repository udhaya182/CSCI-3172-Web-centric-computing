document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const primeResult = document.getElementById("primeResult");
    const compositeResult = document.getElementById("compositeResult");
    const neitherResult = document.getElementById("neitherResult");

    calculateButton.addEventListener("click", function () {
        const inputNumbers = document.getElementById("inputNumbers").value;
        const numbersArray = inputNumbers.split(",").map(Number);

        let primeCount = 0;
        let compositeCount = 0;
        let neitherCount = 0;

        for (let number of numbersArray) {
            if (isPrime(number)) {
                primeCount++;
            } else if (isComposite(number)) {
                compositeCount++;
            } else {
                neitherCount++;
            }
        }

        primeResult.textContent = `Prime Numbers: ${primeCount}`;
        compositeResult.textContent = `Composite Numbers: ${compositeCount}`;
        neitherResult.textContent = `Neither: ${neitherCount}`;
    });

    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 === 0 || number % 3 === 0) {
            return false;
        }
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }

    function isComposite(number) {
        if (number <= 1) {
            return false;
        }
        if (number === 2 || number === 3) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return true;
            }
        }
        return false;
    }
});
