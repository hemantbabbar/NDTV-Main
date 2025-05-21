var flag=0;
// document.addEventListener("DOMContentLoaded", () => {
// Search Clear

try{
var getClear = document.querySelector(".TpSrch_clr");
var getInput = document.querySelector(".TpSrch_inp");
var getSugest = document.querySelector(".TpSrch_sgst");
var getTpSrch = document.querySelector(".TpSrch_frm");

getInput.addEventListener("keypress", () => {
    getClear.classList.add("TpSrch_clr-on");
    getSugest.classList.add("TpSrch_sgst-on");
});
}catch(e){} 
function clearFields() {
    getInput.value = "";
    getClear.classList.remove("TpSrch_clr-on");
    getSugest.classList.remove("TpSrch_sgst-on");
     getBdy.classList.remove("Js_TpSrch-bdy");
}

getTpSrch.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.body.addEventListener('click', () => { 
    clearFields()
});

$('.TpSrch_inp').on('keyup click', function(e) {
    e.stopPropagation();
    $('body').addClass('Js_TpSrch-bdy');
     
});


 
 