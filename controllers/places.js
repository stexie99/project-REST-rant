const router = require('express').Router()
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

module.exports = router