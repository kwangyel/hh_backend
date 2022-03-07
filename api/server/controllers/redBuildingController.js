import redBuildingService from '../services/redBuidingService'
import Util from '../utils/Utils'
import Scope from '../utils/Scope'
import zoneService from '../services/zoneService';
import structureService from '../services/structureService';

const util=new Util();

class redBuildingController{

    static async findById(req,res){
        util.setData(null)
        const {id} = req.params
        try{
            const data = await redBuildingService.findById(id)
            if(data){
                util.setSuccess(200,"count")
                util.setData(data)
                return util.send(res)
            }
            util.setFailure(200,"not found")
            return util.send(res)
        }catch(err){
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async getMegazoneStat(req,res){
        util.setData(null)
        const {id} = req.params
        try{
            const data = await redBuildingService.getMegazoneStat(id)
            if(data){
                util.setSuccess(200,"count")
                util.setData(data)
                return util.send(res)
            }
            util.setFailure(200,"not found")
            return util.send(res)
        }catch(err){
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async getZoneStat(req,res){
        util.setData(null)
        const {zoneid} = req.params
        try{
            const data = await redBuildingService.getZoneStat(zoneid)
            if(data){
                util.setSuccess(200,"count")
                util.setData(data)
                return util.send(res)
            }
            util.setFailure(200,"not found")
            return util.send(res)
        }catch(err){
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async redBuildingCount(req,res){
        util.setData(null)
        const {dzoId} = req.params
        try{
            const obj = await redBuildingService.redBuildingCount(dzoId); 
            
            util.setSuccess(200,'success')
            util.setData(obj)
            return util.send(res)
        }catch(err){
            console.log("err" ,err)
            util.setError(200,"Error")
            return util.send(res)
        }

    }

    static async remarkRed(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //scope validation
        const updateItem = await redBuildingService.findByStructureId(sid);
        if(!Scope.check(req,updateItem.dzo_id)){
            return res.json('unauthorized')
        }

        //update block
        try{
            const item = await redBuildingService.remarkRed(sid)
            
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

    static async markRedProgress(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //update block
        try{
            const item = await redBuildingService.markRedProgress(sid)
            
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

    static async markRedInactive(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //update block
        try{
            const item = await redBuildingService.markRedInactive(sid)
            
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

    static async markRedActive(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //update block
        try{
            const item = await redBuildingService.markRedActive(sid)
            
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
    static async unmarkRed(req,res){
        util.setData(null)
        const sid = req.body.structure_id
        if(sid === undefined){
            util.setError(400,"Structure id not set")
            return util.send(res)
        }

        //scope validation
        const updateItem = await redBuildingService.findByStructureId(sid);
        if(!Scope.check(req,updateItem.dzo_id)){
            return res.json('unauthorized')
        }

        //update block
        try{
            const item = await redBuildingService.unmarkRed(sid)
            
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
        const structure_id = req.body.structure_id;
        const dzo_id = req.body.dzo_id;
        if((structure_id === undefined || dzo_id === undefined)){ 
            util.setError(400,"Structure id not set")
            return util.send(res)
        }


        if(!Scope.check(req,dzo_id)){
            res.json("unauthorized")
        }
        
        try{
            let str_id = data.structure_id
            const structure = await structureService.getStructure(str_id)
            const subZone = await zoneService.getMegaZone(structure.sub_zone_id)
            data.mega_zone_id = subZone.mega_zone_id
            data.zone_id = structure.sub_zone_id
            const item = await redBuildingService.create(data)
            
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

    static async retrieveZoneJson(req,res){
        util.setData(null)
        const {id} = req.params;
        if(!Scope.check(req,id)){
            return res.json("Unauthorized")
        }

        try{
            const item = await redBuildingService.retrieveZone(id)
            if(item){
                util.setSuccess(200,"red buildings found")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"No records found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
    static async retrieveZone(req,res){
        util.setData(null)
        const {id} = req.params;
        if(!Scope.check(req,id)){
            return res.json("Unauthorized")
        }

        try{
            const item = await redBuildingService.retrieveZone(id)
            if(item){
                const result = item.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {
                        structure_id:row.structure_id,
                        status:row.status,
                        remarks:row.remarks,
                        dzo_id:row.dzo_id,
                        id:row.id,
                        redbuildingStatus:row.redbuildingStatus,
                        megaZone:row.mega_zone_id,
                        createdAt:row.createdAt,
                        updatedAt:row.updatedAt
                    }
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

    static async retrieveDzo(req,res){
        util.setData(null)
        const {id} = req.params;
        if(!Scope.check(req,id)){
            return res.json("Unauthorized")
        }

        try{
            const item = await redBuildingService.retrieveDzo(id)
            if(item){
                const result = item.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {structure_id:row.structure_id,status:row.status,date:row.date,numCases:row.numCases,remarks:row.remarks,day:row.day,case_id:row.case_id,dzo_id:row.dzo_id,id:row.id}
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

    static async getRedFlatByMegazone(req,res){
        util.setData(null)
        const {id} = req.params;
        try{
            const item = await redBuildingService.getFlatInMegazone(id)
            if(item){
                util.setSuccess(200,"created red buildign")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"No records found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async getRedFlatByZoneId(req,res){
        util.setData(null)
        const {id} = req.params;
        try{
            const item = await redBuildingService.getFlatInZone(id)
            if(item){
                util.setSuccess(200,"created red buildign")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"No records found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
    
    //retrieve all cases as geojson
    static async retrieve(req,res){
        util.setData(null)

        if(req.decoded['scope'] == 'ALL'){

        }else{
            let dzo_code = Number(req.decoded['scope'])
            try{
                const item = await redBuildingService.retrieveDzo(dzo_code)
                if(item){
                    const result = item.map((row)=>{
                        let geojson = {"type":"Point"}
                        geojson.properties = {structure_id:row.structure_id,status:row.status,date:row.date,numCases:row.numCases,remarks:row.remarks,day:row.day,case_id:row.case_id,dzo_id:row.dzo_id,id:row.id}
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
        

        try{
            const item = await redBuildingService.retrieve()
            if(item){
                const result = item.map((row)=>{
                    let geojson = {"type":"Point"}
                    geojson.properties = {structure_id:row.structure_id,status:row.status,date:row.date,numCases:row.numCases,remarks:row.remarks,day:row.day,case_id:row.case_id,id:row.id}
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

    //retrieve all as normal
    static async retrieveAll(req,res){
        util.setData(null)

        if(req.decoded['scope'] == 'ALL'){

        }else{
            let dzo_code = Number(req.decoded['scope'])
            try{
                const item = await redBuildingService.retrieveDzo(dzo_code)
                util.setData(item)
                util.setFailure(200,"No records found")
                return util.send(res)
            }catch(err){
                console.log(err)
                util.setError(200,"Error")
                return util.send(res)
            }
        }
        

        try{
            const item = await redBuildingService.retrieve()
            util.setData(item)
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
            const item = await redBuildingService.update(id,data)
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
export default redBuildingController;