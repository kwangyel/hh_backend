import database from '../src/models';

class megazoneService{
    static async getZones(){
        try{
            const zones = await database.Megazone.findAll();
            return zones
        }catch(err){
            throw err
        }
    }
}
export default megazoneService;