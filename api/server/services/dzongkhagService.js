import database from '../src/models';

class dzongkhagService{


    static async retrieve(id){
        try{
            const item = await database.Dzongkhag.findAll({
                where:{id: Number(id)}
            });
            return item
        }catch(error){
            throw error
        }
    }
    static async retrieveAll(){
        try{
            const item = await database.Dzongkhag.findAll()
            return item
        }catch(error){
            throw error
        }
    }
}

export default dzongkhagService;