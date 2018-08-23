var faker = require('faker');
var fs = require('fs');
const DateGen = require('random-date-generator');

const UsersData = () => {
	var counter = 0
	for(var i = 0; i < 10000; i++){
		var data = '';
		for(var n = 0; n <= 1000; n++){
			data += `${counter},${faker.name.findName()}${i},${faker.image.avatar()}\n`
			counter ++;
		}
		fs.appendFileSync('UsersData.csv', data, 'utf8');
		n = 0
		console.log(i)
	}
}

const IDGen = () => {
	return Math.floor((Math.random() * 10000000)) + 1;
}

const getRating = () => {
  return Math.round((Math.random() * (4 - 1) + 1) * 2)/2;
}

const getDate = () => {
  let start = new Date (2011, 1, 1);
  let end = new Date ();

  var randoDate = faker.date.between('2001-01-01', '2018-01-05');
  return randoDate.toISOString().slice(0, 19).replace('T', ' ');
};

const spikeGen = () => {
	return Math.floor(Math.random() * 100) + 50;
}


const ReviewData = () => {
	var counter = 0
	for(var i = 0; i < 1; i++){
		var data = '';
		for(var n = 0; n <= 50; n++){
			data += `${counter},${IDGen()},${IDGen()},${getRating()},${getRating()},${getRating()},${getRating()},${getRating()},${getRating()},${getDate()},${faker.lorem.sentences()}\n`
			counter ++;
		}
		fs.appendFileSync('testreviewdata.csv', data, 'utf8');
		n = 0

		if(i % 1000 === 0)
			console.log(i)
	}
}

ReviewData()


