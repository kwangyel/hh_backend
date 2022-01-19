import dzongkhagService from '../services/dzongkhagService'
import Util from '../utils/Utils'

const util=new Util();

class dzongkhagController{
    static async retireve(req,res){
        util.setData(null)
        const {id} = req.params
        try{
            const item = await dzongkhagService.retrieve(id)
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

    static async retrieveAll(req,res){
        util.setData(null)
        if(req.decoded['scope'] == 'ALL'){

        }else{
            let dzo_code = Number(req.decoded['scope'])
            try{
                const item = await dzongkhagService.retrieve(dzo_code)

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