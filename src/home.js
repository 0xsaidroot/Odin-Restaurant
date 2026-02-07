import homeImage from "./assets/home.jpg";

const body = document.createElement('div');
const img = new Image();
const heading = document.createElement('h1');
const paragraph = document.createElement('p');

heading.textContent = "Welcome to Rouky's Grill "
paragraph.textContent = "Get ready for the most exciting grill party!!!";
img.src = homeImage;
img.classList.add('homeImage');
body.classList.add('generalBody','homeBody');

body.append(heading,paragraph,img);

export default body;

