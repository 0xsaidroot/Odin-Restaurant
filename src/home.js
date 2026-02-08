import homeImage from "./assets/home.jpg";

const body = document.createElement('div');
const img = new Image();
const head = document.createElement('div');
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const rouky = document.createElement('p');
rouky.textContent = "Rouky's Grill";


heading.textContent = "Welcome to ";
paragraph.textContent = "Get ready for the most exciting grill party!!!";
img.src = homeImage;


rouky.classList.add('rouky');
img.classList.add('homeImage');
head.classList.add('homeHead');
body.classList.add('generalBody','homeBody');

head.append(heading,rouky);
body.append(head,paragraph,img);

export default body;

