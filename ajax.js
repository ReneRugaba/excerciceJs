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
//appel ajax fait losque la page est rechargé en affichant le tableau des voitres
let url='tableau.php';
afficheFiltre(url,false);
//appel ajax fait lorsque une marque est selectioné
$('#marque').on('change',function(e){
        const marque=$('#marque :selected').val();//ici je recupère la valeur de la voiture selectionnée
       if(marque){//condition pour afficher un tableau avec une seul marque de voiture
        let url='tableau.php?marque='+marque;
        afficheFiltre(url,true);
        
       }else{
        let url='tableau.php';
        afficheFiltre(url,false);
        
       }
})
 
$('#modele').on('change',function(e){
        const marque=$('#marque :selected').val();//ici je recupère la valeur de la voiture selectionnée
        const modele=$('#modele :selected').val();//ici je recupère la valeur du modele selectionné
       if(marque && modele){//condition pour afficher un tableau avec une seul marque de voiture et un modele selectionés
        let url='tableau.php?marque='+marque+'&modele='+modele;
        afficheFiltre(url,true);
       
       }else{
        let url='tableau.php';
        afficheFiltre(url,false);

       }
}) 

//fonction qui me permet de factoriser la requete http ajax vers le controleur php
function afficheFiltre(url,selected){
        if(selected){
            $.getJSON(url,function(data){
                $('.table-dark tbody').empty();
                $('#modele').empty();
                $("<option value=''>").html('--selectionner un model de voiture--').appendTo('#modele');
                $.each(data,function(key,value){
                    $('#modele').append($("<option value='"+value.model+"'>").html(value.model));
                    $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');
                })
            })
        }else{
            $.getJSON('tableau.php',function(data){
                $.each(data,function(key,value){
                $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');
                })
            })
        }
}