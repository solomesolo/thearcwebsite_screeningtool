function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.opacity = 1;
    }, 10);
}

function fadeOut(element, duration = 500) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${duration}ms`;

    setTimeout(() => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }, 10);
}

function spin(element, duration = 1000) {
    element.style.transition = `transform ${duration}ms linear`;
    element.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        element.style.transform = 'rotate(0deg)';
    }, duration);
}

export { fadeIn, fadeOut, spin };