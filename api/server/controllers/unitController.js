import unitService from '../services/unitService'
import structureService from '../services/structureService'
import Util from '../utils/Utils'

const util=new Util();

class unitController{
    static async getUnitBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const units = await unitService.getUnitBuilding(bid)
            if(units.length){
                util.setSuccess(200,"Got units")
                util.setData(units)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
    static async getAUnit(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const units = await unitService.getAUnit(id)
            if(units){
                util.setSuccess(200,"Got units")
                util.setData(units)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
        
    }

    static async createUnit(req,res){
        const data = req.body
        const building_id= req.body.structure_id;
        const user_id = req.body.user_id

        util.setData(null)

        if(!building_id || !user_id){
            util.setError(200,"Building not set")
            return util.send(res)
        }

        try{
            const building = await structureService.getStructure(building_id)
            if(!building){
               util.setError(200,"Building not valid") 
               return util.send(res)
            }
            const createunit = await unitService.createUnit(data)
            if(createunit){
                util.setSuccess(200,"created unit")
                util.setData(createunit)
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
export default unitController;