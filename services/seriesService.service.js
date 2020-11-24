const seriesDb=require('../utilities/setupSeries')

const seriesservice={}

seriesservice.insertseries=()=>{
    return seriesDb.seriesSetup().then((data)=>{
        if(data!=null){
            return data
        }
        else{
            // let err = new Error( "No destination found" )
            // err.status = 404
            // throw err
            let err=new Error(data.error.message);
            err.status=404;
            throw err;

        }
    })
}

module.exports=seriesservice