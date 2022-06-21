import fetch from "node-fetch"
const dataUser = fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((datas)=>{
    let data = datas
    let arrName = []
    data.map((el)=>{
        let names = `${el.name}`
        // console.log(name);
        return arrName.push(names)
    })
    console.log(arrName.join(" - "))
})
.catch(()=>console.log("Error!!! Url Invalid."))

dataUser