//limitacion de seleccion
function limitarSeleccionFluor(checkbox) {
    const checkboxes = document.querySelectorAll('.Fluor');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionOclusion(checkbox) {
    const checkboxes = document.querySelectorAll('.Oclusion');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionPeriodontal(checkbox) {
    const checkboxes = document.querySelectorAll('.Periodontal');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
////////////////////////////////////////////////////////
//verifica la selecciones y ve cuales se marcaron
function guardarDatos() {
    //verifica los numeros de los marcados
    // Recopilar los valores de los campos del formulario
    var placa = document.getElementById('placa').checked ? document.getElementById('placa').nextElementSibling.value : 0;
    var calculo = document.getElementById('calculo').checked ? document.getElementById('calculo').nextElementSibling.value : 0;
    var gingivitis = document.getElementById('gingivitis').checked ? document.getElementById('gingivitis').nextElementSibling.value : 0;
    // Recopilar los valores de los campos del formulario
    var periodontal = document.querySelector('input[name^="periodontitisL"]:checked, input[name^="periodontitisM"]:checked, input[name^="periodontitisA"]:checked');
    var oclusion = document.querySelector('input[name^="angleI"]:checked, input[name^="angleII"]:checked, input[name^="angleIII"]:checked');
    var fluor = document.querySelector('input[name^="leve"]:checked, input[name^="moderada"]:checked, input[name^="severa"]:checked');
    // Obtener los valores de los campos
    var c = document.getElementById("c").value;
    var p = document.getElementById("p").value;
    var o = document.getElementById("o").value;
    // Comprobar si se han completado todos los campos obligatorios
    if (!fluor || !oclusion || !periodontal || !c || !p || !o) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Detener la ejecución de la función si faltan campos obligatorios
    }
    var datos = {
        placa: placa.value,
        calculo: calculo.value,
        gingivitis: gingivitis.value,
        periodontal: periodontal.value,
        oclusion: oclusion.value,
        fluor: fluor.value,
        c: c.value,
        p: p.value,
        o: o.value
    };
    // Mostrar los datos recopilados en una alerta (puedes personalizar cómo se muestran los datos aquí)
    alert("Placa: " + placa + "\nCálculo: " + calculo + "\nGingivitis: " + gingivitis +
          "\nPeriodontal: " + periodontal.value + "\nOclusión: " + oclusion.value + 
          "\nFluor: " + fluor.value + "\nC: " + c + "\nP: " + p + "\nO: " + o);
    // Solo como ejemplo, mostrar los datos en la consola
    console.log("Datos del formulario:");
    console.log(datos);
    // Retorna false para evitar que el formulario se envíe normalmente
    //return false;
    return true;

}
////////////////////////////////////////////////////////
// Llamar a la función cuando el usuario hace clic en el botón de envío
/*document.getElementById("btn").addEventListener("click", function guardarDatos() {
    limitarSeleccionMovilidad();
    limitarSeleccionFluor();
    limitarSeleccionDentrifico();
    limitarSeleccionColutorios();
    limitarSeleccionPlaca();
    limitarSeleccionPeriodontal();
});*/
//verifica los numeros de los marcados
/*function guardarDatos() {
    // Recopilar los valores de los campos del formulario
    var claseI = document.getElementById('claseI').checked ? document.getElementById('claseI').nextElementSibling.value : 0;
    var claseII = document.getElementById('claseII').checked ? document.getElementById('claseII').nextElementSibling.value : 0;
    var claseIII = document.getElementById('claseIII').checked ? document.getElementById('claseIII').nextElementSibling.value : 0;
    var claseIV = document.getElementById('claseIV').checked ? document.getElementById('claseIV').nextElementSibling.value : 0;
    var claseV = document.getElementById('claseV').checked ? document.getElementById('claseV').nextElementSibling.value : 0;
    var claseVI = document.getElementById('claseVI').checked ? document.getElementById('claseVI').nextElementSibling.value : 0;

    // Mostrar mensaje de éxito
    alert('Datos guardados correctamente:\n\n' +
        'Clase I: ' + claseI + '\n' +
        'Clase II: ' + claseII + '\n' +
        'Clase III: ' + claseIII + '\n' +
        'Clase IV: ' + claseIV + '\n' +
        'Clase V: ' + claseV + '\n' +
        'Clase VI: ' + claseVI);

    return true;
}
document.getElementById('guardarBtn').addEventListener('click', guardarDatos);*/