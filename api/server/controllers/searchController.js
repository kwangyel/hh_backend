
import searchService from '../services/searchService'
import Util from '../utils/Utils'

const util=new Util();

class searchController{
    
    static async searchCid (req,res){
        // util.setData(null);
        util.clearDataArray();

        const cid = req.body.cid
        if(cid == undefined){
            util.setError(200,"need to set cid")
            return util.send(res)
        }

        try{
            //search contact field of household
            const householdCid = await searchService.searchHouseholdCid(cid)
            if(householdCid.length > 0){
                console.log("found in cid household")
                util.setSuccess(200,"Found")
                // util.setData(householdCid)
                util.setDataArray(householdCid)
                // return util.send(res)
            }
            

            //search shop office contact
            const ownerCid = await searchService.searchOwnerCid(cid)
            if(ownerCid.length > 0){
                console.log("found in Building cid")
                util.setSuccess(200,"Found")
                // util.setData(ownerCid)
                util.setDataArray(ownerCid)
                // return util.send(res)
            }

            if(util.dataArray.length > 0){
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
        util.clearDataArray();

        const contact = req.body.contact
        console.log(req.body.contact)
        if(contact == undefined){
            util.setError(200,"need to set contact")
            return util.send(res)
        }

        try{
            //search contact field of household
            const contactField = await searchService.searchHouseholdResidentailContact(contact)
            if(contactField.length > 0){
                console.log("found in contact household")
                util.setSuccess(200,"Found")
                // util.setData(contactField)
                util.setDataArray(contactField)
                // return util.send(res)
            }
            

            //search shop office contact
            const shopContact = await searchService.searchShopOfficeContact(contact)
            if(shopContact.length > 0){
                console.log("found in shop office contact")
                util.setSuccess(200,"Found")
                // util.setData(shopContact)
                util.setDataArray(shopContact)
                // return util.send(res)
            }

            //search building contact
            const bldgContact = await searchService.searchBuildingContact(contact)
            if(bldgContact.length > 0){
                console.log("found in bilding contact")
                util.setSuccess(200,"Found")
                // util.setData(bldgContact)
                util.setDataArray(bldgContact)
                // return util.send(res)
            }

            if(util.dataArray.length>0){
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