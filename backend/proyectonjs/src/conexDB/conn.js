const mongoose=require('mongoose');
require("dotenv").config({ path: "variables.env" });
mongoose
    .connect("mongodb+srv://andresanchez01:SANTAFEcampeon01@cluster0.yujvls1.mongodb.net/tiendaDeMascotas?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
    },(err,res)=>{
            if(err){
            throw err;
            }else{
            console.log('La conexion a la base de datos fue correcta...')
            }
        });
        
    module.exports =mongoose;