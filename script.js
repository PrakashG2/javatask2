var fname = ["Prakash", "Venkit", "Selva", "Arun"]
function add() {

    var add = document.getElementById("input").value;
    console.log(add);
    fname.push(add);
    document.getElementById("out").innerHTML = fname;
    document.getElementsByName('display')[0].value = fname;
}
function bigining() {

    var addbigining = document.getElementById("input").value;
    fname.splice(0, 0, addbigining);
    document.getElementById("out").innerHTML = fname;
    document.getElementsByName('display')[0].value = fname;
}
function pop() {

    fname.pop();
    document.getElementById("out").innerHTML = fname;
    document.getElementsByName('display')[0].value = fname;
}
function shift() {

    fname.shift();
    document.getElementById("out").innerHTML = fname;
    document.getElementsByName('display')[0].value = fname;
}
function sort() {

    fname.sort();
    document.getElementById("out").innerHTML = fname;
    document.getElementsByName('display')[0].value = fname;
}
function forloop() {

    let print = "";
    for (let i = 0; i < fname.length; i++) {
        print += fname[i] + " ";
    }
    document.getElementsByName('display')[0].value = print;
    document.getElementById("out").innerHTML = print;

}
function foreach() {
    let print = "";
    fname.forEach(foreach);
    document.getElementsByName('display')[0].value = print;
    document.getElementById("out").innerHTML = print;
    function foreach(item) {
        print = print + item + " ";

    }
}
function forinloop() {
    let print = [];
    for (var i in fname) {
        print[i] = fname[i];
        document.getElementsByName('display')[0].value = print;
        document.getElementById("out").innerHTML = print;
    }
}
function foroff() {
    let print = ""
    for (var temp of fname)
        print = print + " " + temp;
    document.getElementsByName('display')[0].value = print;
    document.getElementById("out").innerHTML = print;
}
function print() {
    let String = fname.join(" ");
    document.getElementsByName('display')[0].value = string;
    document.getElementById("out").innerHTML = String;

}
function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementsByName('display')[0].value = (day + "/" + month + "/" + year);

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementsByName('display')[0].value = (day + "/" + month + "/" + year + " Time - " + h + ":" + m + ":" + s);
}



function registration() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("cpassword").value;

    console.log(name);

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert("NAME CAN'T BE EMPTY");
    }
    else if (!letters.test(name)) {
        alert('NAME CAN INCLUDE ONLY ALPHABETS');
    }
    else if (email == '') {
        alert("EMAIL CAN'T BE EMPTY");
    }
    else if (!filter.test(email)) {
        alert('ENTER A VALID EMAIL ADDRESS');
    }
    else if (uname == '') {
        alert("USER NAME CAN'T BE EMPTY");
    }
    else if (!letters.test(uname)) {
        alert('USER NAME CAN INCLUDE ONLY ALPHABETS');
    }
    else if (pwd == '') {
        alert('ENTER PASSWORD');
    }
    else if (document.getElementById("password").value.length < 6) {
        alert('PASSWORD MUST CONTAIN MINIMUM 6 CHARACTERS');
    }
    else if (document.getElementById("password").value.length > 12) {
        alert('MAX LENGTH OF PASSWORD IS 12 CHARACTERS');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('PASSWORD MUST INCLUDE    UPPERCASE-LOWERCASE-CHARACTER-NUMBER');
    }
    else if (cpwd == '') {
        alert('CONFIRM PASSWORD');
    }
    else if (pwd != cpwd) {
        alert('PASSWORD AND CONFIRM PASSWORD DONT MATCH');
    }
    else {
        alert('REGISTRATION SUCCESSFULL... REDIRECTING TO THE NEXT PAGE');
        // Redirecting to other page or webste code. 
        window.location = "http://127.0.0.1:5500/vote.html";
    }
}

function vote() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("email").value;
    var letters = /^[A-Za-z]+$/;
    var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if (fname == "") {
        alert("FIRST NAME CAN'T BE EMPTY");
    }
    else if (!letters.test(fname)) {
        alert('NAME CAN INCLUDE ONLY ALPHABETS');
    }
    else if (lname == '') {
        alert("LAST NAME CAN'T BE EMPTY");
    }
    else if (!letters.test(lname)) {
        alert('NAME CAN INCLUDE ONLY ALPHABETS');
    }
    else if (fname == lname) {
        alert("FIRST AND LAST NAME CAN'T BE SAME");
    }
    else if (!dob.match(dateRegex)) {
        alert("ENTER A VALID DATE FORMAT (mm/dd/yyyy)");
        return false;
    } else {
        var dobDate = new Date(dob);
        var todayDate = new Date();
        var age = todayDate.getFullYear() - dobDate.getFullYear();
        var m = todayDate.getMonth() - dobDate.getMonth();
        if (m < 0 || (m === 0 && todayDate.getDate() < dobDate.getDate())) {
            age--;
        }
        if (age >= 18) {
            alert(fname + " " + lname + " IS ELEGIBLE FOR VOTING THIS YEAR");
        } else {
            alert(fname + " " + lname + ", IS NOT ELEGIBLE TO VOTE THIS YEAR");
        }

    }


}





