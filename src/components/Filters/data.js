export const paises = [
  {
    id: '1',
    label: 'Argentina',
  },
  {
    id: '2',
    label: 'Brasil',
  },
  {
    id: '3',
    label: 'Chile',
  },
  {
    id: '4',
    label: 'Uruguay',
  },
];

export const precios = [
  {
    id: '1',
    label: 'económico',
  },
  {
    id: '2',
    label: 'confort',
  },
  {
    id: '3',
    label: 'lujos',
  },
  {
    id: '4',
    label: 'magnífico',
  },
];
export const tamaños = [
  {
    id: '1',
    from: 1,
    to: 10,
    label: 'pequeño',
  },
  {
    id: '2',
    from: 11,
    to: 20,
    label: 'mediano',
  },
  {
    id: '3',
    from: 21,
    to: 5000,
    label: 'grande',
  },
];

export const getSelectAllLabel = (label) => {
  return label === 'Pais'
    ? 'todos los países'
    : label === 'Precio'
    ? 'cualquier precio'
    : label === 'Tamaño'
    ? 'cualquier tamaño'
    : 'Seleccione';
};

export const getPais = (id) => {
  return paises.find((pais) => pais.id === id);
};

export const getPrecio = (id) => {
  return precios.find((precio) => precio.id === id);
};

export const getTamaño = (id) => {
  return tamaños.find((tamaño) => tamaño.id === id);
};
