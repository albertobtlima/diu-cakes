/* TRANSIÇÃO DE TELA */
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

/* SLIDES */
let count = 1
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextImage();
}, 4000)
function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
