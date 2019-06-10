var express = require('express');
var router = express.Router();
const request = require("request");


const config = require('../configs/config.json');



/* GET ps4 page. */
router.get('/', function(req, res, next) {
    getData()
        .then(function (body) {
            const temp = JSON.parse(body).main.temp;
            const mintemp = JSON.parse(body).main.temp_min;
            const maxtemp = JSON.parse(body).main.temp_max;
            const windSpeed = JSON.parse(body).wind.speed;

            res.render('ps4', {temp: temp, city: 'Boston', min: mintemp, max: maxtemp, speed: windSpeed})

        })

        .catch(function(err) {
            console.log(`ERROR! ${err}`);
            res.render('ps4', {result: 'Error processing'});
        });

    console.log(`Waiting?`);


});



const getData = function () {
    return new Promise(function (resolve, reject) {

        let city = "Boston";
        const apiKey= config.key;
        console.log(apiKey);
        const options = {
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        }
        request(options, function (error, response, body) {
            if (error)

                reject(new Error(error));
            else {
                resolve(body);

            }
        })
    })
}

module.exports = router;