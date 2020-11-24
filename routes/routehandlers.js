const routeHandlers={}

routeHandlers.getName=async (req,res,next) =>{
    if(req){
        {
            var name=req.params.username
            var id=req.params.id
            res.status(200);
            res.send(`Hi Mr.${name} your id is ${id}`);
          }
    }
    else{
        next(err)
    }
}

module.exports=routeHandlers