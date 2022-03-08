import publicService from '../services/publicService'
import Util from '../utils/Utils'

const util=new Util();

class publicController{

    static async create(req,res){

        util.setData(null)
        const data = req.body

        try{
            const createItem = await publicService.create(data)
            
            if(createItem){
                util.setSuccess(200,"created anounc")
                util.setData(createItem)
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

    static async retrieve_sub_zone(req,res){
        const {zoneid} = req.params
        util.setData(null)

        try{
            const item = await publicService.retrieve_sub_zone(zoneid)
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
    
    static async retrieveById(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await publicService.retrieve(id)
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
            const item = await publicService.update(id,data)
            if(item[0]==1){
                util.setSuccess(200,"updated building")
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
            const item = await publicService.delete(id)
            if(item){
                util.setSuccess(200,"Deleted building")
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
export default publicController;