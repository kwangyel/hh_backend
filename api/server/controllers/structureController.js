import structureService from '../services/structureService'
import Util from '../utils/Utils'

const util=new Util();

class structureController{
    static async markComplete(req,res){
        util.setData(null)
        const {bid} = req.params
        try{
            const building = await structureService.markComplete(bid)
            if(building){
                util.setSuccess(200,"Strcutre marked complete")
                return util.send(res)
            }
            util.setFailure(200,"Cannot mark complete")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }
    
    static async markProgress(req,res){
        util.setData(null)
        const {id} = req.params
        try{
            const building = await structureService.markProgress(id)
            if(building){
                util.setSuccess(200,"Strcutre marked progress")
                return util.send(res)
            }
            util.setFailure(200,"Cannot mark complete")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(400,"Error")
            return util.send(res)
        }
    }

    static async getStructure(req,res){
        const {sid} = req.params
        try{
            const structure = await structureService.getStructure(sid)
            if(structure){
                util.setSuccess(200,"got str")
                util.setData(structure)
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

    static async getStructureJson(req,res){
        const {zoneid} = req.params
        try{
            const buildings = await structureService.getStructureInZone(zoneid)
            if(buildings.length){
                const result = buildings.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {structure_id:row.id,status:row.status}
                    geojson.coordinates = [row.lng,row.lat]
                    return geojson
                })
                return res.json(result)
            }
            return res.json({
                "msg":"error sending json"
            })
        }catch(err){
            return res.json({
                "msg":"error sending json"
            })
        }
    }

    static async createBuilding(req,res){
        util.setData(null)
        const data = req.body

        try{
            const createBuilding = await structureService.createStructure(data)
            
            if(createBuilding){
                util.setSuccess(200,"created building")
                util.setData(createBuilding)
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
export default structureController;
