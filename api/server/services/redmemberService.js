import database from '../src/models';

class redmemberService{
    static async create(data){
        try{
            const item = await database.Redmember.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    static async retrieveByFlatId(flatId){
        try{
            const item = database.Redmember.findAll({
                where: { flat_id: flatId}
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async update(id,data){
        try{
            const item = database.Redmember.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redmember.update(data,{where:{id:id}}) 
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
            const item =await database.Redmember.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default redmemberService;
