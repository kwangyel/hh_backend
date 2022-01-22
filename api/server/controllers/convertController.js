import redBuildingService from '../services/redBuidingService'
import tokml from 'geojson-to-kml'
import structureService from '../services/structureService'

// const json2csv = require('json2csv')
import Parser from 'json2csv'
import buildingService from '../services/buildingService'
import householdService from '../services/householdService'
import memberService from '../services/memberService'

class convertController{
    static async findStrCsvZones(req,res){
        const {zoneId} = req.params

        try{
            const item = await structureService.getStructureInZone(zoneId)
            if(item){
                var fields = ['id', 'lat', 'lng', 'sub_zone_id' ];
                var data = Parser.parse(item,{fields})

                res.attachment(`structures_zone_${zoneId}.csv`);
                return res.status(200).send(data)
            }
            return res.send("error")
        }catch(err){
            console.log(err)
            return res.send(res)
        }
    }

    static async findBldgCsvZones(req,res){
        const {zoneId} = req.params

        try{
            const item = await buildingService.getBldgInZone(zoneId)
            if(item){
                var fields = ['id','structure_id','buildingOwnership','cidOwner','nameOfBuildingOwner','contactOwner','floors'];
                var data = Parser.parse(item,{fields})

                res.attachment(`buildings_zone_${zoneId}.csv`);
                return res.status(200).send(data)
            }
            return res.status(404).send("not found")
        }catch(err){
            console.log(err)
            return res.send(res)
        }
    }

    static async findHhCsvZones(req,res){
        const {zoneId} = req.params

        try{
            const item = await householdService.getHhInZone(zoneId)
            if(item){
                var fields = ['id','structure_id','unitId','unitUse','cid','name','gender','contact','age','employmentOrg','shopOfficeName','shopOfficeContact'];
                var data = Parser.parse(item,{fields})

                res.attachment(`households_zone_${zoneId}.csv`);
                return res.status(200).send(data)
            }
            return res.status(404).send("not found")
        }catch(err){
            console.log(err)
            return res.send(res)
        }
    }

    static async findMemberCsvZones(req,res){
        const {zoneId} = req.params

        if(isNaN(zoneId)){
            return res.status(404).send("not found")
        }

        try{
            const item = await memberService.getMemberInZone(zoneId)
            if(item){
                var fields = ['idNumber','age','gender','incomeEarner','hhId'];
                var data = Parser.parse(item,{fields})

                res.attachment(`members_zone_${zoneId}.csv`);
                return res.status(200).send(data)
                // return res.json(item)
            }
            return res.status(404).send("not found")
        }catch(err){
            console.log(err)
            return res.send(res)
        }
    }

    static async findKmlDzo(req,res){
        const {dzoId} = req.params

        try{
            const item = await redBuildingService.retrieveDzo(dzoId)

            if(item){
                const result = item.map((row)=>{
                    let totalCase = 0
                    row.cases.forEach((x)=>{
                        totalCase += x.numCases
                    })
                    let geojson = {"type":"Feature"}
                    geojson.properties = {status:row.status,id:row.id,totalCase:totalCase,remarks:row.remarks}
                    // geojson.geometry = [row.lng,row.lat]
                    geojson.geometry = {"type":"Point","coordinates":[row.lng,row.lat]}
                    return geojson
                })
                let geojsonObject = {"type":"FeatureCollection","features":result}
                //to kml
                console.log(geojsonObject)
                // const kml = tokml(geojsonObject,"multipoint")
                const kml = tokml(geojsonObject,{
                    documentName:"KML_object",
                    documentDescription:"Kml object of red buildings"
                })
                // const kmlNameDescription = tokml(result, {
                //     name: "name",
                //     description: "description"
                //   });
                res.type("text/plain")
                return res.send(kml)
            }
            return res.send("error")
        }catch(err){
            console.log(err)
            return res.send(res)
        }
    }
}
export default convertController;