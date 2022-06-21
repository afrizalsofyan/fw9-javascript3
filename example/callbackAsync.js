function countdown2sec (cb){
    setTimeout(()=>{
        cb()
    },2000)
}

const cd4s = (cb)=>{
    countdown2sec(()=>{
        countdown2sec(()=>{
            cb()
        })
    })
}

function cd5s(cb){
    const thecb = ()=>{
        cd4s(()=>{
            cb(thecb)
        })
    }
}

cd5s(()=>{
    console.log('hello')
})