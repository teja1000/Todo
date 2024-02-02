const express=require("express");
const { createTodo, updateTodo } = require("./type");
const app=express();
app.use(express.json());

app.post('/todo',(req,res)=>{
  const createpayload=req.body;
  const parsepayload=createTodo.safeParse(createpayload);
  if(!parsepayload.success){
    res.status(411).json({
      msg:"you sent the wrong inputs",
    })
    return ;
  }

})

app.get('/todos',(req,res)=>{
  
})

app.put("/completed",(req,res)=>{
  const updatepayload=req.body;
  const parsedpayload=updateTodo.safeParse(updatepayload);
  if(!parsedpayload.success){
    res.status(411).json({
      msg:"you send wrong inputs",
    })
    return;
  }


})