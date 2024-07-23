// let panjang = 10
// let lebar = 5

// let area = panjang * lebar

// console.log(area);

// const looping = ((i)=>{
//     for (let index = 0; index < i; index++) {
//         console.log("*");
//     }
// })

// looping(5)
// looping(10)

// const numberCheck = ((number)=>{
//     if (number % 2 === 0) {
//         console.log("genap");
//     } else {
//         console.log("ganjil");
//     }
// })

// numberCheck(15)
// numberCheck(4)

document.title = "Changed website by JS"

function addClick() {
    let title = document.getElementById("titleinput")
    let year = document.getElementById("yearinput")
    let company = document.getElementById("companyinput")

    AddTableData(title.value, year.value, company.value)

    alert("Terima kasih sudah berkontribusi")
    title.value = ""
    year.value = ""
    company.value = ""
}

function AddTableData(title, year, company) {
    var table = document.getElementById("ach-table");

    var newrow = table.insertRow()

    var c1 = newrow.insertCell(0)
    var c2 = newrow.insertCell(1)
    var c3 = newrow.insertCell(2)

    c1.innerHTML = title
    c2.innerHTML = year
    c3.innerHTML = company 
}

function tesajah() {
    let time = new Date()
    console.log(time.getSeconds());
}

setInterval(tesajah, 1000)