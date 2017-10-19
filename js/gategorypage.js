

    $('.category-content[data-link=second]').hide();  
    $('.category-content[data-link=third]').hide();  
    $('.category-content[data-link=fourth]').hide();  
    $('.category-content[data-link=fifth]').hide();  
    $('.category-content[data-link=sixth]').hide();  



$('.link').click(function() {
    $('.category-content').hide();       
    $('.category-content[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});
