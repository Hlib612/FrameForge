let darkMode = false;
document.querySelector('#themeToggle').addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.documentElement.style.setProperty('--main--test--color', '#FFF');
    document.documentElement.style.setProperty('--main--bg--color', '#1e252b');
  } else {
    document.documentElement.style.setProperty('--main--test--color','#000000');
    document.documentElement.style.setProperty('--main--bg--color', '#FFF');
  };
})

const dropDownToogle = document.querySelector('.dropDown_btn');
const dropDownMenu = document.querySelector('.dropDown_menu');
dropDownToogle.addEventListener('click', () => {
  dropDownMenu.style.display = dropDownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropDown')) {
    dropDownMenu.style.display = "none";
  }
});
