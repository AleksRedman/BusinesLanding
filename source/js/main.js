(function () {
    
    var openFormButton = document.querySelector('.form-section__button');
    
    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            form.open();
        });
    }
    
}());