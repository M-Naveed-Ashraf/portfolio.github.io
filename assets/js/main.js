const button = document.getElementById("btn");

const scaleUpButton = () => {
    button.style.transition = 'transform 200ms ease-in-out';
    button.style.transform = "scale(1.1)";
}

const scalDownButton= () => {
    button.style.transition = 'transform 200ms ease-in-out';
    button.style.transform = "none"
}

button.onmouseover = scaleUpButton;
button.onmouseleave = scalDownButton;