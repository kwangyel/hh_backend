import database from '../src/models';

class caseService{
    static async caseCount(dzoId){
        try{
            const redBuildings = await database.Redbuilding.findAll({
                where:{
                    dzo_id: dzoId
                },
                include:'cases'
            })
            let total = 0
            let active = 0
            let inactive = 0
            let numCases = 0
            redBuildings.forEach((item)=>{
                item.cases.forEach(cs=>{
                    total ++;
                    if(cs.status == "ACTIVE"){
                        active ++
                        numCases += cs.numCases
                    }
                    if(cs.status == "INACTIVE"){
                        inactive ++
                    }
                })
            })
            
            let obj = { 
                "total":total,
                "active":active, 
                "inactive":inactive,
                "numCases":numCases
            }
            return obj
        }catch(err){
            console.log("ss",err)
            throw err
        }
    }

    //remark building as red
    static async markActive(id){
        try{
            const item = database.Case.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Case.update(
                    {status:"ACTIVE"},
                    {where:{id:id}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    // DONE: Unmark as red building(change status to inactive)
    static async markInactive(id){
        try{
            const item = database.Case.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Case.update(
                    {status:"INACTIVE"},
                    {where:{id:id}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    static async retrieveById(id){
        try{
            const item = database.Case.findOne({
                where: { id : id},
                order:[
                    ['date','DESC']
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }
    static async retrieveByRid(rid){
        try{
            const item = database.Case.findAll({
                where: { red_building_id: rid},
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
    static async update(id,data){
        try{
            const item = database.Case.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Case.update(data,{where:{id:id}}) 
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
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default caseService;
