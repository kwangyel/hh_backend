import zoneService from '../services/zoneService'
import megazoneService from '../services/megazoneService';
import Util from '../utils/Utils'

const util=new Util();

class zoneController{
    static async retrieveMegaZones(req,res){
        util.setData(null)
        try{
            const item = await megazoneService.getZones()
            if(item){
                util.setSuccess(200,"retrieved")
                util.setData(item)
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
    static async retrieveZones(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await zoneService.getZones(id)
            if(item){
                util.setSuccess(200,"retrieved")
                util.setData(item)
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
    
    static async retrieveSubzones(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await zoneService.getSubzones(id)
            if(item){
                util.setSuccess(200,"Retrieved")
                util.setData(item)
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

    static async getSubzoneById(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await zoneService.getSubzoneById(id)
            if(item){
                util.setSuccess(200,"Retrieved")
                util.setData(item)
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

}
export default zoneController;