document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pay-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = document.getElementById('amount').value;
            const upiType = button.getAttribute('data-upi');
            const upiId = prompt(`Enter your ${"kaviyarasu.c1012@okicici"} UPI ID:`);

            if (amount && upiId) {
                let url = '';

                switch (upiType) {
                    case 'googlepay':
                        url = `upi://pay?pa=${upiId}&pn=YourCompanyName&mc=0000&tid=1234567890&tt=UPI&am=${amount}&cu=INR&url=https://yourwebsite.com`;
                        break;
                    case 'phonepe':
                        url = `upi://pay?pa=${upiId}&pn=YourCompanyName&mc=0000&tid=1234567890&tt=UPI&am=${amount}&cu=INR&url=https://yourwebsite.com`;
                        break;
                    case 'paytm':
                        url = `upi://pay?pa=${upiId}&pn=YourCompanyName&mc=0000&tid=1234567890&tt=UPI&am=${amount}&cu=INR&url=https://yourwebsite.com`;
                        break;
                    default:
                        alert('Invalid payment option.');
                        return;
                }

                window.location.href = url;
            } else {
                alert('Please enter a valid amount and UPI ID.');
            }
        });
    });
});
