
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const parqueadero = document.getElementById('parqueadero').value;
        const hora = document.getElementById('hora').value;
        
        alert(`Has reservado el parqueadero ${parqueadero} a las ${hora}.`);
        
    });
