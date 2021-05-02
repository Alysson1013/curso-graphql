exports.up =  function (knex) {
    return knex.schema.createTable('perfis', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(() => {
        return knex('perfis').insert([
            { nome: 'comum', rotulo: 'Comum' },
            { nome: 'admin', rotulo: 'Administrador' },
            { nome: 'master', rotulo: 'Master' },
        ])
    }).catch(err => console.log(err))
};

exports.down = function (knex) {
    return knex.schema.dropTable('perfis')
};

