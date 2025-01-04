const winner = (n1, n2) => {
    if(n1 > n2){
        return "🚩Player 1 Wins!";
    } else if(n2 > n1){
        return "Player 2 Wins!🚩";
    } else{
        return "Draw";
    }
}

const dice = () => {
    const n1 = Math.ceil(Math.random() * 6) 
    const n2 = Math.ceil(Math.random() * 6);
    document.querySelector(".img1").setAttribute("src", `./images/dice${n1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${n2}.png`);
    document.querySelector("h1").textContent = winner(n1, n2);
}

dice();


