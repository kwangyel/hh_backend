import database from '../src/models';

class memberService{

    // static async create(data){
    //     try{
    //         const item =await database.Member.create(data)
    //         return item 
    //     }catch(error){
    //         throw error
    //     }
    // }

    static async createBulk(data){
        try{
            const item = await database.Member.bulkCreate(data)
            return item
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Member.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    // get all households with structureid
    static async retrieveHid(id){
        try{
            const item = await database.Member.findAll({
                where:{hhId:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async updateBulk(data){
        try{
            // const item = await database.Member.bulkCreate(data,{
            //     fields: ["id","idNumber","age","hhId","gender","type","incomeEarner"],
            //     updateOnDuplicate:["id","idNumber","age","hhId","gender","type","incomeEarner"]});

            const item = await database.Member.bulkCreate(data,{
                updateOnDuplicate:["id"]})
            return item 
        }catch(error){
            throw error
        }
    }
    static async update(id,data){
        try{
            const item = await database.Member.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Member.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default memberService;