import database from '../src/models';

class dailystatService{

    static async create(data){
        try{
            const item =await database.Dailystat.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    static async getAll(){
        try{
            const item = await database.Dailystat.findAll()
            return item
        }catch(error){
            throw error
        }

    }

    static async findByDate(date){
        try{
            const item = await database.Dailystat.findOne({
                where:{date:date}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async getAllWeek(){
        try{
            const item = await database.Dailystat.findAll({
                order:[
                    ['createdAt','DESC']
                ],
                limit:7
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Dailystat.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            console.log(error)
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Dailystat.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default dailystatService;