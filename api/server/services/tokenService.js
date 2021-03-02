import database from '../src/models'

class tokenService{

    static async getByService(service){
        try{
            const result = await database.Token.findOne({
                where: {service:service}
            })
            return result
        }catch(err){
            throw err
        }
    }

    static async create(data){
        try{
            const result = await database.Token.create(data)
            return result
        }catch(err){
            throw err
        }
    }

    static async delete(service){
        try{
            const result = await database.Token.destroy({where:{service:service}})
            return result
        }catch(err){
            throw err
        }
    }

}

export default tokenService; 
