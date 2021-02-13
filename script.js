const modalButton = document.querySelectorAll('.modal-button-item p'),
    modalItem = document.querySelectorAll('.modal-item');    
modalButton.forEach((item, i) => {
    item.addEventListener('click', (e) => {
       
        const num = item.getAttribute('data-num');
        modalItem[num].classList.add('active');
       
    });
    

   
});
