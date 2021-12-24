function editor(){
    window.location.href = "./index.html";
}

function comunidade(){
    window.location.href = "./comunidade.html";
}

function ReturnColor(c){
    var c = document.getElementById("color").value;
    let codeEditor = document.getElementById('code__editor');
    codeEditor.style.backgroundColor = c   
}
