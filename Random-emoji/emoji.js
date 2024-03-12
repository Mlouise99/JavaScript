const emoji = ['😂', '🤣', '❤️', '😍', '🙌', '😁', '😘', '👌', '😊', '😂', '🤣', '😍', '😢', '😎', '😋', '😊'];
const face1 = document.querySelector("#face");
const button = document.querySelector("button");

button.addEventListener("click", () => {
   
    let round = Math.floor(Math.random() * emoji.length);
    let result = emoji[round];
    face1.textContent = result;
});
