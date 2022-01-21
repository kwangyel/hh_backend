import redBuildingService from '../services/redBuidingService'
import tokml from 'geojson-to-kml'

class convertController{

    static async findKmlDzo(req,res){
        const {dzoId} = req.params

        try{
            const item = await redBuildingService.retrieveDzo(dzoId)
            if(item){
                const result = item.map((row)=>{
                    let geojson = {"type":"Feature"}
                    geojson.properties = {status:row.status,id:row.id}
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