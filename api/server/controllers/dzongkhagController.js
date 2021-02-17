import dzongkhagService from '../services/dzongkhagService'
import Util from '../utils/Utils'

const util=new Util();

class dzongkhagController{

    static async retrieveAll(req,res){
        util.setData(null)

        try{
            const item = await dzongkhagService.retrieveAll()

            if(item){
                util.setSuccess(200,"Got dzongkhags")
                util.setData(item)
                return util.send(res)
            }
            util.setFailure(200,"No record found")
            return util.send(res)
        }catch(err){
            console.log(err)
            util.setError(200,"Error")
            return util.send(res)
        }
    }
}
export default dzongkhagController;