import database from '../src/models';

class caseService{

    // DONE: Unmark as red building(change status to inactive)
    static async unmarkRed(sid){
        try{
            const item = database.Case.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Case.update(
                    {status:"INACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    //DONE : return all as cases
    static async retrieve(){
        try{
            const item = database.Case.findAll({
                order:[
                    ['date','DESC']
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }

    //DONE : update info for remarks and num of cases
    static async update(sid,data){
        try{
            const item = database.Case.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Case.update(data,{where:{structure_id:sid}}) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    //DONE: Mark as red building(create new case)
    static async create(data){
        try{
            const item = await database.Case.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    //Destory. Not used as of now
    static async delete(id){
        try{
            const item =await database.Case.destroy({
                where:{structure_id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default caseService;
