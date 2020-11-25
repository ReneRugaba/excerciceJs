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

$.getJSON('tableau.php',function(data){
    $.each(data,function(key,value){
        $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');
    })
});
$('#marque').on('change',function(e){
        const marque=$('#marque :selected').val();
       if(marque){
        $.getJSON('tableau.php?marque='+marque,function(data){
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
            $('.table-dark tbody').empty();
            $.each(data,function(key,value){
                $('<tr>').append($('<td>').html(value.marque),$('<td>').html(value.model)).appendTo('.table-dark tbody');
            })
        })
       }
})
 
$('#modele').on('change',function(e){
        const marque=$('#marque :selected').val();
        const modele=$('#modele :selected').val();
       if(marque && modele){
        $.getJSON('tableau.php?marque='+marque+'&modele='+modele,function(data){
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
}) 