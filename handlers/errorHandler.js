const errorHandler =(error,req,res,next)=>{
    if(error){
        if(error.message){
        res.status(400).json({
            status: "failed",
            message: error.message
        })
        } else{
        res.status(400).json({
            status: "Something went wrong",
            error: error
        })
    }
    } else{
        next();
    }
}

module.exports=errorHandler;