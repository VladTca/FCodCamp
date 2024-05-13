function seekPalindrom() {
    const input = document.getElementById('text-input')
                                 .value
                                 .toLowerCase();
    const inputEx = document.getElementById('text-input')
        .value
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    const resultItem = document.getElementById('result');

    if (input === '') {
        alert('Please input a value');
        return;
    }

    const reversed = inputEx.split('').reverse().join('');

    if (inputEx === reversed) {
        resultItem.textContent = `${input} is a palindrome`;
    } else {
        resultItem.textContent = `${input} is not a palindrome`;
    }
}