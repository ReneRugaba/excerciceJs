
var maDiv=document.createElement('div');
maDiv.id='divTP1';
moLien1=lien('https://fr.wikipedia.org/wiki/Organisme_de_normalisation','organisme de transaction');
moLien2=lien('https://fr.wikipedia.org/wiki/World_Wide_Web','World Wide Web');

function lien(x,y){
    var moLien=document.createElement('a');
        moLien.href=x;
        moLien.textContent=y;
        return moLien;
}

maDiv.appendChild(moLien2);
maDiv.insertBefore(moLien1,maDiv.firstChild);

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

strong=textDiv('W3C');
strong2=textDiv('World Wide Web Consortium');
maDiv.insertBefore(strong,maDiv.firstChild);
maDiv.insertBefore(text(', est un '),maDiv.firstChild);
maDiv.insertBefore(strong2,maDiv.firstChild);
maDiv.insertBefore(text('Le'),maDiv.firstChild);
console.log(maDiv);
maDiv2=Objet('div');
maDiv2.id='divPT2';

function Objet(y){
    var x=document.createElement(y);
    return x;
}

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
function br(){
    return document.createElement('br');
}
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
