/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso 
e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Gabigol",
    noteAv1: 8.0,
    noteAv2: 5.5,
  },
  {
    name: "Rodilindo",
    noteAv1: 10,
    noteAv2: 10,
  },
  {
    name: "ViniJr",
    noteAv1: 9.5,
    noteAv2: 8.0,
  },
  {
    name: "PaqueTop",
    noteAv1: 7.5,
    noteAv2: 8.5,
  },
  {
    name: "Arrascareta",
    noteAv1: 9.5,
    noteAv2: 8.0,
  },
  {
    name: "Gerson",
    noteAv1: 7.5,
    noteAv2: 8.0,
  },
  {
    name: "Pedro Queixada",
    noteAv1: 4.5,
    noteAv2: 9.0,
  },
]

const calcMedia = (note1, note2) => ((note1 + note2) / 2).toFixed(1);

let printStudentMedia = (student) => {
  let media = calcMedia(student.noteAv1, student.noteAv2);
  let approve = media >= 7;


  if (approve) {
    return `${student.name}\nSua nota na Av1 foi de: ${student.noteAv1}\nSua nota na Av2 foi de: ${student.noteAv2}\nSua média é de: ${media} para um mínimo de 7.0\nParabéns, ${student.name}! Você foi aprovado(a)!`
  }
  else {
    return `${student.name}\nSua nota na Av1 foi de: ${student.noteAv1}\nSua nota na Av2 foi de: ${student.noteAv2}\nSua média é de: ${media} para um mínimo de 7.0\nQue triste, ${student.name}! Você foi reprovado, estude mais na próxima!`
  }
}

for(let student of students) {
  let resultMessage = printStudentMedia(student);
  alert(resultMessage);
}