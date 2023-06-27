const db = require('../database/connection');

const Fish = function(fish) {
    this.id = fish.id;
    this.name = fish.name;
    this.price = fish.price;
    this.age = fish.age;
    this.description = fish.description;
    this.image = fish.image;
}


Fish.getInfo = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = ``;
    db.query(query, (err,data) => {
        if (err) console.log(err);
        else result(data);
    });
}

module.exports = Fish;