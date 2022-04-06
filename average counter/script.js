const subjects = {
    common: ["figh",
        "thauheedh",
        "soruf"
    ],
    limee: ["riyaaliyath"],
    adhabee: ["thareeh"],
    idhaadhee: ["Ijthimaee"],
}
const run = (grade) => {
    let inp1 = undefined
    let inp2 = undefined
    let exeption = undefined
    switch (grade) {
        case 7:
            inp1 = "common";
            inp2 = "idhaadhee";
            exeption = ["soruf"];
            display1(inp1, inp2, exeption)
            break;
        case 8:
            inp1 = "common";
            inp2 = "idhaadhee";
            exeption = "";
            display1(inp1, inp2, exeption)
            break;
        case 10 - 1:
    }
}
var sublist = []
const display1 = (inp1, inp2, exeption) => {
    for (let i = 0; i < subjects[inp1].length; i++) {
        sublist.push(subjects[inp1][i]);
    }
    for (let i = 0; i < subjects[inp2].length; i++) {
        sublist.push(subjects[inp2][i]);
    }
    for (let i = 0; i < exeption.length; i++) {
        if (sublist.includes(exeption[i])) {
            sublist.splice(sublist.indexOf(exeption[i]), 1)
        }
    }
    var main_page = document.getElementById("rows")
    var colum1 = `<div class="row1">`
    var colum2 = `<div class="row2">`
    for (let i = 0; i < sublist.length; i++) {
        colum1 += `<div class='semi-block'><lable for=${sublist[i]}>${sublist[i]}:</lable><h3 id='error-massage${i}'></h3></div> `
        colum2 += `<input type='number' min = '0' max = '100' id='input${i}' >`
    }
    main_page.insertAdjacentHTML("beforeend", colum1 + `</div>`);
    main_page.insertAdjacentHTML("beforeend", colum2 + `</div>` + "<button onclick='culculate(sublist)'>submit</button>");
    document.querySelector('.dropdown').remove()
    document.querySelector('h1').remove()
    document.querySelector('.open-button').style.display = 'block';
}
const culculate = (sublist) => {
    var inps = []
    var nums = []
    for (var i = 0; i <= sublist.length - 1; i++) {
        inps[i] = (document.getElementById("input" + i).value)
        if (inps[i] === "") {
            document.querySelector('#error-massage' + i).insertAdjacentHTML("*Please enter a number here");
            document.querySelector('#error-massage' + i).style.color = "red";
            continue;
        }
        nums.push(parseInt(inps[i]))
    }
    console.log(parseFloat(nums.reduce((a, b) => a + b, 0) / sublist.length).toFixed(2))
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}