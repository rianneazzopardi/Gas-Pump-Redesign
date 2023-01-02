var obj = document.getElementById('partitioned');
var data;
//to fix this


function amount(){
    data = Number(document.getElementById("partitioned").value);
    //for testing
    // alert(data);
}

function amount(num){
    data = Number(document.getElementById("partitioned").value);
    //for testing
    // alert(data);
    window.location.href = "payment-type.html";
    var num = data;
    sessionStorage.setItem("amount", num);
}

function stopCarret() {
    if (obj.value.length > 2){
        setCaretPosition(obj, 2);
    }
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}












