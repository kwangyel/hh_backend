import database from '../src/models';

class buildingService{

    static async create(data){
        try{
            const item =await database.Building.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve building with id
    static async retrieve(id){
        try{
            const item = await database.Building.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    // get building with structureid
    static async retrieve_sid(sid){
        try{
            const item = await database.Building.findOne({
                where:{structure_id:Number(sid)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Building.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            console.log(error)
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Building.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default buildingService;