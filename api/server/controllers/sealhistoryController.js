import sealhistoryService from '../services/sealhistoryService'
import redBuildingService from '../services/redBuidingService';
import Util from '../utils/Utils'

const util=new Util();

class sealhistoryController{

    //Create red building case
    static async create(req,res){
        util.setData(null)
        const data = req.body

        // validation
        const flat_id = req.body.flat_id;
        if((flat_id=== undefined)){ 
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        try{
            const item = await sealhistoryService.create(data)
            
            if(item){
                util.setSuccess(200,"Created seal history")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"Cannot create")
            return util.send(res)
        }catch(err){
            console.log(err)
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

    static async retrieveByFlatId(req,res){
        util.setData(null);
        const {id} = req.params;
        try{
            const items = await sealhistoryService.retrieveByFlatId(id)
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
            const item = await sealhistoryService.update(id,data)
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
            const item = await sealhistoryService.delete(id)
            if(item==1){
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
export default sealhistoryController;