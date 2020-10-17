const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: 9999999999,
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
        images: [
            "https://images.unsplash.com/photo-1602636403821-e43d50123cb7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    });

    // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;");
    console.log(selectedOrphanages);

    // Consultar somente um orfanaro pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1";');
    console.log(orphanage);

    // Deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
})
