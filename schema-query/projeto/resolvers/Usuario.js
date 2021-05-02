const {perfis} = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const sels = perfis
            .filter(p => parseInt(p.id) === parseInt(usuario.perfil_id))
        return sels ? sels[0] : null
    }
}