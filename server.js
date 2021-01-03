const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
	res.send(getRandomElement(quotes));
});

app.get('/api/quotes', (req, res, next) => {
	if (req.query) {
		const quoteArray = [];
		const author = req.query.author;
		for (let i = 0; i < quotes.length; i++) {
			if (quotes[i]["person"] === author) {
				quoteArray.push(quotes[i]["quote"]);
			}
		}
		res.send(quoteArray);
	} else {
		res.send(quotes);
	}
});




app.listen(PORT);
