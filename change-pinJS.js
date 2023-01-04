// Stephanie 

function newv()
{
    let ninp = document.getElementById('new-p').value;
    let reninp = document.getElementById('re-new-p').value;

    if (ninp == reninp)
    {
        localStorage.setItem("password", ninp);
        localStorage.setItem("re-password", reninp);
        window.location.assign("passwordsuccess.html")
    }
    else
    {
        alert("Pins do not match")
    }
}


function hidea()
{
    var x = document.getElementById('hide1');
    var y = document.getElementById('hide2');   
    var w = document.getElementById('new-p');

    if (w.type === 'password')
    {
        w.type = "text";
        x.style.display='block';
        y.style.display='none';
    }
    else
    {
        w.type = "password";
        x.style.display='none';
        y.style.display='block';
    }
} 


function hideb()
{
    var x = document.getElementById('hide3');
    var y = document.getElementById('hide4');   
    var w = document.getElementById('re-new-p');

    if (w.type === 'password')
    {
        w.type = "text";
        x.style.display='block';
        y.style.display='none';
    }
    else
    {
        w.type = "password";
        x.style.display='none';
        y.style.display='block';
    }
} 

