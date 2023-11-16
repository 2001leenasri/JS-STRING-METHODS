function split() {
    let text = document.getElementById("text17").value;;
    const myArr = text.split("");
    
    text = "";
    for (let i = 0; i < myArr.length; i++) {
      text += myArr[i] + "<br>"
    }
    document.getElementById("ans13").innerHTML = text;
}

function val(){
    var str=document.getElementById('txt').value
    document.getElementById('ans').innerHTML= str.length
}

function myFunction() {
    let str = document.getElementById("text").value;
    document.getElementById("demo").innerHTML =
    str.toUpperCase();
  }

function lowercase() {
    let str = document.getElementById("text1").value;
    document.getElementById("ans1").innerHTML =
    str.toLowerCase();
}

function slice() {
    let str = document.getElementById("text2").value;
    var a =Number(document.getElementById("text2.1").value)
    document.getElementById("ans2").innerHTML =
    str.slice(a);
}

function substring() {
    let str = document.getElementById("text3").value;
    var a =Number(document.getElementById("text3.1").value)
    document.getElementById("ans3").innerHTML =
    str.substring(a);
}

function substr() {
    let str = document.getElementById("text4").value;
    var a =Number(document.getElementById("text4.1").value)
    document.getElementById("ans4").innerHTML =
    str.substr(a);
}

function concat() {
    let str1 = document.getElementById("text5").value;
    let str2 = document.getElementById("text6").value;
    document.getElementById("ans5").innerHTML =
    str1.concat(" ",str2);
}

function padstart() {
    let str = document.getElementById("text7").value;
    var a =Number(document.getElementById("text7.1").value)
    document.getElementById("ans6").innerHTML =
    str.padStart(a ,"0");
}

function padend() {
    let str = document.getElementById("text8").value;
    var a =Number(document.getElementById("text8.1").value)
    document.getElementById("ans7").innerHTML =
    str.padEnd(a ,"x");
}

function charat() {
    let str = document.getElementById("text9").value;
    var a =Number(document.getElementById("text9.1").value)
    document.getElementById("ans8").innerHTML =
    str.charAt(a);
}

function charcodeat() {
    let str1 = document.getElementById("text16").value;
    var a =Number(document.getElementById("text16.1").value)
    document.getElementById("ans12").innerHTML =
    str1.charCodeAt(a);
}

function trim() {
    let str1 = document.getElementById("text10").value;
    let str2 = document.getElementById("text11").value;
    document.getElementById("ans9").innerHTML =
    "Length str1 = " + str1.length + "<br>Length str2 = " + str2.length;
}

function trimstart() {
    let txt1 = document.getElementById("text12").value;
    let txt2 = document.getElementById("text13").value;
    document.getElementById("ans10").innerHTML =
    "Length txt1 = " + txt1.length + "<br>Length txt2 = " + txt2.length;
}

function trimend() {
    let text1 = document.getElementById("text14").value;
    let text2 = document.getElementById("text15").value;
    document.getElementById("ans11").innerHTML =
    "Length txt1 = " + text1.length + "<br>Length txt2 = " + text2.length;
}

function replace() {
    let text = document.getElementById("text18").value;
    let text1 = document.getElementById("text19").value;
    document.getElementById("ans14").innerHTML =
    text.replace(text1);
}
