const express = require('express');
const res = require('express/lib/response');
const pastor = require("./../Model/pastors")

const router =  express.Router();

//POST
router.post("/pastor",async (req,res)=>{
    console.log(req.body)
    const data = new pastor(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message: "pastor not registered successfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message: "pastor registered successfully",
            data:result
        })
    }

})

//GET
router.get("/pastor", async(req,res)=>{
    try {
        const result = await pastor.find()
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)     
        res.send(e) 
    }


})

//Single GET
router.get("/pastor/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await pastor.findById(pastor_id)
        if(!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }

})

//PUT
router.put("/pastor/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await pastor.findByIdAndUpdate(pastor_id, req.body,{new:true});
        if(!result){
            res.json({
                status:"FAILED",
                message:"Record not updated successfully .."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records was successfully updated",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }
})

//DELETE
router.delete("/pastor/:id", async(req,res)=>{
    try {
        const pastor_id =req.params.id;
        const result = await pastor.findByIdAndDelete(pastor_id)
        if(!result){
            res.json({
                status:"FAILED",
                message:"Record not deleted...."
            })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"Records successfully deleted...",
                data:result
            })
        }
    } catch (e) {
        console.log(e)  
        res.send(e)    
    }

})

module.exports = router