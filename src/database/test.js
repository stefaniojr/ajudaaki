const Database = require('./db')
const createMonitor = require('./createMonitor')

Database.then(async (db) => {
    monitorValue = {
        name: "Stefânio Jr.",
        avatar: "https://avatars0.githubusercontent.com/u/52108997?s=460&u=1c2893ad23d13844d3ced5d17970dfed772c61ce&v=4",
        whatsapp: "40028922",
        frase: "Testando, testando...",
        bio: "Estudante de Engenharia da Computação pela UFES e desenvolvedor do Ajuda Aki. Fascinado por Matemática, Física e perdido entre planilhas e códigos. Cursei Cálculo II Com Pink Hellvira e fui aprovado com suados 5.0, logo, tenho altos conhecimentos nesse ramo.",
    }

    classValue = {
        subject: "1",
        cost: "0,00 - ATÉ QUE A VACA TUSSA!",

    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createMonitor(db, {monitorValue, classValue, classScheduleValues})

    const selectedMonitores = await db.all("SELECT * FROM monitores")
    //console.log(selectedMonitores)

    const selectClassesAndMonitores = await db.all(`
         SELECT classes.*, monitores.*
         FROM monitores
         JOIN classes ON (classes.monitor_id = monitores.id)
         WHERE classes.monitor_id = 1;
        `)
    // console.log(selectClassesAndMonitores)

    const selectClassesSchedules = await db.all(`
          SELECT class_schedule.*
          FROM class_schedule
          WHERE class_schedule.class_id = "1"
          AND class_schedule.weekday = "0"
          AND class_schedule.time_from <= "820"
          AND class_schedule.time_to > "1230"
      `)

    // console.log(selectClassesSchedules)
})