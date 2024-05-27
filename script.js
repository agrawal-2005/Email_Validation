document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form"),
                emailField = form.querySelector(".email-field"),
                emailInput = emailField.querySelector(".email"),
                passField = form.querySelector(".create-password"),
                passInput = passField.querySelector(".password"),
                cPassField = form.querySelector(".confirm-password"),
                cPassInput = cPassField.querySelector(".cpassword");

    function emailCheck() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value.match(emailPattern)) {
            emailField.classList.add("invalid");
        } else {
            emailField.classList.remove("invalid");
        }
    }

    function PasswordCheck() {
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
        if (!passInput.value.match(passPattern)) {
            passField.classList.add("invalid");
        } else {
            passField.classList.remove("invalid");
        }
    }       

    function confirmPassword() {
        if(passInput.value !== cPassInput.value){
            return cPassField.classList.add("invalid");
        }
        else{
            return cPassField.classList.remove("invalid");
        }
    }
    const eyeIcons = document.querySelectorAll(".show-hide");
    eyeIcons.forEach(eyeIcon => {
        eyeIcon.addEventListener('click', () => {
            const pInput = eyeIcon.parentElement.querySelector('input');
            const type = pInput.getAttribute('type') === 'password' ? 'text' : 'password';
            pInput.setAttribute('type', type);
            eyeIcon.classList.toggle("fa-eye");
            eyeIcon.classList.toggle("fa-eye-slash");
        })
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        emailCheck();
        PasswordCheck();
        confirmPassword();

        // Check if any field is invalid before redirecting
        if(!emailField.classList.contains("invalid") && !passField.classList.contains("invalid") && !cPassField.classList.contains("invalid")){
            location.href = form.getAttribute("action");
        }
    });

    emailInput.addEventListener('keyup', emailCheck);
    passInput.addEventListener('keyup',PasswordCheck);
    cPassInput.addEventListener('keyup',confirmPassword);
});
