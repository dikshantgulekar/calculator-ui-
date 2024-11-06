
var str = '';
// document.querySelector("#txt").value = '';
function get_val(currTag){
    // console.log(currTag);
    // console.log(currTag.innerText);
    str = str + currTag.innerText;
    // console.log(str);
    document.querySelector("#txt").value = str;

}

function set_ans(){
    if(str!=""){
        ans = eval(str);
        console.log(ans);
        document.querySelector("#txt").value = ans;
        // str = ans;
    }
}

function remove_val(){
    document.querySelector('.txt').value = '';
    str = '';
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let input = document.querySelector('.txt');
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  input.style.backgroundColor = 'white';
  input.style.color = "black";
    isDark = !isDark;
};