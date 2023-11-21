
// Hardcoded exchange rates
const CAD_TO_USD_RATE = 0.75;
const USD_TO_CAD_RATE = 1.33;

// Function to convert currency
function convertCurrency() {
    // Get user input
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Validate input
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    // Perform conversion
    let result;
    if (fromCurrency === 'CAD' && toCurrency === 'USD') {
        result = amount * CAD_TO_USD_RATE;
    } else if (fromCurrency === 'USD' && toCurrency === 'CAD') {
        result = amount * USD_TO_CAD_RATE;
    } else {
        alert('Invalid conversion selection.');
        return;
    }

    // Display result with up to 3 digits after the decimal point
    document.getElementById('result').innerText = `Result: ${result.toFixed(3)} ${toCurrency}`;
}
