import database from '../src/models';

class householdService{

    static async create(data){
        try{
            const item =await database.Household.create(data)
            return item 
        }catch(error){
            console.log(error)
            throw error
        }
    }

    // retrieve building with id
    static async retrieve(id){
        try{
            const item = await database.Household.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async getHhInZone(zoneid){
        try{
            const structures= database.Household.findAll({
                attributes:['id','structure_id','unitId','unitUse','cid','name','gender','contact','age','employmentOrg','shopOfficeName','shopOfficeContact'],
                include:[
                    {
                        model:database.Structure,
                        as:'structure',
                        attributes:['id'],
                        where:{
                            sub_zone_id: zoneid
                        }
                    },
                ]

            })
            return structures 
        }catch(err){
            throw err
        }
    }

    // get all households with structureid
    static async retrieveSid(sid){
        try{
            const item = await database.Household.findAll({
                where:{structure_id:Number(sid)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Household.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Household.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default householdService;