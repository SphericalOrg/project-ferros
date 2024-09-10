document.getElementById('contacto-summon').onclick = function(event) {
    event.preventDefault();
    document.getElementById('contacto').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('contacto').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contacto')) {
        document.getElementById('contacto').style.display = 'none';
    }
}