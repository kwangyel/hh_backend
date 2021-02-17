import residentService from '../services/residentService'
import Util from '../utils/Utils'
import unitService from '../services/unitService'

const util=new Util();

class residentController{
    static async getResidentBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const resident = await residentService.getResidentBuilding(bid)
            if(resident.length){
                util.setSuccess(200,"Got households")
                util.setData(resident)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async getResidentInAttic(req,res){
        util.setData(null)
	const {zoneid} = req.params;
        try{
            const resident = await residentService.getResidentInAttic(zoneid); 
            if(resident.length){
                util.setSuccess(200,"Got households")
                util.setData(resident)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async createResident(req,res){
        const data = req.body
        const unit_id = req.body.unit_id
        const building_id = req.body.structure_id
        util.setData(null)

        if(!building_id || !unit_id){
            util.setError(400,"Building not set")
            return util.send(res)
        }

        try{
            const unit = await unitService.getAUnit(unit_id)
            if(!unit){
               util.setError(400,"unit not valid") 
               return util.send(res)
            }
            const resident = await residentService.createResident(data)
            if(resident){
                util.setSuccess(200,"created household")
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
}
export default residentController;
