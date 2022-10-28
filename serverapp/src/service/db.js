const { Sequelize, Model, DataTypes: types } = require('sequelize')


class Post extends Model {}


Post.init({

    id: { 
        type: types.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    author:{
        type: types.STRING,
        allowNull: false,
    },
    title: {
        type: types.STRING,
        allowNull: false,
    },
    text: {
        type: types.STRING,
        allowNull: false,
    },
},

{
    sequelize: new Sequelize({ dialect: 'sqlite', storage: './src/service/store/database.sqlite3'}),
    createdAt: 'createdDate',
    updatedAt: false,
    freezeTableName: true,
})


class PostService {

    #model

    constructor(){

        this.#model = Post
    }

    async find(id) {

        await this.#syncTable()

        if(id){

            return await this.#model.findByPk(id)
        }
        else if (id == null){
            return null
        }
        
        return await this.#model.findAll()

    }

    async create(data){

        await this.#syncTable()

       if(data){

          let valid_data = { title: data.title || null, author: data.author || null, text: data.text || null}

          if(!valid_data && Object.values(valid_data).includes(null || undefined)){
            return
          }

          try {

            await this.#model.create({ title: valid_data.title, author: valid_data.author, text: valid_data.text})
          }
          catch(e){

            console.error(e)
            return e
          }
       }
    }

    async #syncTable(){

        try{
            await this.#model.sync()
        }
        catch(e){
            console.log(e)
        }
    }
}

module.exports = { PostService}