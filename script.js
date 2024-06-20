const form = document.getElementById('card-form');
const previewBankName = document.getElementById('preview-bank-name');
const previewCardNumber = document.getElementById('preview-card-number');
const previewCardholderName = document.getElementById('preview-cardholder-name');
const previewExpiryDate = document.getElementById('preview-expiry-date');
const bankLogo = document.getElementById('bank-logo');
const paymentLogo = document.getElementById('payment-logo');
const tableBody = document.querySelector('#card-table tbody');

const bankLogos = {
    'Sberbank': 'sber.png',
    'VTB': 'vtb.png',
    'Tinkoff': 'tbank.png'
};

const paymentLogos = {
    'Visa': 'visa.png',
    'Mastercard': 'mastercard.png',
    'Mir': 'mir.png'
};

form.addEventListener('input', function() {
    const bankName = document.getElementById('bank-name').value;
    const paymentSystem = document.getElementById('payment-system').value;
    //previewBankName.textContent = bankName;
    previewCardNumber.textContent = document.getElementById('card-number').value;
    previewCardholderName.textContent = document.getElementById('cardholder-name').value;
    previewExpiryDate.textContent = document.getElementById('expiry-date').value;

    if (bankLogos[bankName]) {
        bankLogo.src = bankLogos[bankName];
        bankLogo.style.display = 'block';
    } else {
        bankLogo.style.display = 'none';
    }

    if (paymentLogos[paymentSystem]) {
        paymentLogo.src = paymentLogos[paymentSystem];
        paymentLogo.style.display = 'block';
    } else {
        paymentLogo.style.display = 'none';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const bankName = document.getElementById('bank-name').value;
    const paymentSystem = document.getElementById('payment-system').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardholderName = document.getElementById('cardholder-name').value;
    const expiryDate = document.getElementById('expiry-date').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${bankName}</td>
        <td>${paymentSystem}</td>
        <td>${cardNumber}</td>
        <td>${cardholderName}</td>
        <td>${expiryDate}</td>
    `;
    tableBody.appendChild(newRow);

    form.reset();
    previewBankName.textContent = '';
    previewCardNumber.textContent = '';
    previewCardholderName.textContent = '';
    previewExpiryDate.textContent = '';
    bankLogo.style.display = 'none';
    paymentLogo.style.display = 'none';
});