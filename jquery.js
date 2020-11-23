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




function changeCellule(ligne,colonne,contenuText){
    let tr=$('#myTable tr');
        tr.eq(ligne-1).children().eq(colonne-1).html(contenuText);
        
}

$('#bouton').click(function(){
    let colonne=$('.colonne').val();
    let ligne=$('.ligne').val();
    let contenuText=$('.content').val();
    const maxRow=3;
    const minRow=1;
    const maxCol=2;
    const minCol=1;
    if(ligne>=minRow & ligne<=maxRow & colonne >=minCol & colonne<=maxCol){
       changeCellule(ligne,colonne,contenuText);
    }else{
        alert('merci de mettre un num de col entre 0 et 3 et un num de ligne entre 0 et 4!!')
    }
});