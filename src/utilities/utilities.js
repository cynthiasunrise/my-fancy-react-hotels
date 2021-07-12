/**
 * formatearFecha
 * @param {*} fecha: a Date() object
 * @returns: the input type date's format "yyyy-mm-dd"
 */
export const formatFromDateToInput = (fecha) => {
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  return `${año}-${String(mes).padStart(2, '0')}-${String(dia).padStart(
    2,
    '0'
  )}`;
};

export const setFechaInicial = (initialValue) => {
  const hoy = new Date();
  let fechaInicial =
    initialValue === 'mañana' ? new Date(hoy.getTime() + 86400000) : hoy;
  fechaInicial = formatFromDateToInput(fechaInicial);
  return fechaInicial;
};

/**
 * formatFromInputToDate
 * @param {*} fecha: the input type date's format "yyyy-mm-dd"
 * @returns: a Date object
 */
export const formatFromInputToDate = (fecha) => {
  fecha = fecha.split('-');

  const dia = fecha[2];
  const mes = fecha[1];
  const año = fecha[0];

  return new Date(`${mes}/${dia}/${año}`);
};

/**
 * getTomorrow
 * @param {*} fechaIngreso: the input type date's format "yyyy-mm-dd"
 * @returns: the input type date's format "yyyy-mm-dd" with the value of tomorrow
 */
export const getTomorrow = (fechaIngreso) => {
  return formatFromDateToInput(
    new Date(formatFromInputToDate(fechaIngreso).getTime() + 86400000)
  );
};

/**
 *
 * @param {*} fechaIngreso: the input type date's format "yyyy-mm-dd"
 * @param {*} fechaSalida the input type date's format "yyyy-mm-dd"
 * @returns Boolean for dates validation
 */
export const validarFechas = (fechaIngreso, fechaSalida) => {
  return formatFromInputToDate(fechaSalida).getTime() <
    formatFromInputToDate(fechaIngreso).getTime()
    ? false
    : true;
};

/**
 * getLongFormatDate
 * @param {*} date: an unix time or a string value mm/dd/yyyy
 * @returns: a long date format like: "domingo, 11 de julio de 2021"
 */
export const getLongFormatDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('es-ES', options);
};
