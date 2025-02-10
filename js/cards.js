document.addEventListener("DOMContentLoaded", function () {
    const games = document.querySelectorAll(".game-card");
    let currentGame = 0;
  
    function showGame(index) {
        games.forEach((game, i) => {
            game.classList.remove("active");
            if (i === index) {
                game.classList.add("active");
            }
        });
    }
  
    document.querySelector(".left").addEventListener("click", function () {
        currentGame = (currentGame - 1 + games.length) % games.length;
        showGame(currentGame);
    });
  
    document.querySelector(".right").addEventListener("click", function () {
        currentGame = (currentGame + 1) % games.length;
        showGame(currentGame);
    });
  
    // Exibe o primeiro jogo ao carregar a página
    showGame(currentGame);
  });
  
  