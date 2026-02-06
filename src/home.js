import homeImage from './home.jpg';
import './home.css'

const body = document.createElement('div');
const img = document.createElement('img');

img.scr = homeImage;
img.classList.add('homeImage');
body.classList.add('generalBody');
body.append(img);

export default body;

