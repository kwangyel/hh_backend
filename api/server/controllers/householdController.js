import householdService from '../services/householdService'
import Util from '../utils/Utils'

const util=new Util();

class householdController{

    static async create(req,res){
        util.setData(null)
        const data = req.body

        // validation
        const structure_id= req.body.structure_id;
        const user_id = req.body.user_id;

        if((structure_id === undefined) || (user_id === undefined)){
            util.setError(400,"Building id not set")
            return util.send(res)
        }
        
        try{
            const item = await householdService.create(data)
            
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

    static async retrieve(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await householdService.retrieve(id)
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
            const item = await householdService.retrieveSid(sid)
            if(item){
                util.setSuccess(200,"Got buildings")
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


    static async update(req,res){
        const id = req.body.id
        const data = req.body

        util.setData(null)
        if(!id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const item = await householdService.update(id,data)
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
    

    static async delete(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await householdService.delete(id)
            if(item){
                util.setSuccess(200,"Deleted ")
                return util.send(res)
            }
            util.setFailure(200,"Cannot delete building")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
}
export default householdController;