

const db = require("../model")
module.exports = function(app){
    app.post("/api/birds", ({body}, res)=>{
        db.Birds.create(body).then(data=>{
            res.json(data)
        })
    })


    // app.get("/api/birds", (req, res)=>{
    //     db.Birds.find().then(data=>{

    //         res.json(data)
    //     })
    // })



}