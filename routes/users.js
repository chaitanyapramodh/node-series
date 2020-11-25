var express = require('express');
var router = express.Router();
var rh=require('./routehandlers')
var service=require('../services/seriesService.service')
/* GET users listing. */
// router.get('/:username/:id',rh.getName);

var count=4

router.get('/seriesdetails/:id',(req,res,next) =>{
  var id=req.params.id
  service.getseries(id).then((data)=>{
    if(data){
      res.send(data);
    }
  }).catch(err =>{
    res.status(400);
    res.send("error in retrieving");
  })
})


router.get('/setupdb',(req,res,next)=>{
  service.setupseries().then((data)=>{
    if(data){
      res.send(data);
    }
  }).catch(err =>{
    res.status(400);
    res.send("error in insertion");
  })

})

router.post('/updateseries/:id',(req,res)=>{
  var id=req.params.id
  var updatefield=(req.body.characters)
  console.log(updatefield)
  service.updateseries(id,updatefield).then((data)=>{
    if(data){
      res.send(data);
    }
  }).catch((err)=>{
    res.send(err);
  })
})

router.post('/addseries', (req, res) => {
  var series=req.body
  var id=idgenerator()
  series.id=id
  service.insertseries(series).then((data)=>{
    if(data){
      res.send(data);
    }
  }).catch(err =>{
    res.status(400);
    // res.send("error in insertion");
    res.send(err);
  })
});

idgenerator =()=>{
  count+=1
  return count;
}
module.exports = router;
