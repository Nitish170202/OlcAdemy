const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

router.post('/loadData', (req,res)=>{

    try{
        res.send([global.perfume_item , global.perfume_category]);
        console.log("Data load")
    }catch(err){
        console.log(err)
    }
})

router.get('/product/:id', async (req,res)=>{
    const { Id } = req.params;
    const data = global.perfume_item.find(data=>data._id === Id);
    if(data){
        console.log("data found");
    }
    // console.log("product id fetching perfectlly" , Id);
})


module.exports = router;
