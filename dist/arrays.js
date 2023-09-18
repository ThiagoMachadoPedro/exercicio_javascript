const alunos = [
  { nome: "Thiago Machado", nota: 10 },
  { nome: "Elias Silas", nota: 5.0 },
  { nome: "André Soares", nota: 6.0 },
  { nome: "Rodrigo Vaconcelo", nota: 6.5 },
  { nome: "Arthur Sarmento", nota: 4.9 },
];

const alunosAprovados =alunos => alunos.filter(alunos => alunos.nota >= 6);

const alunosAprovadosLista = alunosAprovados(alunos);


alunosAprovadosLista.forEach((aluno) =>
  console.log(`Aluno: ${aluno.nome}, Nota: ${aluno.nota}`)
);
