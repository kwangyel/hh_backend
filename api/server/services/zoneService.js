import database from '../src/models';

class zoneService{
    static async getAllDzongkhags(){
        try{
            const dzos = await database.Dzongkhag.findAll()
            return dzos
        }catch(err){
            throw err
        }
    }
    static async getZones(dzoid){
        try{
            const zones = await database.Zone.findAll({
                where:{dzongkhag_id:Number(dzoid)}
            })
            return zones
        }catch(err){
            throw err
        }
    }

    static async getSubzones(zoneid){
        try{
            const subzones = await database.Subzone.findAll({
                where:{zone_id:Number(zoneid)}
            })
            return subzones
        }catch(err){
            throw err
        }
    }
}
export default zoneService;