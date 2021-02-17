import institutionService from '../services/institutionService'
import Util from '../utils/Utils'

const util=new Util();

class institutionController{
    static async getInstitutionBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const inst = await institutionController.getInstitutionBuilding(bid)
            if(inst.length){
                util.setSuccess(200,"Got households")
                util.setData(inst)
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

    static async createInstitution(req,res){
        const data = req.body
        const building_id = req.body.structure_id;
        util.setData(null)

        if(!building_id){
            util.setError(400,"Building not set")
            return util.send(res)
        }

        try{
            const inst= await institutionService.createInstitution(data)
            if(inst){
                util.setSuccess(200,"created institution")
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
export default institutionController;