// console.log("Let's get this party started!");
const form = document.querySelector('form');
const searchBar = document.querySelector('#searchVal');
const results = document.querySelector('.results');
const remove = document.querySelector('.remove');

async function getGif(search) {
	const key = '8QooyYX4xC5q9J2g4BuH0NwZbUlteh4l';
	const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${search}&rating=G`);
	renderGif(response.data.data.image_original_url);
}

function renderGif(gif) {
	const newImg = document.createElement('img');
	newImg.setAttribute('src', gif);
	results.appendChild(newImg);
}

function promptError() {
    searchBar.classList.add("error");
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchVal = searchBar.value;
	if (searchVal) {
        getGif(searchVal);
        searchBar.classList.remove("error");
	} else {
        promptError();
    }
	form.reset();
});

remove.addEventListener('click', function (e) {
	e.preventDefault();
	results.innerHTML = '';
});