var atributElt={
    'id':'divTP1',
    'style':'display:none;'
};
var maDiv=createAndappendElt(parent,'div', atributElt);
var atributElt2={
    'href':'https://fr.wikipedia.org/wiki/World_Wide_Web',
    'textContent':'World Wide Web',
    'title':'World Wide Web',
    'id':'lien'
};
var monLien=createAndappendElt(parent,'a',atributElt2);
var atributElt2={
    'href':'https://fr.wikipedia.org/wiki/Organisme_de_normalisation',
    'textContent':'organisme de standardisation',
    'title':'organisme de normalisation',
};
var monLien=createAndappendElt(parent,'a',atributElt2);


function createAndappendElt(parent,tagName,atributElt){
    var parent=document.body;
    var elt=document.createElement(tagName);
        for([key,value] of Object.entries(atributElt)){
            elt[key]=value;
        }
        parent.appendChild(elt);
}

console.log(parent);




maDiv2=Objet('div');
maDiv2.id='divPT';

monForm=Objet('form');
monForm.enctype='multipart/form-data';
monForm.method='post';
monForm.action='upload.php';

fild=Objet('fieldset');



maDiv2.appendChild(monForm);
monForm.appendChild(fild);

legend=Objet('legend');
legend.textContent='uploader une image';

fild.appendChild(legend);
maDiv3=Objet('div');
maDiv3.style='text-align:center';
fild.insertAdjacentElement('beforeend',maDiv3);
submit=Objet('input');
submit.type='submit';
submit.value='envoyer';
maDiv3.appendChild(submit);

maDiv3.insertBefore(br(),submit);
input=Objet('input');
input.type='file';
input.name='inputUpload';
input.id='inputUpload';
maDiv3.insertAdjacentElement('afterbegin',input);
label=Objet('label');
label.for='inputUpload';
label.textContent='uploader une image';
maDiv3.insertBefore(label,input);
console.log(maDiv2);

var body=document.body;
body.insertAdjacentElement('beforeend',maDiv2);

// functions

function creerLien(nameElement,prop,texte,prop, parent,element2){
    nameElement.href=prop;
    nameElement.textContent=texte;
    nameElement.title=prop;
    positionneElement(parent,element2);
}
function positionneElement(parent,element2){
        parent.insertBefore(element2,parent.firstChild);
}

function textDiv(x)
{
    var strong=document.createElement('strong');
    strong.textContent=x;
    return strong;
}
function text(x){
    var p1=document.createTextNode(x);
    return p1;
}

function br(){
    return document.createElement('br');
}

function Objet(y){
    var x=document.createElement(y);
    return x;
}

var bouton=document.getElementById('bouton');
bouton.addEventListener('click', function () {
    if (document.getElementById('divPT').style.display == 'none') {
         document.getElementById('divPT').style.display = 'block';
    } else {
        document.getElementById('divPT').style.display = 'none';
    }
});
  
var coche=document.getElementById('coche');
var decoche=document.getElementById('decoche');
var input=document.getElementById('inputCheck');
console.log(input);
coche.addEventListener('click',function(){
    for(i=0;i<input.length;i++){
        if(input[i].checked==false){
            input[i].checked=true;
        }
    }
})

decoche.addEventListener('click',function(){
    for(i=0;i<input.length;i++){
        if(input[i].checked==true){
            input[i].checked=false;
        }
    }
})