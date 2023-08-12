const alunos = [
    {
        nome: "Carlos",
        nota: 10
    },
    {
        nome: "Maria",
        nota: 10
    },
    {
        nome: "João",
        nota: 9.5
    },
    {
        nome: "Timóteo",
        nota: 5
    },
    {
        nome: "Tomas",
        nota: 3
    },
    {
        nome: "Penélope",
        nota: 8
    },
    {
        nome: 'Sandra',
        nota: 4
    }
]

const alunos_aprovados = alunos.filter((aluno)=>{
    return aluno.nota >= 6
})

console.log(alunos_aprovados);