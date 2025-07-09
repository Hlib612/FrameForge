const rpsOptionList = document.querySelector(".scissors_paper-list")
const computerChoices = ['rock', 'paper', 'scissors'];
const resultTitle = document.querySelector(".scissors_paper_result_list_title")
const gameResult = document.querySelector("#gameResult")
const computerWinsCounter = document.querySelector("#computerWinsCounter")
const userWinsCounter = document.querySelector("#userWinsCounter")
const showComputerChoiceBtn = document.querySelector("#computerChoiceBtn")
const rpsOptionListItems = document.querySelectorAll(".scissors_paper-list li");
let computerWins = 0;
let userWins = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}

const comparison = function(userChoice) {
  const computerChoice = getComputerChoice();  // тут я зберігається поточний вибір компютера 

  if(userChoice === computerChoice) { // перевірка на нічию, якщо так, то ніхто не отримає перемогу і дерево наше не чипаємо зайвий раз 
    gameResult.textContent = "Нічия!";
    gameResult.style.color = "gray";
    return;
  }

  const userWinsRound = // перевірка на те хто виграв раунд 
    (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper");
    
  if (userWinsRound) { // якщо буде тру, то юзер, не компютер
    userWins += 1;
    userWinsCounter.textContent = `Ви - ${userWins}`;
    gameResult.textContent = "Ви виграли раунд!";
    gameResult.style.color = "#039900";
  } else {
    computerWins += 1;
    computerWinsCounter.textContent = `Комп’ютер - ${computerWins}`;
    gameResult.textContent = "Комп’ютер виграв раунд!";
    gameResult.style.color = "#990000";
  }
}

rpsOptionList.addEventListener("click", (event) => {
  const li = event.target.closest("li[data-action]"); // знайде найближчий li[data-action] і дасть або запише у змінну значення data елемента в action
  if (!li) return; 
  rpsOptionListItems.forEach(item => {
  item.style.backgroundColor = "#000"; 
  });
  const action = li.dataset.action;
  console.log(action);
  comparison(action)
})

showComputerChoiceBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

     rpsOptionListItems.forEach(item => {
      item.style.backgroundColor = "#000"; 
    if (item.classList.contains(computerChoice)) {
      item.style.backgroundColor = "#BEBEBE";
    }
  });
});
