
import searchService from '../services/searchService'
import Util from '../utils/Utils'

const util=new Util();

class searchController{
    
    static async searchCid (req,res){
        util.setData(null);

        const cid = req.body.cid
        if(cid == undefined){
            util.setError(200,"need to set cid")
            return util.send(res)
        }

        try{
            //search contact field of household
            const householdCid = await searchService.searchHouseholdCid(cid)
            if(householdCid){
                console.log("found in cid household")
                util.setSuccess(200,"Found")
                util.setData(householdCid)
                return util.send(res)
            }
            

            //search shop office contact
            const ownerCid = await searchService.searchOwnerCid(cid)
            if(ownerCid){
                console.log("found in Building cid")
                util.setSuccess(200,"Found")
                util.setData(ownerCid)
                return util.send(res)
            }

            util.setFailure(200,"not found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

    static async searchContact (req,res){
        util.setData(null);

        const contact = req.body.contact
        console.log(req.body.contact)
        if(contact == undefined){
            util.setError(200,"need to set contact")
            return util.send(res)
        }

        try{
            //search contact field of household
            const contactField = await searchService.searchHouseholdResidentailContact(contact)
            if(contactField){
                console.log("found in contact household")
                util.setSuccess(200,"Found")
                util.setData(contactField)
                return util.send(res)
            }
            

            //search shop office contact
            const shopContact = await searchService.searchShopOfficeContact(contact)
            if(shopContact){
                console.log("found in shop office contact")
                util.setSuccess(200,"Found")
                util.setData(shopContact)
                return util.send(res)
            }

            //search building contact
            const bldgContact = await searchService.searchBuildingContact(contact)
            if(bldgContact){
                console.log("found in bilding contact")
                util.setSuccess(200,"Found")
                util.setData(bldgContact)
                return util.send(res)
            }

            util.setFailure(200,"not found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }

}
export default searchController;