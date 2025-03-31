const butoon = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const title = document.getElementById('page-title');

butoon.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeTexts();
}

function changeClasses(){
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    butoon.classList.toggle('dark-mode');
}

function changeTexts(){
    const darkMode = 'Dark Mode';
    const lightMode = 'Light Mode';

    if(body.classList.contains('dark-mode')){
        title.innerHTML = darkMode + " ON";
        butoon.innerHTML = lightMode;
        return;
    }

    title.innerHTML = lightMode + " ON";
    butoon.innerHTML = darkMode;

}

