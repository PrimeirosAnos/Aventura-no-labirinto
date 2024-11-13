const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button =>{
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.getattribute('data-proximo');

        atual.classList.remove('ativo');
        Document.getElementbyId(proximopasso).classList.add('ativo');
        
    })

}