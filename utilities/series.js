const collection=require('../model/setupDB')

seriesModel={}

seriesModel.insertdata=(data)=>{
    return collection.getSeriesCollection().then( ( myCollection ) =>{
       return  myCollection.insertMany(data).then( ( data ) => {
            if( data ) {
                return"Insertion Successfull"
            } else{
                throw new Error( "Insertion failed" )
            }
        } )    
        })
}

seriesModel.getdata=(id)=>{
    return collection.getSeriesCollection().then( ( myCollection ) =>{
        return myCollection.findOne({id:id}).then( ( data ) => {
            if( data ) {
                return data
            } else{
                throw new Error( "Retrieving failed" )
            }
        } )    
        })
}

seriesModel.updateData=(id,data) =>{

    var query = { $set: { "characters": data} }
    return collection.getSeriesCollection().then( ( myCollection ) =>{
        return myCollection.updateOne({id:id},query).then((data)=>{
            if(data){
                return data
            }
            else{
                throw new Error("Updation failed")
            }
        })
    })

}


module.exports=seriesModel