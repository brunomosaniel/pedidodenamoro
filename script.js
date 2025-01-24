const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton")

// ação quando o botão "Sim" é clicado
yesButton.addEventListener("click", () => {
    alert("Eu sabia que você ia dizer sim! 💖");
    document.body.innerHTML = `
    <div class="container">
      <h1>Você fez meu dia mais feliz! 🥰</h1>
      <p>Vamos celebrar juntos esse momento especial!</p>
    </div>
  `;
});

// Faz o botão "Não" fugir do clique ou toque
const moveButton = () => {
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innnerHeight * 0.8;

    noButton.style.position = "absolute"
    noButton.style.left = `${randomX}px`
    noButton.style.top = `${randomY}px`
};

noButton.addEventListener("mouseover", moveButton); // para desktop
noButton.addEventListener("touchstart", moveButton); // para dispositivos moveis

// previne o botão "Não" de sair da tela ao redimensionar

window.addEventListener("resize" , () => {
    noButton.style.left = "50%px"
    noButton.style.top = "50%px"

});

