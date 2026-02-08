import fish from "./assets/fish.jpg";
import liver from "./assets/foie.jpg"
import beef from "./assets/beef.jpg"
import chicken from "./assets/chicken.jpg"

const body = document.createElement('div');
const heading = document.createElement('h1');
const container = document.createElement('div');

const food = [
    {
        name: 'Roasted Fish',
        price: '2500 FCFA',
        desc: 'A flavorful and marinated roasted tilapia fish',
        imgsrc: fish,
    }, {
        name: 'Grilled Liver',
        price: '3000 FCFA',
        desc: 'A nice and tasteful,grilled beef liver',
        imgsrc: liver,
    }, {
        name: 'Grilled Beef',
        price: '5000 FCFA',
        desc: 'Grilled Beef',
        imgsrc: beef
    }, {
        name: 'Grilled Chicken',
        price: '3000 FCFA',
        desc: 'A flavorful and long marinated tilapia fish',
        imgsrc: chicken
    },
]

for (const foodItem of food) {

    const foodDiv = document.createElement('div');
    const foodImg = document.createElement('img');
    const foodBottom = document.createElement('div');
    const foodBottomHead = document.createElement('div')

    const foodName = document.createElement('h2');
    const foodPrice = document.createElement('p');
    const foodDesc = document.createElement('p');


    foodImg.src = foodItem.imgsrc;
    foodName.textContent = foodItem.name;
    foodDesc.textContent = foodItem.desc;
    foodPrice.textContent = foodItem.price;

    foodDiv.classList.add('food');
    foodBottom.classList.add('foodBottom');
    foodBottomHead.classList.add('foodHead');
    foodImg.classList.add('menuImage');

    foodBottomHead.append(foodName, foodPrice);
    foodBottom.append(foodBottomHead, foodDesc)
    foodDiv.append(foodImg, foodBottom);

    container.append(foodDiv);
}

heading.textContent = "Our Specialties";
body.classList.add('generalBody', 'menuBody');

container.classList.add('foodContainer');
body.append(heading, container);

export default body;
