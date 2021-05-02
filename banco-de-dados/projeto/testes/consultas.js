const db = require('../config/db')

//db('perfis')
//    .then(res => res.map(p => p.nome))
//    .then(nome => console.log(nome))
//    .finally(() => db.destroy())

//db('perfis').select('nome', 'id')
//    .then(res => console.log(res))
//    .finally(() => db.destroy())

//db.select('nome', 'id')
//    .from('perfis')
//    .limit(4)
//    .offset(1)
//    .then(res => console.log(res))
//    .finally(() => db.destroy())

db('perfis')
    //.where({id: 2})
    //busca pelo determinado trecho entre %%
    .where('nome', 'like', '%m%')
    //.first()
    .whereIn('id', [1, 2, 3])
    .then(res => console.log(res))
    .finally(() => db.destroy())