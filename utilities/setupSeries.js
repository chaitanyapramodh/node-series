const collection=require('../model/setupDB')

let seriesData=[
    {name:"Game Of Thrones",seasons:8,characters:["Khaleesi,Ned Stark, Arya Stark"],running:false,rating:9.1},
    {name:"Brooklyn 99",seasons:7,characters:["Ames,Jakey, Rosa,charles"],running:true,rating:9.4},
    {name:"White COllar",seasons:6,characters:["Neil,Peter, moz,EL"],running:false,rating:9.3},
    {name:"Burn Notice",seasons:6,characters:["Mike,sam,fiona"],running:false,rating:9.2},
]

exports.seriesSetup = () => {
//    return  collection.getSeriesCollection()
// }
    return collection.getSeriesCollection().then( ( myCollection ) => {
        return myCollection.deleteMany().then( () => {
            return myCollection.insertMany(seriesData ).then( ( data ) => {
                if( data ) {
                    return"Insertion Successfull"
                } else{
                    throw new Error( "Insertion failed" )
                }
            } )
        } )
    } )
}