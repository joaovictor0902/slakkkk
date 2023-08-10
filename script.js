const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");

function moveButtonRandomly() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const maxX = windowWidth - 70;
    const maxY = windowHeight - 70;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

yesButton.addEventListener("click", () => {
    messageText.textContent = "RapaizKKKKKKKKKKKKKKKKKKKKKK";
    messageContainer.style.display = "block";
    setTimeout(() => {
        messageContainer.style.display = "none";
        messageText.textContent = "";
    }, 120000);
});

noButton.addEventListener("mouseover", moveButtonRandomly);

noButton.addEventListener("click", () => {
    moveButtonRandomly();
});

yesButton.addEventListener("click", () => {
    messageText.textContent = "Obrigado baby hehehehehe";
    messageContainer.style.display = "block";


    const videoElement = document.createElement("video");
    videoElement.width = 640;
    videoElement.height = 360;
    videoElement.controls = true;

    const sourceElement = document.createElement("source");
    sourceElement.src = "video/slakk.mp4";
    sourceElement.type = "video/mp4";
    videoElement.appendChild(sourceElement);


    messageContainer.appendChild(videoElement);

    setTimeout(() => {
        messageContainer.style.display = "none";
        messageText.textContent = "";
        messageContainer.removeChild(videoElement);
    }, 120000);
});
