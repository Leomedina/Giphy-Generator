const form = document.querySelector('form');
const searchBar = document.querySelector('#searchVal');
const results = document.querySelector('.results');
const remove = document.querySelector('.remove');

async function getGif(search) {
	try {
		const key = '8QooyYX4xC5q9J2g4BuH0NwZbUlteh4l';
		const url = `'https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${search}&rating=G`;
		const response = await axios.get(url);
		if (!response.data.data.image_original_url) {
			throw new Error('Image Not Found');
		}
		renderGif(response.data.data.image_original_url);
	} catch (e) {
		console.log(e);
	}

	//4 - defined error
	//3 - syntax err: code does not run (compiled languages vs dynamic lang)
	//2 - reference err: code will run until that point
	//1 - type-error:  (weakly type lang vs strong type lang(typescript))
}

function renderGif(gif) {
	const newImg = document.createElement('img');
	newImg.setAttribute('src', gif);
	results.appendChild(newImg);
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const searchVal = searchBar.value;
	if (searchVal) {
		getGif(searchVal);
		searchBar.classList.remove('error');
	} else {
		searchBar.classList.add('error');
	}
	form.reset();
});

remove.addEventListener('click', function (e) {
	e.preventDefault();
	results.innerHTML = '';
});