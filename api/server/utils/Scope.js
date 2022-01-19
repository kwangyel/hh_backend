export default class Scope{
  static check(req, scope) {
      if(req.decoded['scope'] == "ALL"){
          return true
      }else if(Number(req.decoded['scope']) == Number(scope)){
          return true
      }else{
          return false
      }
  }
}
