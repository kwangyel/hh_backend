import caseService from '../services/caseService'
import Util from '../utils/Utils'

const util=new Util();

class caseController{
    //Unmark building as red
    static async unmarkRed(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        try{
            const item = await caseService.unmarkRed(sid)
            
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
        const structure_id= req.body.structure_id;

        if((structure_id === undefined)){ 
            util.setError(400,"Structure id not set")
            return util.send(res)
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
    
    //retrieve all cases as geojson
    static async retrieve(req,res){
        util.setData(null)

        try{
            const item = await caseService.retrieve()
            if(item){
                const result = item.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {structure_id:row.structure_id,status:row.status,date:row.date,numCases:row.numCases,remarks:row.remarks,day:row.day,case_id:row.case_id}
                    geojson.coordinates = [row.lng,row.lat]
                    return geojson
                })
                return res.json(result)
            }
            util.setFailure(200,"No records found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }


    //Update cases info
    static async update(req,res){
        const id = req.body.structure_id
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

}
export default caseController;