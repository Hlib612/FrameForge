// let darkMode = false;
// document.getElementById('themeToggle').addEventListener('click', () => {
//   darkMode = !darkMode;
//   if (darkMode) {
//     document.documentElement.style.setProperty('--main--test--color', '#FFF');
//     document.documentElement.style.setProperty('--main--bg--color', '#1e252b');
//   } else {
//     document.documentElement.style.setProperty(
//       '--main--test--color',
//       '#000000'
//     );
//     document.documentElement.style.setProperty('--main--bg--color', '#FFF');
//   };
// })

let darkMode = false;
document.getElementById('themeToggle').addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = '#1e252b';
    document.body.style.color = '#FFF';
  } else {
    document.body.style.backgroundColor = '#FFF';
    document.body.style.color = '#000000';
  }
})