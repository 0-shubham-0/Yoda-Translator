var intxt=document.querySelector("#txt-input");
var button=document.querySelector("#butt");
var outtxt=document.querySelector("#txt-output");
var api="https://api.funtranslations.com/translate/yoda.json?text=";
function getFetch(input){
    return api+input;
}
function error(error){
    console.log("Error",error);
    fetch(api+intxt.value)
    .then(response => response.json())
    .then(json => {
        var output = json.error.message;
        outtxt.innerText=output;
        console.log(json);
    })
    .catch(error)
}
function submitbutton(){
    console.log(intxt.value);
    fetch(api+intxt.value)
    .then(response => response.json())
    .then(json => {
        var output = json.contents.translated;
        outtxt.innerText=output;
        console.log(json);
    })
    .catch(error)
};
button.addEventListener("click",submitbutton);