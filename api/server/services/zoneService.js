import database from '../src/models';

class zoneService{
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
    static async getMegaZone(zoneid){
        try{
            const subzone = await database.Subzone.findOne({
                where:{id:zoneid}
            });
            return subzone;
        }catch(err){
            throw err
        }
    }
}
export default zoneService;