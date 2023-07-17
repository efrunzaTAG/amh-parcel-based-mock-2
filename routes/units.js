const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const UnitID = req.query.UnitID;
    console.log(`UnitID=${UnitID}`);
    console.log(`req.query`,req.query);
    let data = {
      "data": [
          {
            "UnitID": 1,
            "BuildingID": 1,
            "Address": "456 Side Rd #A",
            "Beds": 2,
            "Baths": 1,
            "SquareFeet": 1000,
          },
          {
            "UnitID": 2,
            "BuildingID": 1,
            "Address": "456 Side Rd #B",            
            "Beds": 2,
            "Baths": 1.5,
            "SquareFeet": 1000,
          },
          {
            "UnitID": 3,
            "BuildingID": 2,
            "Address": "123 Main Str #A",
            "Beds": 3,
            "Baths": 2,
            "SquareFeet": 1700,
          },  
          {
            "UnitID": 4,
            "BuildingID": 3,
            "Address": "123 Main Str #B",
            "Beds": 3,
            "Baths": 1.5,
            "SquareFeet": 1650,
          },  
      ]
    };

    res.json(data);
  } catch (err) {
    console.error(`Error while getting buildings `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;  
