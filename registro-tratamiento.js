/*function guardar() {
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var procedimientos = document.getElementById("procedimientos").value;
    var profesional = document.getElementById("profesional").value;
    var codigoPatologia = document.getElementById('codigoPatologia').value;
    var codigoTratamiento = document.getElementById("codigoTratamiento").value;
    var protocolo = document.getElementById("protocolo").value;
    var fecha = document.getElementById("fecha").value;
    // Validar que todos los campos estén completos
    if (id.trim() === '' || nombre.trim() === '' || procedimientos.trim() === '' || profesional.trim() === '' || codigoPatologia.trim() === '' || codigoTratamiento.trim() === '' || protocolo.trim() === '' || fecha.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Datos guardados");
    return true;
}*/
function guardar() {
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var procedimientos = document.getElementById("procedimientos").value;
    var profesional = document.getElementById("profesional").value;
    var codigoPatologia = document.getElementById("codigoPatologia").value;
    var codigoTratamiento = document.getElementById("codigoTratamiento").value;
    var protocolo = document.getElementById("protocolo").value;
    var fecha = document.getElementById("fecha").value;
    // Aquí puedes realizar alguna validación de los datos si es necesario
    if (id.trim() === '' || nombre.trim() === '' || procedimientos.trim() === '' || profesional.trim() === '' || codigoPatologia.trim() === '' || codigoTratamiento.trim() === '' || protocolo.trim() === '' || fecha.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // Crear un objeto con los datos del formulario
    var formData = {
        id: id,
        nombre: nombre,
        procedimientos: procedimientos,
        profesional: profesional,
        codigoPatologia: codigoPatologia,
        codigoTratamiento: codigoTratamiento,
        protocolo: protocolo,
        fecha: fecha
    };
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a través de AJAX a un servidor

    // Solo como ejemplo, mostrar los datos en la consola
    console.log("Datos del formulario:");
    console.log(formData);
    // Retorna false para evitar que el formulario se envíe normalmente
    return false;
}
