import imageService from '../services/imageService'
import Util from '../utils/Utils'
import fs from 'fs'

const util=new Util();

class imageController{

    static async create(req,res){
        util.setData(null)
        const data = req.body
        const dataUrl = req.body.imageDataUrl

        // validation
        const structure_id= req.body.structure_id;

        if(structure_id === undefined){
            util.setError(400,"Building id not set")
            return util.send(res)
        }
        
        try{
            //upload file to server
            const name = Date.now();
            let filename = "uploads/"+name+"building_id_"+structure_id+".jpg"

            let m = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
            let b = Buffer.from(m[2],'base64')

            let filepath = "/var/hh_survey/"+filename

            fs.writeFile(filepath,b,function(err){
                if(err){
                    util.setError(400,"error uploading")
                    return util.send(res)
                }           
            })
        
            //upload uri to database
            data.uri = filename
            const img = await imageService.create(data)

            if(img){
                util.setSuccess(200,"image uploaded")
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

    static async retrieve(req,res){
        const {id} = req.params
        util.setData(null)

        try{
            const item = await imageService.retrieve(id)
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
            const item = await imageService.retrieveSid(sid)
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
            const item = await imageService.update(id,data)
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
            const item = await imageService.delete(id)
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
export default imageController;