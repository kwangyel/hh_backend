import imageService from '../services/imageService'
import Util from '../utils/Utils'
import buildingService from '../services/buildingService'
import fs from 'fs'

const util=new Util();

class imageController{
    static async getImage(req,res){
        const {bid} = req.params
        util.setData(null)

        try{
            const img = await imageService.getImage(bid)
            if(img.length){
                util.setSuccess(200,"Got imgs")
                util.setData(img)
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

    static async createImage(req,res){
        const data = req.body
        const building_id = req.body.building_id
        const dataUrl = req.body.imageDataUrl
        util.setData(null)

        if(!building_id || !dataUrl){
            util.setError(400,"data not set")
            return util.send(res)
        }
        try{
            //upload file to server
		const name = Date.now();
            let filename = "uploads/"+name+"building_id_"+building_id+".jpg"

            let m = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
            let b = Buffer.from(m[2],'base64')
            let createfile = false
            fs.writeFile(filename,b,function(err){
                if(err){
                    util.setError(400,"error uploading")
                    return util.send(res)
                }           
            })
        
            //upload uri to database
            data.uri = filename
            const img = await imageService.createImage(data)
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
}
export default imageController;
