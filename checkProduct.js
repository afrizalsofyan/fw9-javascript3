//Program 1
const checkProduct = (product) => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const listPr0oduct = ['Latte', 'Arabica', 'Robusta', 'Americanno']
            let checkProduct = listPr0oduct.find((el)=>{
                return el === product
            })
            if (checkProduct){
                resolve(checkProduct)
            } else {
                reject(new Error('Daftar kopi tidak ada'))
            }
        }, 2000)
    })
}

checkProduct('Latte')
.then((param)=>console.log(`terdapat produk ${param} di menu`))
.catch((e)=>console.log(e.message))



// Program 2
const checkPrice = (product) => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const listPr0oduct = ['Latte', 'Arabica', 'Robusta', 'Americanno']
            let coffe = listPr0oduct.find((el)=>{
                return el === product
            })
            switch (coffe) {
                case 'Latte':
                    resolve(coffe)
                    console.log(`Harga ${coffe} adalah 10.000`)
                    break;
                case 'Arabica':
                    resolve(coffe)
                    console.log(`Harga ${coffe} adalah 12.000`)
                    break;
                case 'Robusta':
                    resolve(coffe)
                    console.log(`Harga ${coffe} adalah 5.000`)
                    break;
                case 'Americanno':
                    resolve(coffe)
                    console.log(`Harga ${coffe} adalah 5.000`)
                    break;
                default:
                    reject ( new Error (`Tidak ada produk dan harga ${product} didaftar menu`));
                    break;
            }
        }, 6000)
    })
}

checkPrice('Latte')
.then((product)=>console.log(`Pesananmu adalah kopi ${product}`)).catch((e)=>console.log(e.message))

