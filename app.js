async function getMovieList() {
	const API_KEY = 'aa12b7243cfc418950829f87739567cb';
	const BASE_URL = 'https://api.themoviedb.org/3/';
	const POSTER_URL = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2`;
	const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
	const movieRow = document.querySelector('.movie-row');

	try {
		const readableStream = await fetch(url);
		const response = await readableStream.json();
		response.results.forEach((movieDetails) => {
			movieRow.innerHTML += `
                <div class="movie-card">
                        <img src="${`${POSTER_URL}/${movieDetails.poster_path}`}" class="movie-poster" />
                        <h4 class="movie-title">${movieDetails.title}</h4>
                        <h6 class="movie-released-info">${movieDetails.release_date}</h6>
                 </div>
            `;
		});
	} catch (error) {
		console.log('error occurred' + error);
	}
}

const yearDropdown = document.getElementById('years');

function getYears(startYear) {
	const years = [];
	const currentYear = new Date().getFullYear();

	startYear = startYear || 1980;
	while (startYear <= currentYear) {
		years.push(startYear++);
	}

	years.forEach((year) => {
		var option = document.createElement('option');
		option.value = year;
		option.innerHTML = year;
		yearDropdown.appendChild(option);
	});
}

const movieGenres = [
	'Action',
	'Animation',
	'Comedy',
	'Crime',
	'Drama',
	'Experimental',
	'Fantasy',
	'Historical',
	'Horror',
	'Romance',
	'Science',
	'Fiction',
	'Thriller',
	'Western',
	'Musical',
	'War',
];

getMovieList();
getYears();
