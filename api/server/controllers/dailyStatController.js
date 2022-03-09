import dailystatService from '../services/dailystatService'
import redBuildingService from '../services/redBuidingService';
import redflatService from '../services/redflatService';
import Util from '../utils/Utils'

const util=new Util();

class dailyStatController{

    static async populate(req,res){
        util.setData(null)

        try{
            let stat = {
                red_flats:0,
                red_buildings:0
            }

            var dd = new Date()
            var newDateOptions = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }
            let currentDate = dd.toLocaleDateString("ja",newDateOptions).replace(/\//g,'-')

            const redbuildings = await redBuildingService.getToday()
            const redFlats = await redflatService.getToday()

            if(redBuildingService){
                stat.red_buildings = redbuildings.length
            }
            if(redFlats){
                stat.red_flats = redFlats.length
            }

            const item = await dailystatService.findDate(currentDate)
            let dailyobject
            if(item){
                stat['id'] = item.id
                dailyobject = await dailystatService.update(stat)
            }else{
                dailyobject = await dailystatService.create(stat)
            }
            
            if(dailyobject){
                util.setSuccess(200,"created anounc")
                util.setData(dailyobject)
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
    
    static async getAll(req,res){
        util.setData(null)
        try{
            const item = await dailystatService.getAll()
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

    static async findByDate(req,res){
        const {date} = req.params
        util.setData(null)

        try{
            const item = await dailystatService.findByDate(date)
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
    
    static async getAllWeek(req,res){
        util.setData(null)

        try{
            const item = await dailystatService.getAllWeek()
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
            const item = await dailystatService.update(id,data)
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
            const item = await dailystatService.delete(id)
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
export default dailyStatController;