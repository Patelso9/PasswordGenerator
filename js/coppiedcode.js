// define characters
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

// define elements (need to be created as popup window)
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

// button reading code
submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}