let config = require('../config');
const fetch = require("node-fetch");
class SafeRequest{
    constructor(url){
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(){
        let result = {
            code: 0,
            data:[],
            message:''
        };

        return new Promise((resolve, reject) => {
            let bookFetch = fetch(this.baseUrl + this.url);
            bookFetch.then(res => res.json())
            .then(json => {
                result.data = json;
                resolve(result);
            }).catch(error => {
                result.code = 1;
                result.message = '❌fetch 请求数据失败';
                reject(result);
            })
        })
    }
}
module.exports = SafeRequest;