    const highScoresList = document.getElementById("highScoresList");
    var highScore = JSON.parse(localStorage.getItem('highScore')) || [];

    
function compareValues(score, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(score) || !b.hasOwnProperty(score)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[score] === 'string')
        ? a[score].toUpperCase() : a[score];
      const varB = (typeof b[score] === 'string')
        ? b[score].toUpperCase() : b[score];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  highScore.sort(compareValues("score", "desc"));
    highScore.splice(5);
        highScoresList.innerHTML =
        highScore.map(thisScore=>{
            return `<li>${thisScore.initials}-${thisScore.score}</li>`;
        })
        .join("");