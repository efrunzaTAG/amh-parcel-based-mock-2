const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const LotID = req.query.LotID;
    console.log(`LotID=${LotID}`);
    //console.log(`req.query`,req.query);
    let data = {
      "data": [
          {
            "LotID": 1,
            "BuildingID": 1,
            "Address": "456 Side Rd",
            "Beds": 4,
            "Baths": 2.5,
            "SquareFeet": 2000,
          },
          {
            "LotID": 2,
            "BuildingID": 2,
            "Address": "123 Main Str #A",            
            "Beds": 3,
            "Baths": 2,
            "SquareFeet": 1700,
          },
          {
            "LotID": 2,
            "BuildingID": 3,
            "Address": "123 Main Str #B",
            "Beds": 3,
            "Baths": 1.5,
            "SquareFeet": 1650,
          },  
      ]
    };
    if (LotID) {
        data = {data: data.data.filter(x => x.LotID == LotID) };
    }
    res.json(data);
  } catch (err) {
    console.error(`Error while getting buildings `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;  
