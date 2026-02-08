 import fish from "./assets/fish.jpg";
// const img = new Image();

const body = document.createElement('div');
const heading = document.createElement('h1');
const container = document.createElement('div');

const foodDiv = document.createElement('div');
const foodImg = document.createElement('img');
const foodBottom = document.createElement('div');

const foodName = document.createElement('h2');
const foodPrice = document.createElement('p');
const foodDesc = document.createElement('p');

heading.textContent = "Our Specialties";

// foodImg = fish;
foodName.textContent = "Eru"
foodDesc.textContent = "Sweet lovely food,nice nice"
foodPrice.textContent = "1200FCFA";

container.classList.add('.foodContainer');
body.classList.add('generalBody');
foodImg.classList.add('menuImage');
foodDiv.classList.add('foodContainer');

foodBottom.append(foodName,foodPrice,foodDesc)
foodDiv.append(foodImg,foodBottom);
container.append(foodDiv);

body.append(heading,container);

export default body;
