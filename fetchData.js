import fetch from "node-fetch"
const data = fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((datas)=>{
    let data = datas
    let arrName = []
    data.map((el)=>{
        let name = `${el.name}`
        // console.log(name);
        arrName.push(name)
    })
    console.log(arrName.join(" - "))
})

data