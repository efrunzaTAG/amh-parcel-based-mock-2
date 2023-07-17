const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    //console.log(`req.query`,req.query);
    const data = {
      "data": [
          {
              "LotID": 1,
              "OppID": 1,
              "ParcelNumber": "SubParcel1",
              "Address": "456 Side Rd",
              "Status": "Raw",
              "Corner": false
          },
          {
              "LotID": 2,
              "OppID": 1,
              "ParcelNumber": "SubParcel2",
              "Address": "123 Main Str",
              "Status": "Raw",
              "Corner": true
          },     
      ]
    };

    res.json(data);
  } catch (err) {
    console.error(`Error while getting lots `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;  
