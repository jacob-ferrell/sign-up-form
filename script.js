const password = document.getElementById("user-password");
const confirmPass = document.getElementById("confirm-password");
const submitBtn = document.getElementById('submit')
const firstName = document.getElementById("first-name");
const noMatch = document.querySelector(".no-match");
const passFields = document.querySelectorAll(".password input")
noMatch.textContent = "    "
submitBtn.addEventListener('click', () => {
    if (password.value != confirmPass.value) {
        noMatch.textContent = '*Passwords do not match';
        passFields.forEach(field => field.classList.add('invalid-pass'));
        return false;
    } else {
        noMatch.textContent = "";
    }
    
});
