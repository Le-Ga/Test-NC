const btn = document.querySelector('button');
btn.addEventListener('click', validateForm);

function validateForm() {
    const name = document.querySelector('#name').value,
        phone = document.querySelector('#phone').value,
        password = document.querySelector('#password').value,
        confirmPassword = document.querySelector('#confirmPassword').value;

    const nameError = document.querySelector('#nameError'),
        phoneError = document.querySelector('#phoneError'),
        passwordError = document.querySelector('#passwordError'),
        confirmPasswordError = document.querySelector('#confirmPasswordError');

    const nameRegex = /^[\u0400-\u04FFa-zA-Z]{3,30}$/,
        phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,15}$/,
        passwordRegex = /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    nameError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (!nameRegex.test(name)) {
        nameError.textContent = 'Некорректные данные.';
    }
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Некорректные данные.';
    }
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Некорректные данные.';
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Пароли не совпадают.';
    }
    if (nameError.textContent === '' && phoneError.textContent === '' && passwordError.textContent === '' && confirmPasswordError.textContent === '') {
        Swal.fire({
            icon: 'success',
            title: 'Вы успешно зарегистрировались!',
            showConfirmButton: false,
            timer: 1500
        });
        document.querySelector('#myForm').reset();
    }
}

