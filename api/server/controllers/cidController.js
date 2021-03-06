import tokenService from '../services/tokenService';
import Util from '../utils/Utils'
import request from 'request'

const util = new Util();

const requestUrl = async (opts)=>{
    return new Promise((resolve,reject)=>{
        try{
            request.post(opts,(err,res,body)=>{
                if(!err && res.statusCode == 200){
                    resolve(body)
                }else{
                    reject(err)
                }
            })
        }catch(err){
            console.log(err)
            throw err
        }
    })
}

const requestCid = (opts)=>{
    return new Promise((resolve,reject)=>{
        try{
            request.get(opts,(err,res,body)=>{
                if(!err && res.statusCode == 200){
                    console.log(body)
                    resolve(body)
                }else{
                    reject(err)
                }
            }) 
        }catch(err){
            console.log(err)
            throw err
        }
    })
}

const getAccessToken = async ()=>{
    const url = "https://staging-datahub-apim.dit.gov.bt/token?grant_type=client_credentials"
    // const url = "https://datahub-apim.dit.gov.bt/token?grant_type=client_credentials"
    const tokenoptions = {
        url: url,
        headers:{ "Authorization": "Basic " + process.env.CID_TOKEN_HEADER },
        rejectUnauthorized: false
    }
    const accessToken = await tokenService.getByService("cid")
    try{
        if(accessToken){
            const expiry = new Date(accessToken.expiry)
            const now = new Date(Date.now())
            console.log(expiry)

            if(now.getTime() >= expiry.getTime()){
                //refresh token 
                console.log('expired, refreshing token')
                const r = await requestUrl(tokenoptions)
                const resp = JSON.parse(r)
                console.log(resp.access_token)
                let exp = new Date()
                let now = new Date(Date.now())
                let expiresIn =  exp.setTime(now.getTime() + (resp.expires_in * 1000))
                let obj = {
                    service: "cid",
                    token : resp.access_token,
                    expiry: expiresIn
                }
                console.log(obj)
                console.log("deleting the object")
                const deleted = await tokenService.delete("cid")
                const created = await tokenService.create(obj)
                return created
            }else{ 
                // valid token
                return accessToken
            }
        }else{
            console.log('not token. Getting one now')
            const r = await requestUrl(tokenoptions)
            const resp = JSON.parse(r)
            console.log(resp.access_token)

            let exp = new Date()
            let now = new Date(Date.now())
            let expiresIn =  exp.setTime(now.getTime() + (resp.expires_in * 1000))
            let obj = {
                service: "cid",
                token : resp.access_token,
                expiry: expiresIn
            }
            console.log(obj)
            const created = await tokenService.create(obj)
            console.log("create new token")
            return created
        }
    }catch(err){
        throw err
    }
}

class cidApiController{

    static async queryCid(req,res){
        const {cid} = req.params

        try{
            const cidToken = await getAccessToken()
            const cidOption= {
                url: "https://staging-datahub-apim.dit.gov.bt/dcrc_individualcitizendetailapi/1.0.0/citizendetail/"+cid,
                headers:{ "Authorization": "Bearer " + cidToken.token},
                rejectUnauthorized: false
            }

            //cid api
            console.log(cidOption)
            const cidr = await requestCid(cidOption)
            const cidResp = JSON.parse(cidr)
            console.log(cidResp)
            util.setSuccess(200,"success")
            util.setData(cidResp)
            return util.send(res)
        }catch(err){
            console.log(err)
            throw err
        }
    }
}
export default cidApiController;