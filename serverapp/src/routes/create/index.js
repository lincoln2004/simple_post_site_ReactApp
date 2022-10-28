const { PostService: service } = require('../../service/db')


const mapBodyFilter = (el) => {

    if (el[1] && typeof el[1] == 'string') {
        return el
    }

    return false
}


const create = async (req, res) => {

    let body = req.body


    body = [['title', body.title], ['author', body.author], ['text', body.text]].map(mapBodyFilter).filter(el => el)
    

    if(body.length < 3){
       res.json({error: "fields empty or it isn't of type string"})
    }

    body = Object.fromEntries(body) || null

    if (body) {

        let serv = new service()

        try {
            await serv.create(body)
        } catch (e) {
            console.log(e)

            res.json({error: 'error on creation of post'})
        }
    }

    res.end()
}

module.exports = [ [create, 'post','/createpost']]