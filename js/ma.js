//edit icons
document.addEventListener("DOMContentLoaded", function () {
  const users = {
    khaled: { password: "senior" },
    yazan: { password: "junior" },
  };

  const loginContainer = document.getElementById("login-container");
  const welcomeContainer = document.getElementById("welcome-container");
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const welcomeUser = document.getElementById("welcome-user");
  const scoreDisplay = document.getElementById("score");
  const logoutButton = document.getElementById("logout");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (users[username] && users[username].password === password) {
      localStorage.setItem("loggedInUser", username);
      if (localStorage.getItem(`${username}_score`) === null) {
        localStorage.setItem(`${username}_score`, 0);
      }
      showWelcomePage(username);
    } else {
      errorMessage.textContent = "Invalid username or password";
    }
  });

  document.querySelector(".btn-winner").addEventListener("click", function () {
    const username = localStorage.getItem("loggedInUser");
    let score = parseInt(localStorage.getItem(`${username}_score`)) || 0;
    score += 100;
    localStorage.setItem(`${username}_score`, score);
    scoreDisplay.textContent = score;
  });

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    showLoginPage();
  });

  function showWelcomePage(username) {
    loginContainer.style.display = "none";
    welcomeContainer.style.display = "block";
    welcomeUser.textContent = username;
    scoreDisplay.textContent = localStorage.getItem(`${username}_score`) || 0;
    errorMessage.textContent = "";
  }

  function showLoginPage() {
    loginContainer.style.display = "block";
    welcomeContainer.style.display = "none";
    usernameInput.value = "";
    passwordInput.value = "";
    errorMessage.textContent = "";
  }

  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    showWelcomePage(loggedInUser);
  } else {
    showLoginPage();
  }
});
// Predefined users with initial scores
// const users = {
//   yazan: { password: "junior", score: 0 },
//   khaled: { password: "senior", score: 0 },
// };

// // Store users in localStorage if not already present
// Object.keys(users).forEach((username) => {
//   if (!localStorage.getItem(username)) {
//     localStorage.setItem(username, JSON.stringify(users[username]));
//   }
// });

// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   const storedUser = JSON.parse(localStorage.getItem(username));

//   if (storedUser && storedUser.password === password) {
//     document.querySelector(".login-container").style.display = "none";
//     document.getElementById("welcome-container").style.display = "block";
//     document.getElementById("user-name").textContent = username;
//     document.getElementById("user-score").textContent = storedUser.score;
//     document.getElementById("score").value = storedUser.score;

//     // Update score button event listener
//     document
//       .getElementById("update-score")
//       .addEventListener("click", function () {
//         const newScore = document.getElementById("score").value;
//         storedUser.score = newScore;
//         localStorage.setItem(username, JSON.stringify(storedUser));
//         document.getElementById("user-score").textContent = newScore;
//       });
//   } else {
//     document.getElementById("error").textContent =
//       "Invalid username or password";
//   }
// });

////////////////////////////////////////////////////////////////////////////////////
let bebe = document.querySelector(".button-select");
let hhaa = document.querySelector(`.button-select`).lastElementChild;
bebe.addEventListener("click", function () {
  document.querySelector(".select-pleas").classList.toggle("toggle-select");

  if (hhaa.classList.contains("fa-caret-right")) {
    hhaa.classList.remove("fa-caret-right");
    hhaa.classList.add("fa-caret-left");
  } else {
    hhaa.classList.add("fa-caret-right");
    hhaa.classList.remove("fa-caret-left");
  }
});
// document
//   .querySelector(".header .select-pleas button")
//   .addEventListener("click", function () {
//     document.querySelector(
//       ".header .select-pleas button"
//     ).style.display = `none`;
//   });

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
  .querySelector(".form .setting-number .timer-set select")
  .addEventListener("focus", function () {
    if (
      document.querySelector(".form .setting-number .timer-set select")
        .value !== ""
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
  .querySelector(".form .setting-number .timer-set select")
  .addEventListener("blur", function () {
    document.querySelector(".form .setting-number .timer-set i").style.color =
      "gray";
  });
document.querySelector(".form #select").addEventListener("blur", function () {
  document.querySelector(".form .level-set i").style.color = "gray";
});
//setting next of lodin
function openAllCardsOne() {
  let bloksOpen = document.querySelectorAll(".game .card");
  setTimeout(function () {
    bloksOpen.forEach(function (e) {
      e.classList.add("clicked-two");
    });
  }, 0);
  setTimeout(function () {
    bloksOpen.forEach(function (e) {
      e.classList.remove("clicked-two");
    });
  }, 2000);
}
function openAllCardsTwo() {
  let bloksOpen = document.querySelectorAll(".game .card");
  setTimeout(function () {
    bloksOpen.forEach(function (e) {
      e.classList.add("clicked-two");
    });
  }, 0);
  setTimeout(function () {
    bloksOpen.forEach(function (e) {
      e.classList.remove("clicked-two");
    });
  }, 3000);
}
window.onload = function () {
  document.querySelector(".form .user-name input").focus();
};
let startGame = document.querySelector(`.form .content [type="submit"]`);
let spanName = document.querySelector(".data .name-page span");
let spanTimer = document.querySelector(".data .counter span ");
let setCountre;
let spanNumber = document.querySelector(".data .mistake-page span");
let nameUser, numUser, misUser;

document
  .querySelector(".form .user-name input")
  .addEventListener("input", function () {
    nameUser = this.value;
  });

document
  .querySelector(".form .timer-set select")
  .addEventListener("input", function () {
    let ali = this.value;
    numUser = parseInt(ali);
  });

document
  .querySelector(".form .mistkes-set input")
  .addEventListener("input", function () {
    misUser = this.value;
  });

startGame.addEventListener("click", function () {
  let pattren = /(\w+-\w+)/;
  let nameUser = document.querySelector(".form .user-name input").value;
  let numUser = document.querySelector(".form .timer-set select").value;
  let misUser = document.querySelector(".form .mistkes-set input").value;
  let select = document.querySelector("#select").value;
  // let opOne, opTwo;
  console.log(numUser);
  if (!nameUser.match(pattren)) {
    popVaild();
    return false;
  } else {
    checkName(nameUser);
  }

  if (parseInt(misUser) < 20 || parseInt(misUser) === null) {
    pop();
    return false;
  } else {
    checkMistake(misUser);
  }

  checkTimerNumber(Number(numUser));

  document.querySelector(".form").remove();
  openAllCardsOne();

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
    openAllCardsTwo();
    blocks.map(function (ele) {
      return ele.classList.remove("clicked-two");
    });
    clearInterval(setCountre);
    document.querySelector(".mistake-page span").innerHTML = misUser;
    spanTimer.innerHTML = `${numUser}`;
    popLose.style.display = "none";
    startTimer();
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkName(name) {
  spanName.innerHTML = `${name}`;
}
function checkTimerNumber(number) {
  console.log(number);
  spanTimer.innerHTML = Number(number);
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
        dataSet = shuffle(dataSet);

        containerDiv.innerHTML = "";

        for (let i = 0; i < dataSet.length; i++) {
          let mainCardOne = document.createElement("div");
          mainCardOne.classList.add("card");
          mainCardOne.setAttribute("id", dataSet[i].id);
          let iconeGameOne = document.createElement("i");
          iconeGameOne.className = `${dataSet[i].src}`;
          containerDiv.appendChild(mainCardOne);
          mainCardOne.appendChild(iconeGameOne);
        }

        blocks = Array.from(containerDiv.children);
        blocks.map(function (ele) {
          return ele.classList.remove("clicked-two");
        });
        openAllCardsTwo();

        document.querySelector(".mistake-page span").innerHTML = misUser;
        spanTimer.innerHTML = `${numUser}`;
        winnerMan.style.display = "none";

        blocks.forEach(function (e) {
          e.addEventListener("click", function () {
            flip(e);
          });
        });
        // let score = parseInt(localStorage.getItem("score")) || 0;
        // score += 100;
        // localStorage.setItem("score", score);
        // scoreDisplay.innerHTML = `${score}`;

        startTimerWinner();
      };
    }
    lastCheck(z[0], z[1]);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startTimerWinner() {
  spanTimer.innerHTML = parseInt(numUser);
  setCountre = setInterval(setTimeWinner, 1000);
}

function setTimeWinner() {
  spanTimer.innerHTML = parseInt(spanTimer.innerHTML) - 1;
  if (spanTimer.innerHTML === "0") {
    document.querySelector("#loser-man"); ///اخر تحديث
    setTimeout(function () {
      document.querySelector("#loser-man").play();
    }, 1000);
    losePop();
    clearInterval(setCountre);
  }
}

function losePop() {
  let popLose = document.querySelector(".loser");
  popLose.style.cssText = `display:block; transition:0.5s`;

  document.querySelector(".btn-loser").addEventListener("click", function () {
    openAllCardsTwo();

    blocks.map(function (ele) {
      return ele.classList.remove("clicked-two");
    });
    clearInterval(setCountre);
    document.querySelector(".mistake-page span").innerHTML = misUser;
    spanTimer.innerHTML = `${numUser}`;
    popLose.style.display = "none";
    startTimerWinner();
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
      let popLose = document.querySelector(".loser");
      popLose.style.cssText = `display:block; transition:0.5s`;

      document
        .querySelector(".btn-loser")
        .addEventListener("click", function () {
          blocks.map(function (ele) {
            return ele.classList.remove("clicked-two");
          });
          openAllCardsOne(), clearInterval(setCountre);
          mistakeNumber.innerHTML = misUser;
          spanTimer.innerHTML = parseInt(numUser);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let yazan = document.querySelector(".LevelTwo");
let timerInterval;

// Assuming dataSet is defined globally as you described

document.querySelector(".LevelOne").onclick = function () {
  console.log("Clicked Level One");

  // Shuffle dataSet array
  dataSet = shuff(dataSet);

  // Clear previous content in containerDiv
  containerDiv.innerHTML = "";

  // Select 4 unique IDs from shuffled dataSet
  let selectedIds = [];
  let selectedCards = [];

  for (let i = 0; i < dataSet.length; i++) {
    if (selectedIds.length === 2) break; // We only need 4 cards (2 pairs)

    if (!selectedIds.includes(dataSet[i].id)) {
      selectedIds.push(dataSet[i].id);
      selectedCards.push(dataSet[i]);
    }
  }

  // Duplicate each selected card to create pairs
  let displayedCards = [];
  selectedCards.forEach((card) => {
    displayedCards.push(card, { id: card.id, src: card.src }); // Duplicate each card
  });

  // Shuffle displayed cards for randomness
  displayedCards = shuff(displayedCards);

  // Render displayedCards
  displayedCards.forEach((card) => {
    let mainCard = document.createElement("div");
    mainCard.classList.add("card");
    mainCard.setAttribute("id", card.id);

    let icon = document.createElement("i");
    icon.className = `fa ${card.src}`;

    mainCard.appendChild(icon);
    containerDiv.appendChild(mainCard);
  });
  openAllCardsOne();
  // Reset game state
  blocks = Array.from(containerDiv.children);
  blocks.forEach(function (ele) {
    ele.classList.remove("clicked-two");
  });

  // Update UI elements (mistake count and timer)
  document.querySelector(".mistake-page span").innerHTML = misUser;
  spanTimer.innerHTML = `${numUser}`;

  // Add click event listeners to each card
  blocks.forEach(function (e) {
    e.addEventListener("click", function () {
      flip(e);
    });
  });

  // Clear any existing timer interval and start new timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  yaznaTimer();
};

// Function to shuffle array (Fisher-Yates shuffle algorithm)
function shuff(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.querySelector(".LevelTwo").onclick = function () {
  dataSet = shuffle(dataSet);

  containerDiv.innerHTML = "";

  for (let i = 0; i < dataSet.length; i++) {
    let mainCardOne = document.createElement("div");
    mainCardOne.classList.add("card");
    mainCardOne.setAttribute("id", dataSet[i].id);
    let iconeGameOne = document.createElement("i");
    iconeGameOne.className = `${dataSet[i].src}`;
    containerDiv.appendChild(mainCardOne);
    mainCardOne.appendChild(iconeGameOne);
  }
  openAllCardsTwo();
  blocks = Array.from(containerDiv.children);
  blocks.map(function (ele) {
    return ele.classList.remove("clicked-two");
  });
  document.querySelector(".mistake-page span").innerHTML = misUser;
  spanTimer.innerHTML = `${numUser}`;

  blocks.forEach(function (e) {
    e.addEventListener("click", function () {
      flip(e);
    });
  });

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  yaznaTimer();
};

function yaznaTimer() {
  let timeRemaining = parseInt(spanTimer.innerHTML);

  timerInterval = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      spanTimer.innerHTML = timeRemaining;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

