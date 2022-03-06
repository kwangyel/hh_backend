import database from '../src/models';

class redBuildingService{
    //count of redbuiling in the dzongkhag
    static async redBuildingCount(dzoId){
        try{
            const activeBuilding =  await  database.Redbuilding.count({ where:{dzo_id:dzoId, status:"ACTIVE"} });
            const inactiveBuilding = await database.Redbuilding.count({where:{dzo_id:dzoId,status:"INACTIVE"}});
            let obj = { 
                "total":activeBuilding + inactiveBuilding,
                "active":activeBuilding, 
                "inactive":inactiveBuilding
            }
            return obj
        }catch(err){
            console.log("ss",err)
            throw err
        }
        
    }
    static async getFlatInMegazone(zoneid){
        try{
            const item = database.Redbuilding.findAll({ 
                where: { mega_zone_id: zoneid},
                attributes:['id'],
                include:[
                    {
                        model: database.Redflat,
                        as: 'red_flat',
                        required:true
                    }
                ],
            });
            return item
            return null
        }catch(err){
            throw err
        }
    }

    static async getFlatInZone(zoneid){
        try{
            const item = database.Redbuilding.findAll({ 
                where: { zone_id: zoneid},
                attributes:['id'],
                include:[
                    {
                        model: database.Redflat,
                        as: 'red_flat',
                        required:true
                    }
                ],
            });
            return item
            return null
        }catch(err){
            throw err
        }
    }

    static async markRedProgress(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {redbuildingStatus:"PROGRESS"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }


    static async markRedInactive(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {redbuildingStatus:"INACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }

    }
    static async markRedActive(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {redbuildingStatus:"ACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }

    }

    //remark building as red
    static async remarkRed(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
                    {status:"ACTIVE"},
                    {where:{structure_id:sid}}
                ) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    // DONE: Unmark as red building(change status to inactive)
    static async unmarkRed(sid){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(
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

    static async retrieveDzo(id){
        try{
            const item = database.Redbuilding.findAll({
                where: { dzo_id : id},
                include: 'cases'
            })
            return item 
        }catch(err){
            throw err
        }
    }

    //DONE : return all as cases
    static async retrieve(){
        try{
            const item = database.Redbuilding.findAll({
                include: 'cases'
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async findById (id){
        try{
            const item = database.Redbuilding.findOne({
                where:{id :Number(id)}
            })
            return item
        }catch(err){
            throw err
        }
    }

    static async findByStructureId(id){
        try{
            const item = database.Redbuilding.findOne({
                where:{structure_id:Number(id)}
            })
            return item
        }catch(err){
            throw err
        }
    }


    //DONE : update info for remarks and num of cases
    static async update(sid,data){
        try{
            const item = database.Redbuilding.findOne( { where: { structure_id: sid} });
            if(item ){
                const updated = database.Redbuilding.update(data,{where:{structure_id:sid}}) 
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
            const item = await database.Redbuilding.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    //Destory. Not used as of now
    static async delete(id){
        try{
            const item =await database.Redbuilding.destroy({
                where:{structure_id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default redBuildingService;
