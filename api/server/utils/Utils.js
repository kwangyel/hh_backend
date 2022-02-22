export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.dataArray = [];
    this.message = null;
  }

  setSuccess(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'true';
  }
  setFailure(statusCode,message){
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'false';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  setData(data){
    this.data = data;
  }

  clearDataArray(){
    this.dataArray = [];
  }
  setDataArray(data){
    this.dataArray.push(...data);
  }

  send(res) {
    const result = {
      success: this.type,
      message: this.message,
      data: this.data,
    }
    const arrResult = {
      success: this.type,
      message: this.message,
      data: this.dataArray
    }

    if (this.dataArray.length > 0) {
      return res.status(this.statusCode).json(arrResult);
    }
    if (this.data) {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      success: this.type,
      message: this.message,
    });
  }
}
