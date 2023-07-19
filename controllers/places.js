const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req,res)=>{
  res.render('places/new')
})
router.get('/', (req,res)=>{
    let places = [{
        key: '123',
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, {
        key: '124',
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/man-pouring-milk-into-coffee.jpg'
      }]
      
    res.render('places/index', { places })
})
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router