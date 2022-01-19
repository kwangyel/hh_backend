import caseService from '../services/caseService'
import redBuildingService from '../services/redBuidingService';
import Util from '../utils/Utils'
import Scope from '../utils/Scope';

const util=new Util();

class caseController{
    //remark building as red
    static async markActive(req,res){
        util.setData(null)
        const rid = req.body.id
        if(rid === undefined){
            util.setError(400,"Red building id not set")
            return util.send(res)
        }

        //scope validation
        const redBuilding = await redBuildingService.findById(rid);
        if(!Scope.check(req,redBuilding.dzo_id)){
            return res.json('unauthorized')
        }


        //update block
        try{
            const item = await caseService.markActive(rid)
            
            if(item){
                util.setSuccess(200,"Unmarked red building")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"Cannot unmark")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    //Unmark building as red
    static async markInactive(req,res){
        util.setData(null)
        const rid = req.body.id
        if(rid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //scope validation
        const redBuilding = await redBuildingService.findById(rid);
        if(!Scope.check(req,redBuilding.dzo_id)){
            return res.json('unauthorized')
        }

        //update block
        try{
            const item = await caseService.markInactive(rid)
            
            if(item){
                util.setSuccess(200,"Unmarked red building")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"Cannot unmark")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    //Create red building case
    static async create(req,res){
        util.setData(null)
        const data = req.body

        // validation
        const rid = req.body.red_building_id;
        if((rid === undefined)){ 
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //scope validation
        const redBuilding = await redBuildingService.findById(rid);
        if(!Scope.check(req,redBuilding.dzo_id)){
            return res.json("unauthorized")
        }

        
        try{
            const item = await caseService.create(data)
            
            if(item){
                util.setSuccess(200,"created red buildign")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            if(err.parent.errno = 1062){
                util.setError(200,"Duplicate Entry")
                return util.send(res)
            }else{
                console.log(err)
                util.setError(200,"Error")
                return util.send(res)
            }
        }
    }


    static async retrieveById(req,res){
        const {id} = req.params;
        try{
            const items = await caseService.retrieveById(id)
            if(item){
                util.setSuccess(200,"Buildigns ")
                util.setData(items)
                return util.send(res)
            }
            util.setFailure(200,"Cannot get")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
    
    static async retrieveByRid(req,res){
        const {rid} = req.params;
        try{
            const items = await caseService.retrieveByRid(rid)
            if(items){
                util.setSuccess(200,"Buildigns ")
                util.setData(items)
                return util.send(res)
            }
            util.setFailure(200,"Cannot get")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    //Update cases info
    static async update(req,res){
        const id = req.body.id
        const data = req.body
        util.setData(null)

        if(!id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const item = await caseService.update(id,data)
            if(item[0]==1){
                util.setSuccess(200,"updated case")
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
        const id = req.body.id
        util.setData(null)

        if(!id){
            util.setError(400,"Building id is not set")
            return util.send(res)
        }

        try{
            const item = await caseService.delete(id)
            if(item[0]==1){
                util.setSuccess(200,"updated case")
                return util.send(res)
            }
            util.setFailure(200,"Cannot delete")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
}
export default caseController;