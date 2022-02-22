import database from '../src/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

class searchService{
    static async searchBuildingContact(contact){
        try{
            const item =await database.Building.findAll({
                where:{
                    contactOwner:{
                        [Op.like]:`%${contact}%`
                    }
                },
                attributes:['id'],
                include:'structure'
            })
            return item
        }catch(error){
            throw error
        }

    }

    static async searchShopOfficeContact(contact){
        try{
            const item =await database.Household.findAll({
                where:{
                    shopOfficeContact:{
                        [Op.like]:`%${contact}%`
                    }
                },
                attributes:['id'],
                include:'structure'
            })
            return item
        }catch(error){
            throw error
        }

    }

    static async searchHouseholdResidentailContact(contact){
        try{
            const item =await database.Household.findAll({
                where:{
                    contact:{
                        [Op.like]:`%${contact}%`
                    }
                },
                attributes:['id'],
                include:'structure'
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async searchHouseholdCid(cid){
        try{
            const item =await database.Household.findAll({
                where:{
                    cid:{
                        [Op.like]:`%${cid}%`
                    }
                },
                attributes:['id'],
                include:'structure'
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async searchOwnerCid(cid){
        try{
            const item =await database.Building.findAll({
                where:{
                    cidOwner:{
                        [Op.like]:`%${cid}%`
                    }
                },
                attributes:['id'],
                include:'structure'
            })
            return item
        }catch(error){
            throw error
        }
    }
}

export default searchService;