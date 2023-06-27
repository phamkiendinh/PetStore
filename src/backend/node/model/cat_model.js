const db = require('../database/connection');

const Cat = function(cat) {
    this.id = cat.id;
    this.name = cat.name;
    this.price = cat.price;
    this.age = cat.age;
    this.description = cat.description;
    this.image = cat.image;
}


Cat.getInfo = async function (id, result) {
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

module.exports = Cat;