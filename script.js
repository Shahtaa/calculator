let displayValue = ''; // Stores the current value shown on the display

// Function to append values to the display when buttons are clicked
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

// Function to calculate and display the result
function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
