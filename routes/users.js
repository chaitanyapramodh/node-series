var express = require('express');
var router = express.Router();
var rh=require('./routehandlers')
var service=require('../services/seriesService.service')


/* GET users listing. */
router.get('/:username/:id',rh.getName);

router.get('/series',(req,res,next)=>{
  service.insertseries().then((data)=>{
    if(data){
      res.send(data);
    }
  }).catch(err =>{
    next(err)
  })

})
module.exports = router;
