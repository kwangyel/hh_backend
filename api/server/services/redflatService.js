import database from '../src/models';

class redflatService{
    static async create(data){
        try{
            const item = await database.Redflat.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    //remark building as red
    static async markActive(id){
        try{
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(
                    {status:"ACTIVE"},
                    {where:{id:id}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    // DONE: Unmark as red building(change status to inactive)
    static async markInactive(id){
        try{
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(
                    {
                        status:"INACTIVE"
                    },
                    {where:{id:id}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async retrieveById(id){
        try{
            const item = database.Redflat.findOne({
                where: { id : id},
                include:[
                    {
                        model: database.Redmember,
                        as: 'members'
                    },
                    {
                        model: database.User,
                        as: 'sealer',
                        attributes:['username','cid']
                    }
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async retrieveByRid(rid){
        try{
            const item = database.Redflat.findAll({
                where: { red_building_id: rid},
                order:[
                    ['first_seal_date','DESC']
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }

    //DONE : update info for remarks and num of cases
    static async update(id,data){
        try{
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(data,{where:{id:id}}) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    //Destory. Not used as of now
    static async delete(id){
        try{
            const item =await database.Redflat.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default redflatService;
