(function () {
    
    var me          = {};
    var form        = document.querySelector('.modal-form');
    var closeButton = null;
    
    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }
    
    me.open = function () {
        form.classList.remove('is-hidden');
        
        closeButton = document.querySelector('.modal-form__exit');
        closeButton.addEventListener('click', onClose);
    };
    
    me.close = function () {
        form.classList.add('is-hidden');
    };
    
    window.form = me;
}());