const subjects = [
    "Programação II",
    "Programação III",
    "Estrutura de Dados I",
    "Cálculo I",
    "Cálculo II",
    "Cálculo III-A",
    "Cálculo III-B",
    "Álgebra Linear",
    "Circuitos Elétricos I",
    "Circuitos Elétricos II",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades

function getSubject(subjectNumber){
    const position = + subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour*60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}