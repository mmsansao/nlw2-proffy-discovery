// Dados
const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação Física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
]

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

//Funcionalidades

function getSubject(subjectNumber) {
  const position = subjectNumber - 1
  return subjects[position]
}

// Agora é necessário converter horas em minutos
function convertHoursToMinutes(time) {
  const [hours, minutes] = time.split(':') //atribui o primiro elemento à hora e segunto à minuto
  return Number(60 * hours + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
}
