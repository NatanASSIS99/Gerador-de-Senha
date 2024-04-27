function generatePassword() {
    var length = document.getElementById("length").value;
    var password = generateRandomPassword(length);
    document.getElementById("password").value = password;
}

function generateRandomPassword(length) {
    var charset = "0123456789";
    var password = "";
    for (var i = 0; i < length; ++i) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}