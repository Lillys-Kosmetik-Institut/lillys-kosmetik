// Formulario de reserva
const bookingForm = document.getElementById('bookingForm');
const bookingMsg = document.getElementById('bookingMsg');

bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = bookingForm.querySelector('input[type="text"]').value;
  const service = bookingForm.querySelector('select').value;
  bookingMsg.textContent = `Danke ${name}, Ihre Buchung für "${service}" wurde erfolgreich empfangen! Wir werden uns in Kürze bei Ihnen melden.`;
  bookingForm.reset();
});

// Calculador de ingresos
const calculateBtn = document.getElementById('calculateIncome');
const incomeResult = document.getElementById('incomeResult');

calculateBtn.addEventListener('click', function() {
  const count = Number(document.getElementById('serviceCount').value);
  const price = Number(document.getElementById('averagePrice').value);
  if (!count || !price) {
    incomeResult.textContent = 'Bitte geben Sie gültige Zahlen ein.';
    return;
  }
  const total = count * price;
  incomeResult.textContent = `Ihr geschätzter monatlicher Umsatz beträgt: €${total.toFixed(2)}`;
});
