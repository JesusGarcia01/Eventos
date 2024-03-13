// Evento clic
document.getElementById('click').addEventListener('click', function() {
    alert('Evento clic ocurrido.');
});

// Evento doble clic
document.getElementById('dblclick').addEventListener('dblclick', function() {
    alert('Evento doble clic ocurrido.');
});

// Evento mouse enter
document.getElementById('mousedetect').addEventListener('mouseenter', function() {
    alert('Mouse ha entrado en el botón.');
});

// Evento mouse leave
document.getElementById('mousedestect').addEventListener('mouseleave', function() {
    alert('Mouse ha salido del botón.');
});

// Evento scroll up
document.getElementById('container').addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        alert('Scroll Up');
    }
});

// Evento scroll down
document.getElementById('container').addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        alert('Scroll Down');
    }
});

// Ocultar botones
document.getElementById('hide-btn').addEventListener('click', function() {
    document.getElementById('scroll-btns').style.display = 'none';
    document.getElementById('hide-btns').style.display = 'block';
});
