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
function afficheFiltre(url,selected){//selected est un bool
        if(selected){//si selected est true j'execute
            $.getJSON(url,function(data){//création de la requete http par get avec un retour json parsé en objet js
                $('.table-dark tbody').empty();//ici je vide mon tbody pour eviter les duplication
                $('#modele').empty();// je vide le selecte pour eviter les duplication
                $("<option value=''>").html('--selectionner un model de voiture--').appendTo('#modele');//je crée une balise option sans valeur pour
                // qu'il ai pas de valeur selection d'unne valeur par defaut
                $.each(data,function(key,value){//ici j'effectue un forheach pour creer mes option et mes select, en parcourant mes objet js parsés
                    $('#modele').append($("<option value='"+value.model+"'>").html(value.model));//ici je met mes modeles de voiture dans le select
                    $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');//ici je met les marques et leur models dans mon tbodys
                })
            })
        }else{//dans le cas ou selected est à false, j'excute ce code
            $.getJSON('tableau.php',function(data){//création de la requete http par get avec un retour json parsé en objet js
                $.each(data,function(key,value){
                $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');
                })
            })
        }
}