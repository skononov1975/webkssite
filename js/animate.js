$(function () {

///////////////// Анімація при завантаженні
    let duration = 1000;
    $('.text').each (function (index) {
        
        $(this).delay(duration*index).animate ({'color': 'blue','font-size':'30px'}, 2000);
        $(this).show(2000, function() {
            $(this).delay(duration*index).css ('color','red');
        });
    
    });
    duration = 1000;
    $('.text').each (function (index) {
        
        $(this).delay(duration*index).animate ({'color':'blue','font-size':'18px'}, 2000);
        $(this).show(2000, function() {
            $(this).delay(duration*index).css ('color','black');
        });
    
    });

// подія потрапляння курсора миші на об’єкт
$('.text').mouseover(function(){
    let duration = 1000;
    $('.text').each (function (index) {
        
        $(this).delay(duration*index).animate ({'color': 'blue','font-size':'30px'}, 2000);
        $(this).show(2000, function() {
            $(this).delay(duration*index).css ('color','red');
        });
    
    });
    duration = 1000;
    $('.text').each (function (index) {
        
        $(this).delay(duration*index).animate ({'color':'blue','font-size':'18px'}, 2000);
        $(this).show(2000, function() {
            $(this).delay(duration*index).css ('color','black');
        });
    
    });
    
});

//Збільшення картинки 
    duration = 1000;
    $('.vtitle img').each (function (index) {
        
        $(this).delay(duration*index).animate ({'width': '700px'}, 2000);
    });

    duration = 1000;
    $('.vtitle img').each (function (index) {
        
        $(this).delay(duration*index).animate ({'width': '500px'}, 2000);
    
    });
// Збільшення заголовків
duration = 1000;
$('h1').each (function (index) {
    
    $(this).delay(duration*index).animate ({'font-size': '60px'}, 2000);
});

duration = 1000;
$('h1').each (function (index) {
    
    $(this).delay(duration*index).animate ({'font-size': '40px'}, 2000);
});


});