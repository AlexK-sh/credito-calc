/**
 * Calcula el valor disponible (ingresos menos egresos)
 * Si el resultado es negativo, retorna 0
 * @param {number} ingresos - Ingresos mensuales
 * @param {number} egresos - Egresos mensuales
 * @returns {number} Valor disponible
 */
function calcularDisponible(ingresos, egresos) {
    const disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible;
}

/**
 * Calcula la capacidad de pago (50% del monto disponible)
 * @param {number} montoDisponible - Monto disponible mensuales
 * @returns {number} Capacidad de pago
 */
function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

/**
 * Calcula el interés simple
 * Fórmula: plazoAnios * monto * (tasa / 100)
 * @param {number} monto - Monto del préstamo
 * @param {number} tasa - Tasa de interés anual
 * @param {number} plazoAnios - Plazo en años
 * @returns {number} Valor del interés a pagar
 */
function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

/**
 * Calcula el valor total a pagar
 * Suma: monto + interés + 100 USD (impuestos y SOLCA)
 * @param {number} monto - Monto del préstamo
 * @param {number} interes - Interés generado
 * @returns {number} Valor total a pagar
 */
function calcularTotalPagar(monto, interes) {
    return monto + interes + 100;
}

/**
 * Calcula la cuota mensual
 * Fórmula: total / (plazoAnios * 12)
 * @param {number} total - Valor total a pagar
 * @param {number} plazoAnios - Plazo en años
 * @returns {number} Cuota mensual
 */
function calcularCuotaMensual(total, plazoAnios) {
    const meses = plazoAnios * 12;
    return total / meses;
}

/**
 * Aprueba o rechaza el crédito
 * Retorna true si capacidad de pago >= cuota mensual
 * @param {number} capacidadPago - Capacidad de pago mensual del cliente
 * @param {number} cuotaMensual - Cuota mensual del préstamo
 * @returns {boolean} true si está aprobado, false si está rechazado
 */
function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago >= cuotaMensual;
}
