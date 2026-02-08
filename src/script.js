import "./styles.css";
import home from './home';
import about from './about'
import menu from './menu'

const body = document.querySelector('#content');
const nav = document.querySelector('nav');

body.appendChild(home);

nav.addEventListener('click',function(e){
    const target = e.target.id;

    body.textContent = " ";
    if(target === 'menu') body.appendChild(menu);
    else if(target === 'about') body.appendChild(about);
    else body.appendChild(home);
});