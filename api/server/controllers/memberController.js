import memberService from '../services/memberService'
import Util from '../utils/Utils'

const util=new Util();

class memberController{

    static async createBulk(req,res){
        util.setData(null)
        const data = req.body.members

        try{
            const item = await memberService.createBulk(data)
            
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

    static async create(req,res){
        util.setData(null)
        const data = req.body

        try{
            const item = await memberService.create(data)
            
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
            const item = await memberService.retrieve(id)
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
    
    static async retrieveVaccinated(req,res){
        const {zoneid} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveVaccinated(zoneid)
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

    static async retrieveMembers(req,res){
        const {zoneid} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveMembers(zoneid)
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

    static async retrieveTested(req,res){
        const {zoneid} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveTested(zoneid)
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

    static async retrieveWithCID(req,res){
        const {cid} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveWithCID(cid)
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

    static async retrieveWithContact(req,res){
        const {contact} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveWithContact(contact)
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

    static async retrieveHid(req,res){
        const {hid} = req.params
        util.setData(null)

        try{
            const item = await memberService.retrieveHid(hid)
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
            const item = await memberService.update(id,data)
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
            const item = await memberService.delete(id)
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
export default memberController;