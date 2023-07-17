const express = require('express');
const router = express.Router();

/* GET products listing. */
router.get('/products', async function(req, res, next) {
  try {
    const productID = req.query.productID;
    const data = {
      "data": [
          {
              "OrderID": 10309,
              "OrderDate": "2018-09-19T00:00:00",
              "ShipCountry": "Ireland " + (productID ? productID : "UNK"),
              "ShipCity": "Cork",
              "UnitPrice": 20.0,
              "Quantity": 30,
              "Discount": 0.0
          },
          {
              "OrderID": 10325,
              "OrderDate": "2018-10-09T00:00:00",
              "ShipCountry": "Germany YO",
              "ShipCity": "Brandenburg",
              "UnitPrice": 20.0,
              "Quantity": 6,
              "Discount": 0.0
          },
          {
              "OrderID": 10618,
              "OrderDate": "2019-08-01T00:00:00",
              "ShipCountry": "Canada",
              "ShipCity": "Montréal",
              "UnitPrice": 25.0,
              "Quantity": 70,
              "Discount": 0.0
          },
          {
              "OrderID": 10734,
              "OrderDate": "2019-11-07T00:00:00",
              "ShipCountry": "Brazil",
              "ShipCity": "Campinas",
              "UnitPrice": 25.0,
              "Quantity": 30,
              "Discount": 0.0
          },
          {
              "OrderID": 10830,
              "OrderDate": "2020-01-13T00:00:00",
              "ShipCountry": "Brazil",
              "ShipCity": "Sao Paulo",
              "UnitPrice": 25.0,
              "Quantity": 6,
              "Discount": 0.0
          },
          {
              "OrderID": 10871,
              "OrderDate": "2020-02-05T00:00:00",
              "ShipCountry": "France",
              "ShipCity": "Marseille",
              "UnitPrice": 25.0,
              "Quantity": 50,
              "Discount": 0.05
          },
          {
              "OrderID": 10934,
              "OrderDate": "2020-03-09T00:00:00",
              "ShipCountry": "Germany",
              "ShipCity": "Frankfurt a.M.",
              "UnitPrice": 25.0,
              "Quantity": 20,
              "Discount": 0.0
          },
          {
              "OrderID": 10949,
              "OrderDate": "2020-03-13T00:00:00",
              "ShipCountry": "Canada",
              "ShipCity": "Tsawassen",
              "UnitPrice": 25.0,
              "Quantity": 12,
              "Discount": 0.0
          },
          {
              "OrderID": 10952,
              "OrderDate": "2020-03-16T00:00:00",
              "ShipCountry": "Germany",
              "ShipCity": "Berlin",
              "UnitPrice": 25.0,
              "Quantity": 16,
              "Discount": 0.05
          },
          {
              "OrderID": 10989,
              "OrderDate": "2020-03-31T00:00:00",
              "ShipCountry": "Brazil",
              "ShipCity": "Rio de Janeiro",
              "UnitPrice": 25.0,
              "Quantity": 40,
              "Discount": 0.0
          },
          {
              "OrderID": 11076,
              "OrderDate": "2020-05-06T00:00:00",
              "ShipCountry": "France",
              "ShipCity": "Marseille",
              "UnitPrice": 25.0,
              "Quantity": 20,
              "Discount": 0.25
          },
          {
              "OrderID": 11077,
              "OrderDate": "2020-05-06T00:00:00",
              "ShipCountry": "USA",
              "ShipCity": "Albuquerque",
              "UnitPrice": 25.0,
              "Quantity": 1,
              "Discount": 0.02
          }
      ]
    };

    res.json(data);
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST products */
router.post('/', async function(req, res, next) {
  try {    
    res.status(500).json({'message': 'not supported'});
  } catch (err) {
    console.error(`Error while posting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;  
