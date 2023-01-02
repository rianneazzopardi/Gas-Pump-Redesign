// Stephanie 

function hide(){
        var x = document.getElementById('hide1'); 
        var y = document.getElementById('hide2');
        var w = document.getElementById('pass');

        if (w.type === 'password'){
            w.type = "text";
            x.style.display='block';
            y.style.display='none';
        }else{
            w.type = "password";
            x.style.display='none';
            y.style.display='block';
        }
}

function log(){
   
    let userP = localStorage.getItem("password");
    let inpP = document.getElementById('pass').value;

    if(inpP == userP){
        window.location.assign("manager.html") 
        

    }
    else{
    document.getElementById('error').style.display='block';
    document.getElementById('error').innerHTML = "Incorrect Information";


}}


function log2(){
   
    let userP = localStorage.getItem("password");
    let inpP = document.getElementById('pass').value;

    if(inpP == userP){
        window.location.assign("manager.html") 
        

    }
    else{
    document.getElementById('error').style.display='block';
    document.getElementById('error').innerHTML = "Incorrect Information";


}}





