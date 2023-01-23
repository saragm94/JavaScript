const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f69692e62msh25795cc5896c163p143165jsn73aaab6ee2fb',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

fetch('https://sportscore1.p.rapidapi.com/sports/3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));