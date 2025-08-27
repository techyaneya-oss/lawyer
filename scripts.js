window.addEventListener('load', function() {
    const preloader = document.getElementById('loading');
    if (preloader) {
        // Додаємо клас для плавного зникнення
        preloader.classList.add('hidden');
        // Видаляємо елемент з DOM після завершення переходу (якщо потрібно)
        preloader.addEventListener('transitionend', function() {
            preloader.remove();
        });
    }
});



$(function() {
    $('.show-properties').bind('click', showProperties);
    $('.hide-properties').bind('click', hideProperties);
    $('.answer-show').bind('click', showAnswer);
    $('.answer-hide').bind('click', hideAnswer);
    $('.btn-order').bind('click', modalOpen);
    $('.close-modal').bind('click', modalClose);
    $('#nav-toggle').bind('click', showMobileNav);
    $('#close-mobile-naw').bind('click', hideMobileNav);

    hideProperties();
  });

  function showMobileNav(){
    $('#nav-menu').show();
    $('#nav-menu').css('display', 'flex');
    $('#close-mobile-naw').show();
    $('#nav-toggle').hide();
    
  }

  function hideMobileNav(){
    $('#nav-menu').hide();
    $('#close-mobile-naw').hide();
    $('#nav-toggle').show();
    
  }

  function showProperties(){
    $('#products').find('.properties-body').show();
    $('#products').find('.show-properties').hide();
    $('#products').find('.hide-properties').show();

  }

  function hideProperties(){
    $('#products').find('.properties-body').hide();
    $('#products').find('.hide-properties').hide();
    $('#products').find('.show-properties').show();
  }

  function showAnswer(){
    $(this).parents().siblings('.answer-text').show();
    $(this).hide();
    $(this).siblings('.answer-hide').show();

  }

  function hideAnswer(){
    $(this).parent().siblings('.answer-text').hide();
    $(this).hide();
    $(this).siblings('.answer-show').show();
  }


  function modalOpen(){
    $('#modal-order').show();
    
  }

  function modalClose(){
    $('#modal-order').hide();
    
  }