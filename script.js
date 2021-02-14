const modalButton = document.querySelectorAll('.modal-button-item p'),
    modalItem = document.querySelectorAll('.modal-item'),
    buttonClose = document.querySelectorAll('.close-modal'),
    backgroundModal = document.querySelector('.backgraund-modal');
    
function closeModal(index) {    
        modalItem[index].classList.remove('active');
        backgroundModal.classList.remove('active');    
}        
modalButton.forEach(item => {
    item.addEventListener('click', () => {       
        const num = item.getAttribute('data-num');
        modalItem[num].classList.add('active');
        backgroundModal.classList.add('active');
        document.body.addEventListener('click', (e) => {            
            if(e.target == backgroundModal) {
                closeModal(num);
            }
        }); 
    });    
});
buttonClose.forEach((item, i) => {
    item.addEventListener('click', () => {
        closeModal(i);
    });
});
