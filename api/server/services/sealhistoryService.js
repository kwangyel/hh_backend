import database from '../src/models';

class sealHistoryService{
    static async create(data){
        try{
            const item = await database.Sealhistory.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    static async retrieveByFlatId(flatId){
        try{
            const item = database.Sealhistory.findAll({
                where: { flat_id: flatId},
                order:[
                    ['date','DESC']
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async update(id,data){
        try{
            const item = database.Sealhistory.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Sealhistory.update(data,{where:{id:id}}) 
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
            const item =await database.Sealhistory.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default sealHistoryService;
