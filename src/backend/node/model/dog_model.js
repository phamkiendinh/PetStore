const db = require('../database/connection');

const Dog = function(dog) {
    this.id = dog.id;
    this.name = dog.name;
    this.price = dog.price;
    this.age = dog.age;
    this.description = dog.description;
    this.image = dog.image;
}


Dog.getInfo = async function (id, result) {
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

module.exports = Dog;