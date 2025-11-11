import express from "express"
import {ENV} from "./lib/env.js"
const app = express();



app.get("/",(req,res)=>{
    res.status(200).json({msg:"everything is fine"});
})

app.listen(ENV.PORT,()=>{ //ENV from the lib/env.js -. we did it to redice redundancy of importign and configuring the dotenv package
    console.log("Server is running on port 8080");
})