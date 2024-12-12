const sobreNos = document.querySelector(".sobreNos");
const janela = document.getElementById('janela');
const forajanela = document.querySelector(".caixatexto");
janela.style.display = "none";

sobreNos.addEventListener('click', () =>{
    janela.style.display =
    janela.style.display = "flex";
});

janela.addEventListener('click', ()=> {
    janela.style.display =
    janela.style.display = "none";
});
    
