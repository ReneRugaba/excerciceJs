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