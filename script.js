function setEditor(e){
    // console.log(e.target.textContent)
    // document.querySelector("#editor").value+=e.target.textContent
    // old method
    editor.value+=e.target.textContent
}
function getResult(){
    editor.value=eval((editor.value))
}
function clearEditor(){
    editor.value=""
}
function deleteLast(){
    editor.value=editor.value.slice(0,-1)
}