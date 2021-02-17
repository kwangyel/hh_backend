import database from '../src/models';

class structureService{
    static async markComplete(bid){
        try{
            const str = database.Structure.findOne( { where: { id: bid} });
            if(str){
                const updatedstr = database.Structure.update(
                    {status:"COMPLETE"},
                    {where:{id:bid}}
                ) 
                return updatedstr
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async markProgress(bid){
        try{
            const str = database.Structure.findOne( { where: { id: bid} });
            if(str){
                const updatedstr = database.Structure.update(
                    {status:"PROGRESS"},
                    {where:{id:bid}}
                ) 
                return updatedstr
            }
            return null
        }catch(err){
            throw err
        }
    }
    static async getStructure(sid){
        try{
            const str = database.Structure.findOne({
                where:{id:Number(sid)}
            })
            return str
        }catch(err){
            throw err
        }
    }

    static async getStructureInZone(zoneid){
        try{
            const structures= database.Structure.findAll({
                where:{sub_zone_id: Number(zoneid)}
            })
            return structures 
        }catch(err){
            throw err
        }
    }

    static async createStructure(data){
        try{
            const building = await database.Structure.create(data)
            return building
        }catch(error){
            throw error
        }
    }

}
export default structureService;
