/**
 * Función principal que calcula toda la información del simulador de crédito
 */
function calcular() {
    try {
        // Leer valores de ingresos y egresos
        const ingresos = parseFloat(document.getElementById('ingresos').value);
        const egresos = parseFloat(document.getElementById('egresos').value);

        // Validar que los valores sean números válidos
        if (isNaN(ingresos) || isNaN(egresos) || ingresos < 0 || egresos < 0) {
            alert('Por favor, ingresa valores válidos para ingresos y egresos');
            return;
        }

        // Calcular disponible
        const disponible = calcularDisponible(ingresos, egresos);
        document.getElementById('lblDisponibleValor').textContent = `USD ${disponible.toFixed(2)}`;

        // Calcular capacidad de pago
        const capacidadPago = calcularCapacidadPago(disponible);
        document.getElementById('lblCapacidadValor').textContent = `USD ${capacidadPago.toFixed(2)}`;

        // Leer valores para el interés simple
        const monto = parseFloat(document.getElementById('monto').value);
        const plazo = parseInt(document.getElementById('plazo').value);
        const tasa = parseFloat(document.getElementById('tasa').value);

        // Validar que los valores sean números válidos
        if (isNaN(monto) || isNaN(plazo) || isNaN(tasa) || monto < 0 || plazo < 1 || tasa < 0) {
            alert('Por favor, ingresa valores válidos para monto, plazo y tasa');
            return;
        }

        // Calcular interés simple
        const interes = calcularInteresSimple(monto, tasa, plazo);
        document.getElementById('lblInteresValor').textContent = `USD ${interes.toFixed(2)}`;

        // Calcular total a pagar
        const total = calcularTotalPagar(monto, interes);
        document.getElementById('lblTotalValor').textContent = `USD ${total.toFixed(2)}`;

        // Calcular cuota mensual
        const cuotaMensual = calcularCuotaMensual(total, plazo);
        document.getElementById('lblCuotaValor').textContent = `USD ${cuotaMensual.toFixed(2)}`;

        // Aprobar o rechazar crédito
        const creditoAprobado = aprobarCredito(capacidadPago, cuotaMensual);
        const estadoCredito = document.getElementById('lblEstadoCredito');
        
        if (creditoAprobado) {
            estadoCredito.textContent = 'CRÉDITO APROBADO';
            estadoCredito.className = 'estado-credito aprobado';
        } else {
            estadoCredito.textContent = 'CRÉDITO RECHAZADO';
            estadoCredito.className = 'estado-credito rechazado';
        }

    } catch (error) {
        console.error('Error en la función calcular:', error);
        alert('Ocurrió un error al calcular. Revisa la consola para más detalles.');
    }
}

/**
 * Limpia todos los campos y resultados del formulario
 */
function limpiarFormulario() {
    document.getElementById('ingresos').value = '';
    document.getElementById('egresos').value = '';
    document.getElementById('monto').value = '';
    document.getElementById('plazo').value = '';
    document.getElementById('tasa').value = '';

    document.getElementById('lblDisponibleValor').textContent = 'USD 0.00';
    document.getElementById('lblCapacidadValor').textContent = 'USD 0.00';
    document.getElementById('lblInteresValor').textContent = 'USD 0.00';
    document.getElementById('lblTotalValor').textContent = 'USD 0.00';
    document.getElementById('lblCuotaValor').textContent = 'USD 0.00';
    document.getElementById('lblEstadoCredito').textContent = '';
    document.getElementById('lblEstadoCredito').className = 'estado-credito';
}
