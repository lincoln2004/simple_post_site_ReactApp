
const { PostService: service} = require('../../service/db.js')

const listall = async (req, res) => {

    let serv = new service()

    
    res.json(await serv.find(false))
}

const find = async (req, res) => {

    let serv = new service()

    let pk = req.params.pk
    
    res.json(await serv.find( pk ? pk : null) || [])
}


module.exports = [ [listall, 'get', '/listpost'], [find, 'get', '/listpost/:pk']]