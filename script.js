const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");

yesButton.addEventListener("click", () => {
    messageText.textContent = "Obrigado baby hehehehehe";
    messageContainer.style.display = "block";
    setTimeout(() => {
        messageContainer.style.display = "none";
        messageText.textContent = "";
    }, 9999999999);
});

noButton.addEventListener("mouseover", () => {
    noButton.classList.add("random");
});

noButton.addEventListener("mouseout", () => {
    noButton.classList.remove("random");
});
yesButton.addEventListener("click", () => {
    messageText.textContent = "Obrigado baby hehehehehe";
    messageContainer.style.display = "block";

    // Criar um elemento de vídeo
    const videoElement = document.createElement("video");
    videoElement.width = 640;
    videoElement.height = 360;
    videoElement.controls = true;

    // Adicionar uma source ao elemento de vídeo
    const sourceElement = document.createElement("source");
    sourceElement.src = "video/slakk.mp4"; // Substitua pelo nome real do vídeo
    sourceElement.type = "video/mp4";
    videoElement.appendChild(sourceElement);

    // Adicionar o elemento de vídeo à página
    messageContainer.appendChild(videoElement);

    setTimeout(() => {
        messageContainer.style.display = "none";
        messageText.textContent = "";
        // Remover o elemento de vídeo após um certo tempo (opcional)
        messageContainer.removeChild(videoElement);
    }, 9999999999);
});
