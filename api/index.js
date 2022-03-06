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
import statRoutes from './server/routes/statRoutes'
import convertRoutes from './server/routes/convertRoutes'
import redBuildingRoutes from './server/routes/redBuildingRoutes'
import searchRoutes from './server/routes/searchRoutes'
import dataRoutes from './server/routes/dataRoutes'
import redflatRoutes from './server/routes/redflatRoutes'
import sealhistoryRoutes from './server/routes/sealhistoryRoutes'
import redmemberRoutes from './server/routes/redmemberRoutes'

import fs from 'fs'
import util from 'util'


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
// app.use('/enum',checktoken.checkToken,caseRoutes)

app.use('/building',buildingRoutes)
app.use('/dzongkhag',checktoken.checkToken,dzongkhagRoutes)
app.use('/household',householdRoutes)
app.use('/image',imageRoutes)
app.use('/structure',structureRoutes)
app.use('/zone',zoneRoutes)
app.use('/api',apiRoutes)
app.use('/member',memberRoutes)
app.use('/user',userRoutes)
app.use('/case',checktoken.checkToken, caseRoutes)
app.use('/red-building', checktoken.checkToken, redBuildingRoutes)
// app.use('/red-building', redBuildingRoutes)
app.use('/stat',statRoutes)
app.use('/kml',convertRoutes)
app.use('/search',searchRoutes)
app.use('/data',dataRoutes)
app.use('/red-flat',redflatRoutes)
app.use('/seal',sealhistoryRoutes)
app.use('/red-member',redmemberRoutes)

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})

export default app;