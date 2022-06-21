const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

//then catch
cekHariKerja('sabtu')
.then((param1)=>console.log(param1))
.catch((e)=>console.log(e.message))
/*
    PENJELASAN: 

    1. pada penggunaan then catch diatas, akan mengeksekusi fungsi cekHariKerja terlebih dahulu.
    2. Pada method then, jika hasil eksekusi true dan value yang didapatkan adalah resolve promise,
        maka nilai inputan pada dateDay akan ditampilkan.
    3, Pada method catch, jika hasil eksekusi adalah false maka value yang didapatkan adalah error.
        Sehingga error tersebut akan dikirimkan kedalam method catch dan akan ditampilkan sebagai pesan
        error.
*/


//try cacth
async function cekHari(cb) {
    try {
        const hari = await cb
        console.log(hari)
    } catch (e) {
        console.log(e.message)
    }
}
cekHari(cekHariKerja('sabtu'))
/*
    PENJELASAN:

    1. Pertama akan dibuat fungsi baru yang akan mengelola try catch dengan menggunakan async dan await.
    2. Kemudian fungsi cekHariKerja akan dieksekusi didalam try, dan hasilnya akan dijadikan sebagai kembalian nilai fungsi tersebut.
        2.1 Jika hasil yang didaparkan adalah kondisi true, dimana nilai yang dikembalikan adalah resolve promise, maka nilai tersebut
        akan ditampilkan sesuai dengan hari yang diinputkan.
        2.2 Jika hasil yang didapatkan adalah false, maka nilai yang didapatkan adalah error. Nilai error tersebut akan dikirimkan kedalam
        kondisi catch, dimana error yang telah ditangkap akan ditampilkan sebagai pesan error apabila inputan tidak sesuai dengan dataDay.
*/