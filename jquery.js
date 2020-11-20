$('#jsstyle').click(function(){
    $('#text').css('color','red');
});


$('#values-btn').click(function(){
   var href=$('#ggl').attr('href');
   var hreflang=$('#ggl').attr('hreflang');
   var rel=$('#ggl').attr('rel');
   var target=$('#ggl').attr('target');
   var type=$('#ggl').attr('type');
   console.log(href);
   console.log(hreflang);
   console.log(rel);
   console.log(target);
   console.log(type);
});

$('#myTable').click(function(e){
    cible=e.target;
    console.log(cible);
});