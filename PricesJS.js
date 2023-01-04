// Stephanie

//Get all values

let sendBtn = document.getElementById('send');
let form = document.getElementById('form');

//Form refresh state

form.addEventListener('submit', (e) => {
    e.preventDefault();
});


//Now Start SendBtn

sendBtn.addEventListener('click', (e) => {
    let regularpetrol = document.getElementById('regularpetrol');  
    let diesel = document.getElementById('diesel');
    let higradepetrol = document.getElementById('higradepetrol');
   

    //Set values and LocalStorage
    
    regularpetrol = regularpetrol.value;
    localStorage.setItem('regularpetrol', regularpetrol);

    diesel = diesel.value;
    localStorage.setItem('diesel', diesel);

    higradepetrol = higradepetrol.value;
    localStorage.setItem('higradepetrol', higradepetrol);
    
    window.location.assign("pricessuccess.html") 

});

