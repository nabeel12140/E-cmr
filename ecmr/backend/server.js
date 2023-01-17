import express from "express";
import data from "./data.js";

const app=express();
app.get('/api/product',(req,res)=>
{
    res.send(data.products);
    //test
});
app.get('/api/product/slug/:slug',(req,res)=>
{
    const product=data.products.find((x)=>x.slug===req.params.slug);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:'Product Not Found'})
    }
});
app.get('/api/product/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
const port=process.env .PORT || 4000;
app.listen(port,()=>
{
    console.log(`server start at https://localhost:${port}`);
});