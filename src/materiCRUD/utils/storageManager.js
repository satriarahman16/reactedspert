// Example data structure 
// const course = [
//     {
//         id:1,
//         name:"Cooking Course",
//         description:"Cooking Course Description"
//     },
//     {
//         id:2,
//         name:"Cooking Course 1",
//         description:"Cooking Course Description 1"
//     },
// ]

// data yang akan kita simpan adalah didalam value, paramter value ini bisa lebih dari 1 bisa berupa objek

// perlu merubah data ke string dulu


// fungsi untuk menyimpan data berupa value sebagai parameter, nah value ini berupa objek
// objek memiliki properti seperi id, name, description
// batasan di local storage itu hanya bisa menyimpan data berupa string.. 
// tadi kan objek jadi perlu diubah dulu ke string
// jadi kita perlu mengubah parameternya ke string dengan JSON.stringify
// jika sudah jadi string kita tinggal simpan ke dalam local storage ke setItem 
// dan properti set item ini sudah didefinisikan oleh browser/javascript jadi kita tinggal makai
// local storage ini memiliki 2 parameter yakni key dan value
// key ini untuk mendapatkan datanya 
// satu key hanya untuk satu nilai
// supaya menghindari typo, key nya bisa kita definiskan
// value harus string tidak boleh objek

const KeyName = 'ReactJSTen'


const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(KeyName, valueToString)
};


const getItem = () => {
    const data = localStorage.getItem(KeyName)
    // ada dua kemungkinan yakni apakah kita sudah menyimpan data atau belum sehingga jika data tidak ada 
    // kita bisa memastikan tidak ada yang error jika datanya tidak ada 
    // sebelumnya data berupa string jadi data yang kita ambil perlu mengembalikan wujudnya semula ke objek
    if(data){
        return JSON.parse(data)
    }
    return null;
}

const storageManager = {
    get:getItem,
    set:setItem,
}

// supaya bisa dipakai oleh fungsi lain perlu kita export
export default storageManager