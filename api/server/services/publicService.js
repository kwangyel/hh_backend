import database from '../src/models';
import redflatService from './redflatService';

class publicService{

    static async create(data){
        try{
            const item =await database.Public.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    static async getUserDetails(cid){
        try{
            const redflat = await redflatService.getByHouseholdCid(cid)
            return redflat
        }catch(err){
            throw err
        }
    }

    static async retrieve(id){
        try{
            const item = await database.Public.findOne({
                where:{id:Number(id)},
                include:[
                    {
                        model: database.Subzone,
                        as: 'sub_zone'
                    },
                    {
                        model: database.Contact,
                        as: 'health_contact'
                    },
                    {
                        model: database.Contact,
                        as: 'desuup_contact'
                    }
                ]
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieve_sub_zone(zoneid){
        try{
            const item = await database.Public.findOne({
                where:{sub_zone_id:Number(zoneid)},
                include:[
                    {
                        model: database.Subzone,
                        as: 'sub_zone',
                    },
                    {
                        model: database.Contact,
                        as:'contacts'
                    }
                ]
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Public.update(data,{
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
            const item =await database.Public.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default publicService;