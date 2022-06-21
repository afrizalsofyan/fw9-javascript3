const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
        'September', 'October', 'November', 'Desember']
        if(!error){
            callback(null, month)
        } else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}


getMonth((param1, param2)=>{
    if(param1===null){
        param2.map((el)=>{
            console.log(el);
        })
    } else {
        console.log(new Error('Sorry Data Not Found', []))
    }
})