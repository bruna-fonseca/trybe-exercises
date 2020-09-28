const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função com 3 parametros (obj, chave e valor) p/ add o turno "manhã"
const add = (obj, key, value) => {
  obj[key] = value;
};

// Crie uma função para listar as keys de um objeto.
const keyArr = (obj) => Object.keys(obj);
