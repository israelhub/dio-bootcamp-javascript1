const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
    const data = await fetch(BASE_URL)
     .then((res) => res.json())
     .catch((e) => console.log(e));
    return data[0].url;
}

const loadCats = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadCats);

loadCats();