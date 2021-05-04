import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'
import checktoken from './server/middlewares/checkToken'
import buildingRoutes from './server/routes/buildingRoutes'
import dzongkhagRoutes from './server/routes/dzongkhagRoutes'
import householdRoutes from './server/routes/householdRoutes'
import imageRoutes from './server/routes/imageRoutes'
import structureRoutes from './server/routes/structureRoutes'
import zoneRoutes from './server/routes/zoneRoutes'
import apiRoutes from './server/routes/apiRoutes'
import memberRoutes from './server/routes/memberRoutes'
import userRoutes from './server/routes/userRoutes'
import caseRoutes from './server/routes/caseRoutes'

import fs from 'fs'
import util from 'util'
import zoneController from './server/controllers/zoneConstoller'


config.config()

const app=express()
const port = process.env.PORT || 8080

if(process.env.NODE_ENV == "production"){
	var log_file = fs.createWriteStream(__dirname + '/debug.log',{flags: 'w'})
	console.log = function(d){
		log_file.write(util.format(d)+'\n');
	}
}

//basic starter middlewares
app.use(cors())
app.use(bodyparser.json({limit:'50mb'}))
app.use(bodyparser.urlencoded({limit:'50mb',extended:false}))

app.get('/',(req,res)=>{
	res.send("Welcome to the Household survey API")
})

app.use(express.static(__dirname + '/public'));

//protected enum routes
//app.use('/enum',checktoken.checkToken,enumRoutes)

app.use('/building',buildingRoutes)
app.use('/dzongkhag',dzongkhagRoutes)
app.use('/household',householdRoutes)
app.use('/image',imageRoutes)
app.use('/structure',structureRoutes)
app.use('/zone',zoneRoutes)
app.use('/api',apiRoutes)
app.use('/member',memberRoutes)
app.use('/user',userRoutes)
app.use('/case',caseRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})

export default app;
