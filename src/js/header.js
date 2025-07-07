let darkMode = false;
document.getElementById('themeToggle').addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.documentElement.style.setProperty('--main--test--color', '#FFF');
    document.documentElement.style.setProperty('--main--bg--color', '#1e252b');
  } else {
    document.documentElement.style.setProperty('--main--test--color','#000000');
    document.documentElement.style.setProperty('--main--bg--color', '#FFF');
  };
})

// let darkMode = false;
// document.getElementById('themeToggle').addEventListener('click', () => {
//   darkMode = !darkMode;
//   if (darkMode) {
//     document.querySelector('.main-container-bg-color').style.backgroundColor =
//       '#1e252b';
//     document.body.style.color = '#FFF';
//     document.querySelector('.header').style.backgroundColor = '#1e252b';
//     document.querySelector('.footer').style.backgroundColor = '#1e252b';
//   } else {
//     document.querySelector('.main-container-bg-color').style.backgroundColor =
//       '#FFF';
//     document.body.style.color = '#000000';
//     document.querySelector('.header').style.backgroundColor = '#FFF';
//     document.querySelector('.footer').style.backgroundColor = '#FFF';
//   }
// })

