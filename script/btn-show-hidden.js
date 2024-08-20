const btnShowHid = document.querySelector('.show-hidden-btn')

btnShowHid.addEventListener('click', function (){
    let blockHiddenShow = document.querySelector('.recipes-hidden');
  
    if (btnShowHid.innerHTML === 'Показать еще'){
        btnShowHid.innerHTML = 'Скрыть'
        blockHiddenShow.style.display = 'flex';
    } else if  (btnShowHid.innerHTML === 'Скрыть') {
        btnShowHid.innerHTML = 'Показать еще'
        blockHiddenShow.style.display = 'none';
    }
})