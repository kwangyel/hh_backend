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
            let totalCases = 0
            let totalBuildings = 0
            let activeCase = 0
            let inactiveCase = 0
            let activeBuilding = 0
            let inactiveBuilding = 0
            let numCases = 0
            redBuildings.forEach((item)=>{
                totalBuildings ++ 
                if(item.status == "ACTIVE"){
                    activeBuilding ++
                }
                if(item.status == "INACTIVE"){
                    inactiveBuilding ++ 
                }
                item.cases.forEach(cs=>{
                    totalCases ++;
                    if(cs.status == "ACTIVE"){
                        activeCase ++
                        numCases += cs.numCases
                    }
                    if(cs.status == "INACTIVE"){
                        inactiveCase ++
                    }
                })
            })
            
            let obj = { 
                "totalCases":totalCases,
                "activeCases":activeCase, 
                "inactiveCases":inactiveCase,
                "numCases":numCases,
                "totalBuilding":totalBuildings,
                "activeBuilding":activeBuilding,
                "inactiveBuilding":inactiveBuilding
            }
            return obj
        }catch(err){
            console.log("ss",err)
            throw err
        }
    }

    static async getCaseOnReleaseDate(date){
        try{
            const item = database.Case.findOne({
                where:{releaseDate:date}
            })
            return item
        }catch(err){
            throw err
        }
    }

    static async getCaseOrderMegazone(zone_id){
        try{
            const item = await database.Case.findAll({
                order:[
                    ['']

                ],
                include:[
                    {
                        model:database.Redbuilding,
                        as:'red_building',
                        where: { mega_zone_id: zone_id}
                    }
                ]
            });
        }catch(err){
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
