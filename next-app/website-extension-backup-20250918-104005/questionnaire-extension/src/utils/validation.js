function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateRequired(value) {
    return value.trim() !== '';
}

function validateAge(age) {
    const ageNum = Number(age);
    return ageNum >= 18 && ageNum <= 120;
}

function validateInput(input) {
    const errors = {};

    if (!validateRequired(input.name)) {
        errors.name = 'Name is required';
    }

    if (!validateEmail(input.email)) {
        errors.email = 'Email is invalid';
    }

    if (!validateAge(input.age)) {
        errors.age = 'Age must be between 18 and 120';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}

export { validateInput };