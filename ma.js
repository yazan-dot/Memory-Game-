//edit icons
const audioElement = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");
const toggleIcon = document.getElementById("toggle-icon");

toggleButton.addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play();
    toggleIcon.classList.remove("fa-microphone-slash");
    toggleIcon.classList.add("fa-microphone");
  } else {
    audioElement.pause();
    toggleIcon.classList.remove("fa-microphone");
    toggleIcon.classList.add("fa-microphone-slash");
  }
});
document
  .querySelector(".form .setting-number .timer-set input")
  .addEventListener("focus", function () {
    if (
      document.querySelector(".form .setting-number .timer-set input").value !==
      ""
    ) {
      document.querySelector(
        ".form .setting-number .timer-set i"
      ).style.cssText = " color:#333; transition: 0.3s;";
    } else {
      document.querySelector(".form .setting-number .timer-set i").style.color =
        "gray";
    }
  });
// mistkes-set
document
  .querySelector(".form .setting-number .mistkes-set input")
  .addEventListener("focus", function () {
    if (
      document.querySelector(".form .setting-number .mistkes-set input")
        .value !== ""
    ) {
      document.querySelector(
        ".form .setting-number .mistkes-set i"
      ).style.cssText = " color:#333; transition: 0.3s;";
    } else {
      document.querySelector(
        ".form .setting-number .mistkes-set i"
      ).style.color = "gray";
    }
  });
document.querySelector(".form  #select").addEventListener("focus", function () {
  document.querySelector(".form .level-set i").style.cssText =
    "color:#333; transition: 0.3s;";
});
document
  .querySelector(".form .setting-number .mistkes-set input")
  .addEventListener("blur", function () {
    document.querySelector(".form .setting-number .mistkes-set i").style.color =
      "gray";
  });
document
  .querySelector(".form .setting-number .timer-set input")
  .addEventListener("blur", function () {
    document.querySelector(".form .setting-number .timer-set i").style.color =
      "gray";
  });
document.querySelector(".form #select").addEventListener("blur", function () {
  document.querySelector(".form .level-set i").style.color = "gray";
});

//print the user data in page
// document.querySelector(".form .timer-set input").addEventListener("input");
window.onload = function () {
  document.querySelector(".form .user-name input").focus();
};
let startGame = document.querySelector(`[type="submit"]`);
let spanName = document.querySelector(".data .name-page span");
let spanTimer = document.querySelector(".data .counter span ");
let setCountre;
let spanNumber = document.querySelector(".data .mistake-page span");
let nameUser, numUser, misUser;

// Add event listeners to update global variables when input values change
document
  .querySelector(".form .user-name input")
  .addEventListener("input", function () {
    nameUser = this.value;
  });

document
  .querySelector(".form .timer-set input")
  .addEventListener("input", function () {
    numUser = this.value;
  });

document
  .querySelector(".form .mistkes-set input")
  .addEventListener("input", function () {
    misUser = this.value;
  });

startGame.addEventListener("click", function () {
  let pattren = /(\w+-\w+)/;
  let nameUser = document.querySelector(".form .user-name input").value;
  let numUser = document.querySelector(".form .timer-set input").value;
  let misUser = document.querySelector(".form .mistkes-set input").value;
  let select = document.querySelector("#select").value;
  // let opOne, opTwo;
  console.log(select);
  if (!nameUser.match(pattren)) {
    popVaild();
    return false;
  } else {
    checkName(nameUser);
  }
  if (parseInt(numUser) < 10 || parseInt(numUser) == "") {
    pop();
    return false;
  } else {
    checkTimerNumber(parseInt(numUser));
  }

  if (parseInt(misUser) < 10 || parseInt(misUser) === null) {
    pop();
    return false;
  } else {
    checkMistake(misUser);
  }

  document.querySelector(".form").remove();
  startTimer();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startTimer() {
  spanTimer.innerHTML = numUser;
  setCountre = setInterval(setTime, 1000);
}

function setTime() {
  spanTimer.innerHTML = parseInt(spanTimer.innerHTML) - 1;
  if (spanTimer.innerHTML === "0") {
    ana();
    clearInterval(setCountre);
  }
}

function ana() {
  let popLose = document.querySelector(".loser");
  popLose.style.cssText = `display:block; transition:0.5s`;
  setTimeout(function () {
    document.querySelector("#loser-man").play();
  }, 1000);
  document.querySelector(".btn-loser").addEventListener("click", function () {
    blocks.map(function (ele) {
      return ele.classList.remove("clicked-two");
    });
    clearInterval(setCountre); // Clear the existing interval
    document.querySelector(".mistake-page span").innerHTML = misUser;
    spanTimer.innerHTML = `${numUser}`; // Reset the timer to the original user input
    popLose.style.display = "none"; // Hide the loser popup
    startTimer(); // Restart the timer
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkName(name) {
  spanName.innerHTML = `${name}`;
}
function checkTimerNumber(number) {
  spanTimer.innerHTML = parseInt(number);
  // let x = setInterval(function () {
  //   spanTimer.innerHTML -= 1;
  // }, 1000);
  // if (spanTimer.innerHTML === 0) {
  //   clearInterval(x);
  // }
}
function checkMistake(num) {
  spanNumber.innerHTML = `${num}`;
}
function popVaild() {
  document.querySelector(".form").classList.add("prevent-click");

  let main = document.createElement("div");
  let textDiv = document.createTextNode(
    "Example of valid name (yazan-mohammad)"
  );
  let over = document.createElement("div");
  document.body.appendChild(over);
  over.className = `over`;
  over.style.cssText = `    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 1200;
    left: 0;`;
  let delet = document.createElement("span");
  delet.style.cssText = `position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: white;
    border-radius: 50%;
    color: black;
    width: 18px;
    right: 0;
    top: -7px;
    cursor:pointer `;
  delet.addEventListener("click", function () {
    delet.parentElement.remove();
    document.querySelector(".form").classList.remove("prevent-click");
    document.querySelector(".over").remove();
  });
  let deletText = document.createTextNode("x");
  let iconStop = document.createElement("i");
  iconStop.style.cssText = `    display: block;
    text-align: center;
    margin-bottom: 5px;
    font-size: 22px;`;
  iconStop.className = `fa-solid fa-ban`;
  main.appendChild(iconStop);
  main.appendChild(delet);
  delet.appendChild(deletText);
  main.appendChild(textDiv);
  main.style.cssText = `        position: absolute;
    z-index: 1200;
    left: 44%;
    background-color: rgb(208, 74, 74);
    top: 4%;
    color: white;
    padding: 5px;
    border-radius: 8px;
    font-size: 18px;
    width: 188px;
    text-align: center;`;
  document.body.appendChild(main);
}
function pop() {
  document.querySelector(".form").classList.add("prevent-click");

  let main = document.createElement("div");
  let textDiv = document.createTextNode("The number must be 20 Or More !!");
  let over = document.createElement("div");
  document.body.appendChild(over);
  over.className = `over`;
  over.style.cssText = `    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 1200;
    left: 0;`;
  let delet = document.createElement("span");
  delet.style.cssText = `position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: white;
    border-radius: 50%;
    color: black;
    width: 18px;
    right: 0;
    top: -7px;
    cursor:pointer `;
  delet.addEventListener("click", function () {
    delet.parentElement.remove();
    document.querySelector(".form").classList.remove("prevent-click");
    document.querySelector(".over").remove();
  });
  let deletText = document.createTextNode("x");
  let iconStop = document.createElement("i");
  iconStop.style.cssText = `    display: block;
    text-align: center;
    margin-bottom: 5px;
    font-size: 22px;`;
  iconStop.className = `fa-solid fa-ban`;
  main.appendChild(iconStop);
  main.appendChild(delet);
  delet.appendChild(deletText);
  main.appendChild(textDiv);
  main.style.cssText = `        position: absolute;
    z-index: 1200;
    left: 44%;
    background-color: rgb(208, 74, 74);
    top: 4%;
    color: white;
    padding: 5px;
    border-radius: 8px;
    font-size: 18px;
    width: 160px;
    text-align: center;`;
  document.body.appendChild(main);
}
// start card game
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let dataSet = [
  { id: 1, src: `fa-solid fa-apple-whole fa-3x` },
  { id: 1, src: `fa-solid fa-apple-whole fa-3x` },
  { id: 2, src: `fa-solid fa-cheese fa-3x` },
  { id: 2, src: `fa-solid fa-cheese fa-3x` },
  { id: 3, src: `fa-solid fa-pizza-slice fa-3x` },
  { id: 3, src: `fa-solid fa-pizza-slice fa-3x` },
  { id: 4, src: `fa-solid fa-burger fa-3x` },
  { id: 4, src: `fa-solid fa-burger fa-3x` },
  { id: 5, src: `fa-solid fa-egg fa-3x` },
  { id: 5, src: `fa-solid fa-egg fa-3x` },
  { id: 6, src: `fa-solid fa-flask fa-3x` },
  { id: 6, src: `fa-solid fa-flask fa-3x` },
  { id: 7, src: `fa-solid fa-bone fa-3x` },
  { id: 7, src: `fa-solid fa-bone fa-3x` },
  { id: 8, src: `fa-solid fa-drumstick-bite fa-3x` },
  { id: 8, src: `fa-solid fa-drumstick-bite fa-3x` },
];

function shuffle(array) {
  let newArray = [];
  let usedIndex = [];
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndex.includes(randomNumber)) {
      newArray.push(array[randomNumber]);
      usedIndex.push(randomNumber);
      i++;
    }
  }
  return newArray;
}

// Filter out four cards (two pairs)
function getFourCards(dataSet) {
  let uniqueIds = [];
  let selectedCards = [];

  for (let card of dataSet) {
    if (
      uniqueIds.includes(card.id) &&
      selectedCards.filter((c) => c.id === card.id).length < 2
    ) {
      selectedCards.push(card);
    } else if (!uniqueIds.includes(card.id)) {
      uniqueIds.push(card.id);
      selectedCards.push(card);
    }

    if (selectedCards.length === 4) break;
  }

  return selectedCards;
}

let selectedCards = getFourCards(dataSet);
let shuffledCards = shuffle(selectedCards);

let mainDiv = document.createElement("div");
let containerDiv = document.createElement("div");
containerDiv.classList.add("container");
mainDiv.classList.add("game");

for (let i = 0; i < shuffledCards.length; i++) {
  let mainCardOne = document.createElement("div");
  mainCardOne.classList.add("card");
  mainCardOne.setAttribute("id", shuffledCards[i].id);
  let iconeGameOne = document.createElement("i");
  iconeGameOne.className = `${shuffledCards[i].src}`;
  containerDiv.appendChild(mainCardOne);
  mainCardOne.appendChild(iconeGameOne);
}

mainDiv.appendChild(containerDiv);
document.body.appendChild(mainDiv);
// let dataSet = [
//   (one = {
//     id: 1,
//     src: `fa-solid fa-apple-whole fa-3x`,
//   }),
//   (two = {
//     id: 1,
//     src: `fa-solid fa-apple-whole fa-3x`,
//   }),
//   (three = {
//     id: 2,
//     src: `fa-solid fa-cheese fa-3x`,
//   }),
//   (four = {
//     id: 2,
//     src: `fa-solid fa-cheese fa-3x`,
//   }),
//   (five = { id: 3, src: `fa-solid fa-pizza-slice fa-3x` }),
//   (six = {
//     id: 3,
//     src: `fa-solid fa-pizza-slice fa-3x`,
//   }),
//   (seven = {
//     id: 4,
//     src: `fa-solid fa-burger fa-3x`,
//   }),
//   (eight = {
//     id: 4,
//     src: `fa-solid fa-burger fa-3x`,
//   }),
//   (nine = {
//     id: 5,
//     src: `fa-solid fa-egg fa-3x`,
//   }),
//   (ten = {
//     id: 5,
//     src: `fa-solid fa-egg fa-3x`,
//   }),
//   (elevine = {
//     id: 6,
//     src: `fa-solid fa-flask fa-3x`,
//   }),
//   (twilve = {
//     id: 6,
//     src: `fa-solid fa-flask fa-3x`,
//   }),
//   (thertine = {
//     id: 7,
//     src: `fa-solid fa-bone fa-3x`,
//   }),
//   (fourten = {
//     id: 7,
//     src: `fa-solid fa-bone fa-3x`,
//   }),
//   (fiveten = {
//     id: 8,
//     src: `fa-solid fa-drumstick-bite fa-3x`,
//   }),
//   (sixten = {
//     id: 8,
//     src: `fa-solid fa-drumstick-bite fa-3x`,
//   }),
// ];

// function shuffle(array) {
//   let newArray = [];
//   let usedIndex = [];
//   let i = 0;
//   while (i < array.length) {
//     let randomNumber = Math.floor(Math.random() * array.length);
//     if (!usedIndex.includes(randomNumber)) {
//       newArray.push(array[randomNumber]);
//       usedIndex.push(randomNumber);
//       i++;
//     }
//   }
//   return newArray;
// }

// let x = shuffle(dataSet);
// let mainDiv = document.createElement("div");
// let containerDiv = document.createElement("div");
// containerDiv.classList.add("container");
// mainDiv.classList.add("game");
// for (let i = 0; i < x.length; i++) {
//   let mainCardOne = document.createElement("div");
//   mainCardOne.classList.add("card");
//   mainCardOne.setAttribute("id", x[i].id);
//   let iconeGameOne = document.createElement("i");
//   iconeGameOne.className = `${x[i].src}`;
//   containerDiv.appendChild(mainCardOne);
//   mainCardOne.appendChild(iconeGameOne);
// }
// mainDiv.appendChild(containerDiv);
// document.body.appendChild(mainDiv);
//start the armY
let time = 1000;
let containerBlock = document.querySelector(".game .container");
let blocks = Array.from(containerBlock.children);

blocks.forEach(function (e) {
  e.addEventListener("click", function () {
    flip(e);
  });
});
function flip(ele) {
  ele.classList.add("clicked");
  let z = blocks.filter(function (e) {
    return e.classList.contains("clicked");
  });
  if (z.length === 2) {
    noClick();
    lastCheck(z[0], z[1]);
    let ali = blocks.filter(function (ele) {
      return ele.classList.contains("clicked-two");
    });
    if (ali.length === blocks.length) {
      setTimeout(function () {
        document.querySelector("#winner-man").play();
      }, 1000);

      clearInterval(setCountre);
      let winnerMan = document.querySelector(".winner");

      winnerMan.style.cssText = `display:block; transition:0.5s`;

      document.querySelector(".btn-winner").onclick = function () {
        // Shuffle the dataSet array
        dataSet = shuffle(dataSet);

        // Clear existing game elements
        containerDiv.innerHTML = "";

        // Regenerate the game elements with the shuffled dataSet
        for (let i = 0; i < dataSet.length; i++) {
          let mainCardOne = document.createElement("div");
          mainCardOne.classList.add("card");
          mainCardOne.setAttribute("id", dataSet[i].id);
          let iconeGameOne = document.createElement("i");
          iconeGameOne.className = `${dataSet[i].src}`;
          containerDiv.appendChild(mainCardOne);
          mainCardOne.appendChild(iconeGameOne);
        }

        // Reset game state
        blocks = Array.from(containerDiv.children);
        blocks.map(function (ele) {
          return ele.classList.remove("clicked-two");
        });
        document.querySelector(".mistake-page span").innerHTML = misUser;
        spanTimer.innerHTML = `${numUser}`;
        winnerMan.style.display = "none"; // Hide the winner popup

        // Reattach event listeners to new blocks
        blocks.forEach(function (e) {
          e.addEventListener("click", function () {
            flip(e);
          });
        });

        // Clear existing interval before starting a new one
        // Restart the timer
        startTimerWinner();
      };
    }
    lastCheck(z[0], z[1]);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startTimerWinner() {
  spanTimer.innerHTML = numUser;
  setCountre = setInterval(setTimeWinner, 1000);
}

function setTimeWinner() {
  spanTimer.innerHTML = parseInt(spanTimer.innerHTML) - 1;
  if (spanTimer.innerHTML === "0") {
    losePop();
    clearInterval(setCountre);
  }
}

function losePop() {
  let popLose = document.querySelector(".loser");
  popLose.style.cssText = `display:block; transition:0.5s`;

  document.querySelector(".btn-loser").addEventListener("click", function () {
    blocks.map(function (ele) {
      return ele.classList.remove("clicked-two");
    });
    clearInterval(setCountre); // Clear the existing interval
    document.querySelector(".mistake-page span").innerHTML = misUser;
    spanTimer.innerHTML = `${numUser}`; // Reset the timer to the original user input
    popLose.style.display = "none"; // Hide the loser popup
    startTimerWinner(); // Restart the timer
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function noClick() {
  mainDiv.classList.add("noClick");
  setTimeout(function () {
    mainDiv.classList.remove("noClick");
  }, 1000);
}
function lastCheck(oneB, twoB) {
  let mistakeNumber = document.querySelector(".data .mistake-page span");

  if (parseInt(oneB.getAttribute("id")) === parseInt(twoB.getAttribute("id"))) {
    oneB.classList.remove("clicked");
    twoB.classList.remove("clicked");
    oneB.classList.add("clicked-two");
    twoB.classList.add("clicked-two");
    document.querySelector("#winer").play();
  } else {
    mistakeNumber.innerHTML -= 1 * 0.5;
    if (parseInt(mistakeNumber.innerHTML) <= 0) {
      setTimeout(function () {
        document.querySelector("#loser-man").play();
      }, 1000);
      // Display the popup
      let popLose = document.querySelector(".loser");
      popLose.style.cssText = `display:block; transition:0.5s`;

      // Add event listener to the button inside the popup
      document
        .querySelector(".btn-loser")
        .addEventListener("click", function () {
          blocks.map(function (ele) {
            return ele.classList.remove("clicked-two");
          });
          clearInterval(setCountre);
          mistakeNumber.innerHTML = misUser;
          spanTimer.innerHTML = numUser;
          popLose.style.display = "none";
          startTimer();
        });
    }

    setTimeout(function () {
      oneB.classList.remove("clicked");
      twoB.classList.remove("clicked");
    }, 1000);
    document.querySelector("#lose").play();
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
let yazan = document.querySelector(".LevelTwo");

document.querySelector(".LevelTwo").onclick = function () {
  // Shuffle the dataSet array
  dataSet = shuffle(dataSet);

  // Clear existing game elements
  containerDiv.innerHTML = "";

  // Regenerate the game elements with the shuffled dataSet
  for (let i = 0; i < dataSet.length; i++) {
    let mainCardOne = document.createElement("div");
    mainCardOne.classList.add("card");
    mainCardOne.setAttribute("id", dataSet[i].id);
    let iconeGameOne = document.createElement("i");
    iconeGameOne.className = `${dataSet[i].src}`;
    containerDiv.appendChild(mainCardOne);
    mainCardOne.appendChild(iconeGameOne);
  }

  // Reset game state
  blocks = Array.from(containerDiv.children);
  blocks.map(function (ele) {
    return ele.classList.remove("clicked-two");
  });
  document.querySelector(".mistake-page span").innerHTML = misUser;
  spanTimer.innerHTML = `${numUser}`;

  // Reattach event listeners to new blocks
  blocks.forEach(function (e) {
    e.addEventListener("click", function () {
      flip(e);
    });
  });

  // Clear existing interval before starting a new one
  // Restart the timer
  startTimerWinner();
};
