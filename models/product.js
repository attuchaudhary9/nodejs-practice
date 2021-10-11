const mongodb = require('mongodb');
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, description, price, imageUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insert(this)
      .then((result) => result)
      .catch((error) => console.log(error));
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((result) => result)
      .catch((error) => console.log(error));
  }

  static fetchSingleProduct(id) {
    // console.log("PRODUCT JS ID ", id);
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((error) => console.log(error));
  }
}
module.exports = Product;

/**
 * 1 -->  Clear the concept of class in javascript alhmdulliah
 * 2 --> _varibale_name means this variable use only for internal use
 * 3 --> https://docs.mongodb.com/ find all the queries here
 *    Mongodb crud opertaions
 */
