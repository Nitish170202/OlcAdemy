const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost:27017/NKY_Hotel";
const {MongoClient} = require('mongodb')

mongoose.connect(mongoDB, {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", async(err, res) => {
  console.log("mongoose is connected");
  const client = new MongoClient("mongodb://localhost:27017");
        let result = await client.connect();
        let db = result.db("NKY_Hotel");
        let collection = db.collection("Food_data");
        let data = await collection.find({}).toArray();
        global.perfume_item = data;

        // console.log(fooddata);

        let collections = db.collection("Food_categories");
        let category = await collections.find({}).toArray();
        global.perfume_category = category;
});




