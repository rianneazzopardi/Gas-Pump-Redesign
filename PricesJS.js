//Get All Value
let sendBtn = document.getElementById('send');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});


//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let regularpetrol = document.getElementById('regularpetrol'); // was name 
    let diesel = document.getElementById('diesel');
    // was email 
    let higradepetrol = document.getElementById('higradepetrol');
    // was message

    //Set Value And LocalStorage
    
    regularpetrol = regularpetrol.value;
    localStorage.setItem('regularpetrol', regularpetrol);

    diesel = diesel.value;
    localStorage.setItem('diesel', diesel);

    higradepetrol = higradepetrol.value;
    localStorage.setItem('higradepetrol', higradepetrol);
    
    window.location.assign("pricessuccess.html") 

});

