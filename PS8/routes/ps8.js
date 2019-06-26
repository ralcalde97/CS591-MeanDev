const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');


const config = require('../../PS8/configs/config.json');




db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});



/* GET ps8 page. */
router.get('/:city', function(req, res, next) {

    // Get the Database
    let mongo = db.getDB();

    // Check if the weather for that city is already stored
    mongo.collection('cities').find({city: req.params.city}).
    toArray(function(err, docs) {
        console.log(docs)

        //if it is cached, send it as a response
        if (docs.length !== 0) {
            res.send(docs[0]);

        // if it is not, get the data through the API call, then store it as a json object and insert it into the collection
        } else {
            getData(req.params.city)
                .then(function (body) {
                    // Build Json variables - only for readability and debugging (it could be all done in line 51)
                    const city = req.params.city;
                    const temp = JSON.parse(body).main.temp;
                    const mintemp = JSON.parse(body).main.temp_min;
                    const maxtemp = JSON.parse(body).main.temp_max;
                    const windSpeed = JSON.parse(body).wind.speed;
                    console.log(temp);
                    let mongo = db.getDB();

                    //Insert the data into mongo - Note that they will always be inserted with the cache flag on - so that once it's in Mongo is always seen as a cached element
                    mongo.collection('cities').insertOne({temp: temp, city: city, min: mintemp, max: maxtemp, speed: windSpeed, cached:"Cached Response"})

                    //Send the data as a json object - Since this will only trigger after getting the data from the third party, I set the cached flag to non cached.
                    res.send({temp: temp, city: city, min: mintemp, max: maxtemp, speed: windSpeed, cached:"This is not a Cached response"});

                })

                .catch(function (err) {
                    console.log(`ERROR! ${err}`);

                });

            console.log(`Waiting?`);
        }
    });
});



const getData = function (qcity) {

    return new Promise(function (resolve, reject) {

        let city = qcity;
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
