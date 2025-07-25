import blodgettOptimized from '../img/scientist-optimization/blodgett-optimized.jpg';
import copernicusOptimized from '../img/scientist-optimization/copernicus-optimized.jpg';
import curieOptimized from '../img/scientist-optimization/curie-optimized.jpg';
import einsteinOptimized from '../img/scientist-optimization/einstein-optimized.jpg';
import galileiOptimized from '../img/scientist-optimization/galilei-optimized.jpg';
import goodeOptimized from '../img/scientist-optimization/goode-optimized.jpg';
import hammarströmOptimized from '../img/scientist-optimization/hammarström-optimized.jpg';
import keplerOptimized from '../img/scientist-optimization/kepler-optimized.jpg';
import lovelaceOptimized from '../img/scientist-optimization/lovelace-optimized.jpg';
import meitnerOptimized from '../img/scientist-optimization/meitner-optimized.jpg';
import newtonOptimized from '../img/scientist-optimization/newton-optimized.jpg';
import planckOptimized from '../img/scientist-optimization/planck-optimized.jpg';


const scientistGameList = document.querySelectorAll(".pick_scientist__list li > p")
const buttonList = document.querySelectorAll(".pick_scientist button")
const pickScientistList = document.querySelector('#pick_scientist-list')

const imageMap = {
  einstein: einsteinOptimized,
  newton: newtonOptimized,
  galilei: galileiOptimized,
  curie: curieOptimized,
  kepler: keplerOptimized,
  copernicus: copernicusOptimized,
  planck: planckOptimized,
  blodgett: blodgettOptimized,
  lovelace: lovelaceOptimized,
  goode: goodeOptimized,
  meitner: meitnerOptimized,
  hammarström: hammarströmOptimized,
};


const scientists = [
{
name: "Albert",
surname: "Einstein",
born: 1879,
dead: 1955,
id: 1
},
{
name: "Isaac",
surname: "Newton",
born: 1643,
dead: 1727,
id: 2
},
{
name: "Galileo",
surname: "Galilei",
born: 1564,
dead: 1642,
id: 3
},
{
name: "Marie",
surname: "Curie",
born: 1867,
dead: 1934,
id: 4
},
{
name: "Johannes",
surname: "Kepler",
born: 1571,
dead: 1630,
id: 5
},
{
name: "Nicolaus",
surname: "Copernicus",
born: 1473,
dead: 1543,
id: 6
},
{
name: "Max",
surname: "Planck",
born: 1858,
dead: 1947,
id: 7
},
{
name: "Katherine",
surname: "Blodgett",
born: 1898,
dead: 1979,
id: 8
},
{
name: "Ada",
surname: "Lovelace",
born: 1815,
dead: 1852,
id: 9
},
{
name: "Sarah E.",
surname: "Goode",
born: 1855,
dead: 1905,
id: 10
},
{
name: "Lise",
surname: "Meitner",
born: 1878,
dead: 1968,
id: 11
},
{
name: "Hanna",
surname: "Hammarström",
born: 1829,
dead: 1909,
id: 12
}
];

const originalScientists = [...scientists]; 
let currentScientists = [...scientists]; 

const startsWithLetter = (str, letter) => {
  return str[0].toLowerCase() === letter.toLowerCase();
};

function addScientists(arr) {
  pickScientistList.innerHTML = "";

  arr.forEach(scientist => {
    const li = document.createElement("li");
    li.className = "pick_scientist__list-item flippable"; 

    const imageKey = scientist.surname.toLowerCase();
    const imagePath = imageMap[imageKey];

    li.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <p class="pick_scientist__name" id="name-${scientist.id}" data-id="${scientist.id}">
            ${scientist.name} ${scientist.surname} ${scientist.born}-${scientist.dead}
          </p>
        </div>
        <div class="card-back">
          <img src="${imagePath}" alt="${scientist.name} ${scientist.surname}" loading="lazy" />
        </div>
      </div>
    `;

    pickScientistList.appendChild(li);
  });
}


addScientists(scientists);

buttonList.forEach((item) => {
  item.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if(action === "born-19th-century") {
      currentScientists = originalScientists.filter(({ born }) => born >= 1800 && born < 1900);
      addScientists(currentScientists);
    } else if(action === "sort-alphabetically") {
      currentScientists = [...originalScientists].sort((a, b) => a.name.localeCompare(b.name));
      addScientists(currentScientists);
    } else if(action === "sort-by-age") {
      currentScientists = [...originalScientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
      addScientists(currentScientists);
    }
      else if(action === "find-latest-born") {
      const latestBorn = [...originalScientists].reduce((latest, current) => {
        if(latest.born < current.born) {
          return current
        } else {
          return latest
        }
      });
      addScientists([latestBorn]);
    } else if(action === "find-surnames-c") {
      currentScientists = [...originalScientists].filter(({surname}) => {
        if(startsWithLetter(surname, "C")) {
          return true
        }
      })
      addScientists(currentScientists);
    } else if(action === "remove-names-a") {
        currentScientists = [...originalScientists].filter(({name}) => {
          if(startsWithLetter(name, "A")) {
            return false
        } else {
          return true
        }
      })
      console.log(currentScientists);
      addScientists(currentScientists);
    } else if(action === "find-longest-shortest-lived") {
      const arr = [];
      const findLongestLived = [...originalScientists].reduce((acc, curr) => {
        const accAge = acc.dead - acc.born;
        const currAge = curr.dead - curr.born;
        return currAge > accAge ? curr : acc; 
    });
        const findShortestLived = [...originalScientists].reduce((acc, curr) => {
        const accAge = acc.dead - acc.born;
        const currAge = curr.dead - curr.born;
        return currAge < accAge ? curr : acc; 
    });
      arr.push(findLongestLived)
      arr.push(findShortestLived)
      addScientists(arr);
    } else if(action === "match-initials") { 
      const match = [...originalScientists].filter(({name, surname}) => {
        return name[0] === surname[0]
      })
      console.log(match);
      addScientists(match)
    } else if(action === "find-einstein-birthyear") {
      currentScientists = [...originalScientists].filter(({name, surname, born, dead, id}) => {
        if(name === "Albert" || surname === "Einstein") {
          console.log({name, surname, born, dead, id});
          return {name, surname, born, dead, id}
        } 
      })
      console.log(currentScientists);
      addScientists(currentScientists);
    } 
  })
})
