const mongoose=require('mongoose')
const {Schema}=mongoose
const productSchema=new Schema({
    name:String,
    price:String,
    image:String,
    rating:Number
})
const Product=mongoose.model("Product",productSchema)
module.exports=Product