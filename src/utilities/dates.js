/**
 * toDate
 * @param {*} fecha: the input type date's format "yyyy-mm-dd"
 * @returns: a Date object
 */
export const toDate = (fecha) => {
  return new Date(`${fecha}T00:00:00`);
};

/**
 *
 * @param {*} fechaIngreso: the input type date's format "yyyy-mm-dd"
 * @param {*} fechaSalida the input type date's format "yyyy-mm-dd"
 * @returns Boolean for dates validation
 */
export const validarFechas = (fechaIngreso, fechaSalida) => {
  return toDate(fechaSalida).getTime() < toDate(fechaIngreso).getTime()
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
