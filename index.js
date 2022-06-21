const axios = require('axios');
class Rinaorc {
    constructor(key, debug){
        this.key = key;
        this.instance = axios.create({
            baseURL: 'https://api.rinaorc.com',
            timeout: 1000,
            headers: {'API-Key': key}
        });
        this.debug = debug;
    }

    async player(name){
        let fetched = await this.instance.get(`/player/${name}`).catch(err => {return err})
        if(fetched?.response?.status === 404 && this.debug) return new Error("Player Not Found")
        else return fetched.data
    }
}

module.exports = {Rinaorc}