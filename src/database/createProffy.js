// as funcionalidades criadas aqui deverão ser exportadas
module.exports = async function (
  db,
  { proffyValue, classValue, classScheduleValues }
) {
  // Inserir dados na tabela proffys
  //await não precisa do .then(), mas precisa do async na frente da função
  const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

  // Recuperar o id do proffy
  const proffy_id = insertedProffy.lastID

  // Inserir dados na tabela classes
  const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES(
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
  `)

  // Recuperar o id da classe
  const class_id = insertedClass.lastID

  // Inserir dados na tabela class_schedule, mas esses valores são arrays então:
  const insertedAllClassSchedulesValues = classScheduleValues.map(
    classScheduleValue => {
      return db.run(`
        INSERT INTO class_schedule (
            class_id,
            weekday,
            time_from,
            time_to
        ) VALUES (
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
        );
      `)
    }
  )

  // Aqui vou executar os runs das class.schedules
  // Esperar que todas as iterações od insertedAllClassSchedulesValues terminem
  await Promise.all(insertedAllClassSchedulesValues)
}
