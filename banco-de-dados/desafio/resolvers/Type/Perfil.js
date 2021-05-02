const db = require('../../config/db')

module.exports = {
    async usuarios(perfil) {
        return db('usuarios')
            .join(
                'usuarios_perfis',
                'usuarios .id',
                'usuarios_perfis.perfil_id'
            )
            .where({ perfil_id: perfil.id})
    }
}