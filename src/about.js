import chefImage from './assets/chef.jpg'

const body = document.createElement('div');
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const chefImg = document.createElement('img');

heading.textContent = "About US"
paragraph.textContent = "No need to know about us. Just eat our food and it will be fine !";
chefImg.src = chefImage;
chefImg.setAttribute('class','chefImage');
body.classList.add('generalBody');
body.append(heading,paragraph,chefImg);

export default body;
