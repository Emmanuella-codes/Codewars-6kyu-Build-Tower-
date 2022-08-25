// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function towerBuilder(nFloors) {
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    let stars = "*".repeat(i * 2 - 1); // to return odd integers of stars
    let pyramid = " ".repeat(nFloors - i);
    result.push(stars)
  }
  return result
}

console.log(towerBuilder(5))
