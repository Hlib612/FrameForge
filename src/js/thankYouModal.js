const openFooterBtn = document.querySelector("button[data-action='open-footer-modal']");
const closeFooterBtn = document.querySelector("button[data-action='close-footer-modal']");
const footerBackdrop = document.querySelector('.js-footer-modal-backdrop');
const footerEmailInput = document.querySelector(".footer-email-input");

const onOpenFooterModal = (event) => {
  event.preventDefault();
  document.body.classList.add('show-footer-modal');
  footerEmailInput.value = ""; 
  document.addEventListener('keydown', onEscapeCloseFooterModal);
};

const onCloseFooterModal = () => {
  document.body.classList.remove('show-footer-modal');
  document.removeEventListener('keydown', onEscapeCloseFooterModal);
};

const onFooterBackdropClick = event => {
  if (event.target === event.currentTarget) {
    onCloseFooterModal();
  }
};

const onEscapeCloseFooterModal = event => {
  if (event.code === 'Escape') {
    onCloseFooterModal();
  }
};

openFooterBtn.addEventListener('click', onOpenFooterModal);
closeFooterBtn.addEventListener('click', onCloseFooterModal);
footerBackdrop.addEventListener('click', onFooterBackdropClick);