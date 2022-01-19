import database from '../src/models';

class redBuildingService{
    //remark building as red
    static async remarkRed(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {status:"ACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    // DONE: Unmark as red building(change status to inactive)
    static async unmarkRed(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {status:"INACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async retrieveDzo(id){
        try{
            const item = database.Redbuilding.findAll({
                where: { dzo_id : id},
                include: 'cases'
            })
            return item 
        }catch(err){
            throw err
        }
    }

    //DONE : return all as cases
    static async retrieve(){
        try{
            const item = database.Redbuilding.findAll({
                include: 'cases'
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async findById (id){
        try{
            const item = database.Redbuilding.findOne({
                where:{id :Number(id)}
            })
            return item
        }catch(err){
            throw err
        }
    }

    static async findByStructureId(id){
        try{
            const item = database.Redbuilding.findOne({
                where:{structure_id:Number(id)}
            })
            return item
        }catch(err){
            throw err
        }
    }


    //DONE : update info for remarks and num of cases
    static async update(sid,data){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(data,{where:{structure_id:sid}}) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    //DONE: Mark as red building(create new case)
    static async create(data){
        try{
            const item = await database.Redbuilding.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    //Destory. Not used as of now
    static async delete(id){
        try{
            const item =await database.Redbuilding.destroy({
                where:{structure_id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default redBuildingService;
