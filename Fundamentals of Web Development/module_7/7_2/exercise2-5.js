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

// Crie uma função para mostrar o tamanho de um objeto
const objLength = obj => Object.keys(obj).length;

// Crie uma função para listar os valores de um objeto.
const objValues = obj => Object.values(obj);

// Crie um objeto de nome allLessons, 
// que deve agrupar todas as aulas através do Object.assign.
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); 
