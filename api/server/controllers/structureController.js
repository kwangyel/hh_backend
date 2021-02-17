import structureService from '../services/structureService'
import Util from '../utils/Utils'

const util=new Util();

class structureController{

    static async create(req,res){
        util.setData(null)
        const data = req.body

        try{
            const item = await structureService.createStructure(data)
            
            if(item){
                util.setSuccess(200,"created")
                util.setData(item)
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

    static async retrieveZone(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await structureService.getStructureInZone(id)
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
    
    static async retrieveSid(req,res){
        const {sid} = req.params
        util.setData(null)

        try{
            const item = await structureService.getStructure(sid)
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


    static async updateProgress(req,res){
        const data = req.body
        const structure_id = req.body.structure_id

        util.setData(null)
        if(!structure_id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const item = await structureService.markProgress(structure_id)
            if(item[0]==1){
                util.setSuccess(200,"updated ")
                return util.send(res)
            }
            util.setFailure(200,"Cannot update")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
    
    static async updateComplete(req,res){
        const data = req.body
        const structure_id = req.body.structure_id

        util.setData(null)
        if(!structure_id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const item = await structureService.markComplete(structure_id)
            if(item[0]==1){
                util.setSuccess(200,"updated")
                return util.send(res)
            }
            util.setFailure(200,"Cannot update")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
}
export default structureController;