import database from '../src/models';

class memberService{

    static async create(data){
        try{
            const item =await database.Member.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

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

    static async retrieveWithOwnerCID(cid){
        try{
            const item = await database.Building.findAll({
                include:[
                    {
                        model: database.Structure,
                        as: 'structure',
                        required: true
                    }
                ],
                where:{cidOwner: cid}
            })
            return item
        }catch(error){
            throw error
        }
    }
    static async retrieveWithOwnerContact(contact){
        try{
            const item = await database.Building.findAll({
                include:[
                    {
                        model: database.Structure,
                        as: 'structure',
                        required: true
                    }
                ],
                where:{contactOwner: contact}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveWithHouseholdContact(contact){
        try{
            const item = await database.Household.findAll({
                include:[
                    {
                        model: database.Structure,
                        as: 'structure',
                        required: true
                    }
                ],
                where:{contact: contact}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async getMemberInZone(zoneid){
        try{
            const query = `select idNumber,age,gender,incomeEarner,hhId from Members where hhId in (select id from Households where structure_id in (select id from Structures where sub_zone_id = ${zoneid}))`
            const structures = await database.sequelize.query(query)
            return structures[0] 
        }catch(err){
            throw err
        }
    }

    static async retrieveWithContact(contact){
        try{
            const item = await database.Member.findAll({
                include:[
                    {
                        model: database.Household,
                        as: 'household',
                        required: true,
                        include:[
                            {
                                model: database.Structure,
                                as: 'structure',
                                required: true
                            }
                        ]
                    }
                ],
                where:{contact: contact}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveWithHouseholdCID(cid){
        try{
            const item = await database.Household.findAll({
                include:[
                    {
                        model: database.Structure,
                        as: 'structure',
                        required: true
                    }
                ],
                where:{cid : cid}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveWithCID(cid){
        try{
            const item = await database.Member.findAll({
                include:[
                    {
                        model: database.Household,
                        as: 'household',
                        required: true,
                        include:[
                            {
                                model: database.Structure,
                                as: 'structure',
                                required: true
                            }
                        ]
                    }
                ],
                where:{idnumber : cid}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveVaccinated(zoneid){
        try{
            const item = await database.Member.count({
                include:[
                    {
                        model: database.Household,
                        as: 'household',
                        required: true,
                        include:[
                            {
                                model: database.Structure,
                                as: 'structure',
                                required: true,
                                where: { 'sub_zone_id':zoneid}
                            }
                        ]
                    }
                ],
                where:{'vaccine_status':true}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveMembers(zoneid){
        try{
            const item = await database.Member.count({
                include:[
                    {
                        model: database.Household,
                        as: 'household',
                        required: true,
                        include:[
                            {
                                model: database.Structure,
                                as: 'structure',
                                required: true,
                                where: { 'sub_zone_id':zoneid}
                            }
                        ]
                    }
                ]
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveTested(zoneid){
        try{
            const item = await database.Member.count({
                include:[
                    {
                        model: database.Household,
                        as: 'household',
                        required: true,
                        include:[
                            {
                                model: database.Structure,
                                as: 'structure',
                                required: true,
                                where: { 'sub_zone_id':zoneid}
                            }
                        ]
                    }
                ],
                where:{'covid_test_status':true}
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