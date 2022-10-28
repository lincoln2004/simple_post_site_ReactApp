const { Router} = require('express')

const list = require('./list/index')
const create = require('./create/index')

const router = Router()

let routes = [].concat(list, create)

routes.forEach(e => {


    if(e[1] == 'get'){

        router.get(e[2], e[0])
    }
    else if(e[1] == 'post'){

        router.post(e[2], e[0])
    }
})

module.exports = router