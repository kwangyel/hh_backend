import database from '../src/models';

class imageService{

    static async create(data){
        try{
            const item =await database.Image.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Image.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    // get all households with structureid
    static async retrieveSid(sid){
        try{
            const item = await database.Image.findAll({
                where:{structure_id:Number(sid)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Image.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Image.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default imageService;