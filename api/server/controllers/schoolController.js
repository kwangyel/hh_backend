import schoolService from '../services/schoolService'
import Util from '../utils/Utils'

const util=new Util();

class schoolController{
    static async getSchoolBuilding(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const school = await schoolService.getSchoolBuilding(bid)
            if(school.length){
                util.setSuccess(200,"Got school")
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

    static async createSchool(req,res){
        const data = req.body
        const building_id = req.body.structure_id
        util.setData(null)

        if(!building_id){
            util.setError(400,"Building not set")
            return util.send(res)
        }

        try{
            const school = await schoolService.createSchool(data)
            if(school){
                util.setSuccess(200,"created school")
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
export default schoolController;