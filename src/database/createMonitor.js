module.exports = async function (db, { monitorValue, classValue, classScheduleValues }) {
    const insertedMonitor = await db.run(`
        INSERT INTO monitores (
            name,
            avatar,
            whatsapp,
            frase,
            bio
        ) VALUES (
            "${monitorValue.name}",
            "${monitorValue.avatar}",
            "${monitorValue.whatsapp}",
            "${monitorValue.frase}",
            "${monitorValue.bio}"
        );
    `)

    const monitor_id = insertedMonitor.lastID

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            monitor_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${monitor_id}"
        );
    
    `)

    const class_id = insertedClass.lastID

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
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
    })

    await Promise.all(insertedAllClassScheduleValues)

}