const mongoose = require('mongoose');
const url='mongodb://localhost:27017/projet44DB'
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
    .catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })

const seriesSchema=new mongoose.Schema(
    {   
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        seasons:{
            type:Number,
            required:true
        },
        characters:{
            type:Array,
            required:true
        },
        running:{
            type:Boolean,
            required:true
        },
        rating:{
            type:Number,
            required:true
        }
    },{collection:"series"}
)
let collection = {};

collection.getSeriesCollection = () => {
    return mongoose.connect( url, { useNewUrlParser: true } ).then( ( database ) => {
        return database.model( 'series', seriesSchema )
    } ).catch( (  ) => {
        let err = new Error( "Could not connect to Database" );
        err.status = 500;
        throw err;
    } )
}


module.exports=collection