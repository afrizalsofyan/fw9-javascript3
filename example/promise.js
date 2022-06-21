//contoh asynchronous

const countdown = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello world")
    },2000)
    // reject (new Error("Error!!!"))
    const success = false 
    if(success){
        reject (new Error('terminated'))
    } else{
        reject (new Error('unknown'))
    }
})

countdown
.then((param1)=>console.log(param1))
.catch((e)=>
    {
        switch(e.massage){
            case 'terminated': {
                console.log("stopped")
                break
            }
            default: {
                console.log("nothing")
            }
        }  
    }   
)