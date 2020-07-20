
        
        highScoresList.innerHTML =
        highScore.map(thisScore=>{
            return `<li >${thisScore.initials}-${thisScore.score}</li>`;
        })
        .join("");