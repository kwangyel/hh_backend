import userService from '../services/userService'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Util from '../utils/Utils'
const util=new Util();

class userController{
    static async createHash(req,res){
        const saltrounds = 10
        const {pass} = req.params
        bcrypt.hash(pass,saltrounds,(err,hash)=>{
            res.send(hash) 
        })
    }
    static async login(req,res){
        try{
            const cid = req.body.cid
            const password = req.body.password
            util.setData(null)
            
            if(cid && password){
                const userd = await userService.getAUser(cid)
                if(userd){
                    let token = jwt.sign({username:cid},
                        process.env.SECRET_KEY,
                        {expiresIn:"24h"})
                    
                    if(password == userd['password']){
                            util.setSuccess(200,"Logged in")
                            util.setData({
                                token:token,
                                username:userd['username'],
                                id:userd['id'],
				isadmin:userd['isadmin'],
                            })
                            return util.send(res)
                    }else{
                            util.setFailure(200,"username or password incorrect")
                            return util.send(res)
                    }
                }
                util.setFailure(200,"username or password incorrect")
                return util.send(res)

                // bcrypt.compare(password,user['password'],(err,ismatch)=>{
                //     if(err){
                //         console.log(err)
                //         util.setError(400,"an error occured")
                //         return util.send(res)
                //     }
                //     if(ismatch){
                //         util.setSuccess(200,"Logged in")
                //         util.setData({
                //             token:token,
                //             username:user['username'],
                //             id:user['id'],
                //         })
                //         return util.send(res)
                //     }else{
                //         util.setFailure(200,"username or password incorrect")
                //         return util.send(res)
                //     }
                // })
            }else{
                util.setError(400,"username or password not set")
                return util.send(res)
            }
        }catch(error){
            console.log(error)
            util.setError(400,"An error occured")
            return util.send(res)
        }
    }
}

export default userController;
