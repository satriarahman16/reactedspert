import storageManager from "./storageManager"

// file ini yakni service ini untuk menghubungkan antara storage manager dengan UI
// payload adalah data yang kita lewatkan

const addCourse = (payload) => {
    // cek apakah datanya kosong atau udah terisi
    const currItem = storageManager.get();
    if(currItem !== null){

        // ...currItem adalah spread Operator di aray yang berfungsi mengcopy 
        // semua data yang ada di array yang ada di currItem hasil pengambilan 
        // tadi dimasukkan di array yang baru kemudian di tambahkan data barunya yakni payload 
        const combinedItem = [...currItem, payload]
        // simpan di storage kita
        storageManager.set(combinedItem);
        } else {
        // kalau misalnya datanya belum ada sama sekali maka kita gk perlu gabung gabungin tapi langsung masukin saja
        storageManager.set([payload])
    }

    return{
        data: payload,
    }
}

const getCourses = () => {
    const result = storageManager.get();
    const response = {
        // resultnya gk null brrti kita kembalikan result tapi kalau kosong kita kembalikan ke array kosong
        data: result !== null ? result : [],
    }
    return response;
}
// supaya gk salah course mana yang diupdate kita perlu tambhkan penanda supaya data yang kita pilih tepat, penandanya pakai id
const updateCourse = (courseId, payload) => {
    // mengambil semua data
    const listCourses = storageManager.get();
    // mencari data mana yang memiliki course id yang sama
    const updateCourse = listCourses.map((item)=> {
        // item.id itu di dalam storage apakah sama dengan courseId
        if(item.id === courseId) {
            return {
                //spread operator , copy semua data yang ada pada item, lalu tindihkan dengan yang baru yakni payload
                ...item, 
                ...payload
            }
        }
        // jika data tidak sama maka kita tidak melakukan perubahan apapun
        return item
    })
    // masukkan ke dalam storage yg kita punya
    storageManager.set(updateCourse)
    return {
        data:payload
    }
} 

const deleteCourse = (courseId) => {
    const listCourses =storageManager.get();
    const newData = listCourses.filter((item) => item.id !== courseId)

    storageManager.set(newData)
}

// kalau misalnya key dan value sama maka bisa tulis sekali saja yakni addCourse tidak perlu addCourse:addCourse
const courseService = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse
}


export default courseService;