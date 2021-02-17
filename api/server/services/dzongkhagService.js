import database from '../src/models';

class dzongkhagService{


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