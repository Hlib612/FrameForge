const backDrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector(
  'button[data-action="close-modal"]');
const UserNameInput = document.querySelector('.greating_modal_input');
const UserName = document.querySelector('.headerDiv_greetingsSpan');
const UserNameSaveButton = document.querySelector('.greating_modal_submit_button');

const onEscepePress = event => {
  if (event.code === 'Escape') {
    onButtonModalClose();
  }
};

// document.body.classList.add('show-modal');
document.addEventListener('keydown', onEscepePress);

const onButtonModalClose = event => {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onEscepePress);
};

const onBackDropClick = event => {
  if (event.target === event.currentTarget) {
    onButtonModalClose();
  }
};

let UserNameInputContent = 0;

const refreshInputTextContent = event => {
 UserNameInputContent = UserNameInput.value;
 console.log(UserNameInputContent);
};
 console.log(UserNameInputContent);
closeModalButton.addEventListener('click', onButtonModalClose);

backDrop.addEventListener('click', onBackDropClick);
console.log(UserNameInput.textContent)
const changeUserName = event => {
    event.preventDefault();
    if(UserNameInputContent === 0){
       UserName.textContent = 'User' ;
    } else {
        UserName.textContent = `.${UserNameInputContent}.`;
    }
}
UserNameInput.addEventListener('change' , refreshInputTextContent) 
UserNameSaveButton.addEventListener('click' , changeUserName);