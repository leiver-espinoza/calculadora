function presionar_tecla(n) {
    if (document.getElementById('Pantalla').value.length <= 10) {
        switch (n) {
            case "=":
                document.getElementById('status').value = "resultado";
                document.getElementById('Pantalla').value = eval(document.getElementById('formula').value);
                break;
            case "c":
                document.getElementById('Pantalla').value = "0";
                break;
            case "*":
                document.getElementById('Pantalla').value = document.getElementById('Pantalla').value + "x";
                document.getElementById('formula').value = document.getElementById('formula').value + "*";
                break;
            case "/":
                document.getElementById('Pantalla').value = document.getElementById('Pantalla').value + "÷";
                document.getElementById('formula').value = document.getElementById('formula').value + "/";
                break;
            default:
                if (document.getElementById('status').value == "resultado") {
                    document.getElementById('Pantalla').value = "0";
                    document.getElementById('status').value = "calculando";
                }
                if (document.getElementById('Pantalla').value == "0") {
                    document.getElementById('Pantalla').value = n;
                    document.getElementById('formula').value = n;
                } else {
                    document.getElementById('Pantalla').value = document.getElementById('Pantalla').value + n;
                    document.getElementById('formula').value = document.getElementById('formula').value + n;
                }
        }
    } else {
        alert("Cantidad máxima de dígitos alcanzada");
    }
}

function boton_inactivo() {
    alert('Este botón no está activado...');
}