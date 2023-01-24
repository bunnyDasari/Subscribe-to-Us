let nameErrorMsg = document.getElementById("nameErrMsg");
let nameEl = document.getElementById("name");
let email = document.getElementById("email");
let emailErrMsg = document.getElementById("emailErrMsg");
let subscribeForm = document.getElementById("subscribeForm");
subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
});


subscribeForm.onclick = function() {
    nameEl.addEventListener("blur", function() {
        if (nameEl.value === "") {
            nameErrorMsg.textContent = "Required*";

        } else {
            nameErrorMsg.textContent = "";
        }
    });
    email.addEventListener("blur", function() {
        if (email.value === "") {
            emailErrMsg.textContent = "Required*";

        } else {
            emailErrMsg.textContent = "";
        }
    });

}