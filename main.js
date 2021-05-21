function save() {

    var name = document.getElementById('name').value;

    localStorage.setItem('name', name);

 
}


function check() {

    var getName = localStorage.getItem('name');
    var form = document.getElementById('form');
    var unsubscribe = document.getElementById('unsubscribe');

    if (getName !== "") {

        form.style.display = "none";
        unsubscribe.style.display = '';
       
    } 
}


function disabled() {

    var submit = document.getElementById('submit').disabled = true;

}

function enabled() {

    var submit = document.getElementById('submit').disabled = false;

}

function hello (){
    var getName = localStorage.getItem('name');

    alert('hello ' + getName);
}

function unsubscribe () {

    localStorage.clear();
    var form = document.getElementById('form');
    var unsubscribe = document.getElementById('unsubscribe');
    form.style.display = '';
    unsubscribe.style.display = none;
}
