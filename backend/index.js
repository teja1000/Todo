const express=require("express");
const { createTodo, updateTodo } = require("./type");
const {todo} =require("./database");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors())

app.post('/todo',async(req,res)=>{
  const createpayload=req.body;
  const parsepayload=createTodo.safeParse(createpayload);
  if(!parsepayload.success){
    res.status(411).json({
      msg:"you sent the wrong inputs",
    })
    return ;
  }
  await todo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false

  })
  res.json({
    msg:"Todo created"
  })

})

app.get('/todos',async(req,res)=>{
  const todos=await todo.find({})
  res.json({
    todos
  })

  
})

app.put("/completed",async(req,res)=>{
  const updatepayload=req.body;
  const parsedpayload=updateTodo.safeParse(updatepayload);
  if(!parsedpayload.success){
    res.status(411).json({
      msg:"you send wrong inputs",
    })
    return;
  }
  await todo.update({
  _id:req.body.id
  },{completed:true})

  res.json({msg:"Todo marked as completed"})

})

app.listen(3000);