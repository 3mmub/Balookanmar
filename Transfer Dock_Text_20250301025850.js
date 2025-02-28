<meta name='viewport' content='width=device-width, initial-scale=1'/><script>function sendOTP() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        alert('OTP sent to ' + phone);
        // You can add OTP generation here
    } else {
        alert('Please enter your phone number.');
    }
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;
    if (otp === '1234') {  // Sample OTP (you can simulate a real OTP process here)
        alert('OTP Verified!');
    } else {
        alert('Invalid OTP!');
    }
}</script>