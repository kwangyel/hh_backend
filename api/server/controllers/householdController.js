import householdService from '../services/householdService'
import Util from '../utils/Utils'
import unitService from '../services/unitService'

const util=new Util();

class householdController{
    static async getHouseholdBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const households = await householdService.getHouseholdBuilding(bid)
            if(households.length){
                util.setSuccess(200,"Got households")
                util.setData(households)
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

    static async createHousehold(req,res){
        const data = req.body
        const unit_id = req.body.unit_id
        const building_id = req.body.building_id
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
            const households = await householdService.createHousehold(data)
            if(households){
                util.setSuccess(200,"created household")
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
}
export default householdController;