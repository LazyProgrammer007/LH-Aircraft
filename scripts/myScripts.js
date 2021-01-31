
document.getElementById("increaseCountFirstClassSeat")
  .addEventListener("click", function () {
    updateSeatQuantity("firstClassSeatCount", 1);
    overallBookingCostTotal();
  });

document.getElementById("decreaseCountFirstClassSeat")
  .addEventListener("click", function () {
    updateSeatQuantity("firstClassSeatCount", -1);
    overallBookingCostTotal();
  });

document.getElementById("increaseCountEconomySeat")
  .addEventListener("click", function () {
    updateSeatQuantity("economySeatCount", 1);
    overallBookingCostTotal();
  });
document.getElementById("decreaseCountEconomySeat")
  .addEventListener("click", function () {
    updateSeatQuantity("economySeatCount", -1);
    overallBookingCostTotal();
  });

// Amount of seat conformation part

function updateSeatQuantity(id, n) {
  const seatInput = document.getElementById(id).value;
  const seatCount = parseInt(seatInput);
  const newSeatCount = seatCount + n;
  if (newSeatCount < 0) {
    newSeatCount = 0;
  }
  document.getElementById(id).value = newSeatCount;
}

//Cost calculate part for subtotal

function subtotal() {
  const subtotalCost = document.getElementById("firstClassSeatCount").value;
  const subtotalAmount = parseInt(subtotalCost);
  const firstClassAmount = subtotalAmount * 150;
  const subtotalCostEconomy = document.getElementById("economySeatCount")
    .value;
  const subtotalAmountEconomy = parseInt(subtotalCostEconomy);
  const economyAmount = subtotalAmountEconomy * 100;
  const subtotal = firstClassAmount + economyAmount;
  document.getElementById("subTotalBookingCost").innerText = subtotal;
  console.log("subTotalBookingCost");
}

//vat Calculation part

function vatCalculation() {
  const vatAmount = document.getElementById("subTotalBookingCost").innerText;
  const vatNumber = parseFloat(vatAmount);
  const vatCost = vatNumber / 10;
  document.getElementById("vatCostForBooking").innerText = vatCost;
  console.log(vatCost);
}

function grandTotal() {
  const subtotalAmount = document.getElementById("subTotalBookingCost").innerText;
  const subtotal = parseFloat(subtotalAmount);
  const vatAmount = document.getElementById("vatCostForBooking").innerText;
  const vatCost = parseFloat(vatAmount);
  const grandTotal = subtotal + vatCost;
  document.getElementById("totalBookingCost").innerText = grandTotal;
}
function overallBookingCostTotal() {
  subtotal();
  vatCalculation();
  grandTotal();
}

// Conformation part
document.getElementById("buttonForBooking").addEventListener("click", function () {
  document.getElementById("bookingForm-area").style.display = "none";
  document.getElementById("conformationBooking-area").style.display = "block";
});
document.getElementById("confirm")
  .addEventListener("click", function () {
    
 alert('Booking Confirmed');
 });