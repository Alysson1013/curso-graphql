const { usuarios, proximoId, perfis } = require('../../data/db')

function indiceUsuario(filtro){
    if (!filtro) return -1
    const {id, email} = filtro
    if (id){
        return usuarios
            .findIndex(u => u.id === id)
    } else if (email) {
        return usuarios
            .findIndex(u => u.email === email)
    }
    return -1
}

function indicePerfis(filtro){
    if (!filtro) return -1
    const { id } = filtro
    if (id){
        return perfis
            .findIndex(p => p.id === id)
    } 
    return -1
}

module.exports = {
    novoUsuario(_, { dados }){
        const emailExistente = usuarios
            .some(u => u.email === dados.email)

        if (emailExistente) throw new Error("Email cadastrado")

        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },
    novoPerfil(_,  { dados }){
        const nomeExistente = perfis
            .some(p => p.email === dados.nome)

        if (nomeExistente) throw new Error("Perfil já cadastrado")
        const novo = {
            id: proximoId(),
            ...dados,
        }

        perfis.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }){
        const i = indiceUsuario(filtro)
        if (i < 0) return null
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    excluirPerfil(_, { filtro }){
        const i = indicePerfis(filtro)
        if (i < 0) return null
        const excluidos = perfis.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarUsuario(_, { filtro, dados }){
        const i = indiceUsuario(filtro)
        if (i < 0) return null

        usuarios[i].nome = dados.nome
        usuarios[i].email = dados.email
        if (dados.idade) usuarios[i].idade = dados .idade
        return usuarios[i]
    },
    alterarPerfil(_, {filtro, dados}){
        const i = indicePerfis(filtro)
        if (i < 0) return null
        
        perfis[i].nome = dados.nome 
        return perfis[i]
    }
}