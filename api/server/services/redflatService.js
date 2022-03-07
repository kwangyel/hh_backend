import database from '../src/models';

class redflatService{
    static async create(data){
        try{
            const item = await database.Redflat.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    static async getFlatStats(){
        try{
            const flats = await database.Redflat.findAll();
            let totalFlats = 0
            let totalActive = 0
            let totalInactive = 0

            flats.forEach((item)=>{
                totalFlats ++;
                if(item.status == "ACTIVE"){
                    totalActive++ 
                }
                if(item.status == "INACTIVE"){
                    totalInactive++ 
                }
            })
            let obj = { 
                "totalFlats":totalFlats,
                "activeFlats":totalActive, 
                "inactiveFlats":totalInactive 
            }
            return obj; 
        }catch(err){
            console.log(err);
            throw err
        }
    }

    static async getAllMegazoneStat(){
        try{
            const flats = await database.Redflat.findAll({
                attributes:['status'],
                include:[
                    {
                        model:database.Redbuilding,
                        as:'red_building',
                        attributes:['mega_zone_id']
                    }
                ]
            });

            let totalActive = 0
            let activeFlats = {}
            let inactiveFlats = {}

            flats.forEach((item)=>{

                if(item.status == "ACTIVE"){
                    if(activeFlats[item.red_building.mega_zone_id] == undefined){
                        activeFlats[item.red_building.mega_zone_id] = 0; 
                    }
                    activeFlats[item.red_building.mega_zone_id] += 1
                    if(item.red_building.mega_zone_id){
                        totalActive += 1
                    }
                }
                if(item.status == "INACTIVE"){
                    if(inactiveFlats[item.red_building.mega_zone_id] == undefined){
                        inactiveFlats[item.red_building.mega_zone_id] = 0; 
                    }
                    inactiveFlats[item.red_building.mega_zone_id] += 1
                }
            })
            let obj = { 
                "totalActive":totalActive,
                "activeFlats":activeFlats,
                "inactiveFlats":inactiveFlats,
            }
            return obj; 
        }catch(err){
            console.log(err);
            throw err
        }
    }

    static async getMegazoneStat(mega_zone_id){
        try{
            const flats = await database.Redflat.findAll({
                include:[
                    {
                        model:database.Redbuilding,
                        as:'red_building',
                        where: { mega_zone_id: mega_zone_id}
                    }
                ]
            });

            let totalFlats = 0
            let totalActive = 0
            let totalInactive = 0

            flats.forEach((item)=>{
                totalFlats ++;
                if(item.status == "ACTIVE"){
                    totalActive++ 
                }
                if(item.status == "INACTIVE"){
                    totalInactive++ 
                }
            })
            let obj = { 
                "totalFlats":totalFlats,
                "activeFlats":totalActive, 
                "inactiveFlats":totalInactive 
            }
            return obj; 
        }catch(err){
            console.log(err);
            throw err
        }
    }

    static async getZoneStat(zoneId){
        try{
            const flats = await database.Redflat.findAll({
                include:[
                    {
                        model:database.Redbuilding,
                        as:'red_building',
                        where: { zone_id: zoneId}
                    }
                ]
            });

            let totalFlats = 0
            let totalActive = 0
            let totalInactive = 0

            flats.forEach((item)=>{
                totalFlats ++;
                if(item.status == "ACTIVE"){
                    totalActive++ 
                }
                if(item.status == "INACTIVE"){
                    totalInactive++ 
                }
            })
            let obj = { 
                "totalFlats":totalFlats,
                "activeFlats":totalActive, 
                "inactiveFlats":totalInactive 
            }
            return obj; 
        }catch(err){
            console.log(err);
            throw err
        }
    }

    //remark building as red
    static async markActive(id){
        try{
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(
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
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(
                    {
                        status:"INACTIVE"
                    },
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
            const item = database.Redflat.findOne({
                where: { id : id},
                include:[
                    {
                        model: database.Redmember,
                        as: 'members'
                    },
                    {
                        model: database.Sealhistory,
                        as: 'seals',
                        include:[
                            {
                                model: database.User,
                                as: 'operator',
                                attributes:['username','cid']
                            }
                        ]
                    },
                    {
                        model: database.User,
                        as: 'sealer',
                        attributes:['username','cid']
                    }
                ]
            })
            return item 
        }catch(err){
            throw err
        }
    }

    static async retrieveByRid(rid){
        try{
            const item = database.Redflat.findAll({
                where: { red_building_id: rid},
                order:[
                    ['first_seal_date','DESC']
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
            const item = database.Redflat.findOne( { where: { id: id} });
            if(item ){
                const updated = database.Redflat.update(data,{where:{id:id}}) 
                return updated 
            }
            return null
        }catch(err){
            throw err
        }
    }

    //Destory. Not used as of now
    static async delete(id){
        try{
            const item =await database.Redflat.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}
export default redflatService;
