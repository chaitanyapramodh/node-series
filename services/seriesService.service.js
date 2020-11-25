const seriessetup=require('../utilities/setupSeries')
const seriesDb=require('../utilities/series')

const seriesservice={}

seriesservice.setupseries=()=>{
    return seriessetup.seriesSetup().then((data)=>{
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

seriesservice.insertseries=(data)=>{
   return seriesDb.insertdata(data).then((res)=>{
        if(res){
            return res
        }
    })
    .catch((err)=>{
        throw err
    })
}

seriesservice.getseries=(data)=>{
    return seriesDb.getdata(data).then((res)=>{
        if(res){
            return res
        }
    })
    .catch((err)=>{
        throw err
    })
}

seriesservice.updateseries=(id,data)=>{
    return seriesDb.updateData(id,data).then((res)=>{
        if(res){
            return res
        }
    })
    .catch((err)=>{
        throw err
    })
}

module.exports=seriesservice