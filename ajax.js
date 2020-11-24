$('#hello').on('click',function(){
    $.ajax('hello.php',
    {
        success:function(data){
            let content=$('<h1>').html(data);
            console.log(content);
            let rendu=$('body').append(content);
            console.log(rendu);
        },
        error:function(){

        }
    }
    )
})

$("#option").on('click', function(){
    $.ajax('option.html',{
        success:function(data){
            $('#fruits').append(data).val();
        }
    })
})

$('.table-dark tbody').load('tableau.php');
$('#marque').on('change',function(e){
        let marque=$('#marque :selected').val();
       if(marque){
        $('#modele').load('tableau.php?marque='+marque);
        $('.table-dark tbody').load('tableau.php?affiche=tableau&marque='+marque);
       }else{
        $('#modele').load('tableau.php?marque=');
        $('.table-dark tbody').load('tableau.php');
       }
})
 
$('#modele').on('change',function(e){
        const marque=$('#marque :selected').val();
        const modele=$('#modele :selected').val();
       if(marque && modele){
        $('#modele').load('tableau.php?marque='+marque+'&modele='+modele);
        $('.table-dark tbody').load('tableau.php?affiche=tableau&marque='+marque+'&modele='+modele);
       }else{
        $('#modele').load('tableau.php?marque=');
        $('.table-dark tbody').load('tableau.php');
       }
})