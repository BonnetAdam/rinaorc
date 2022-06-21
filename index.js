const axios = require('axios');
class Rinaorc {
    constructor(key, debug){
        this.key = key;
        this.instance = axios.create({
            baseURL: 'https://api.rinaorc.com',
            timeout: 1000,
            headers: {'API-Key': key}
        });
        this.debug = debug || false;
    }

    async player(name){
        let fetched = await this.instance.get(`/player/${name}`).catch(err => {return err})
        if(fetched?.response?.status === 401 && this.debug) return new Error("Invalid API KEY")
        if(fetched?.response?.status === 404 && this.debug) return new Error("Player Not Found")
        else return fetched.data
    }

    async clan(name){
        let fetched = await this.instance.get(`/clan/${name}`).catch(err => {return err})
        if(fetched?.response?.status === 401 && this.debug) return new Error("Invalid API KEY")
        if(fetched?.response?.status === 404 && this.debug) return new Error("Clan Not Found")
        else return fetched.data
    }

    async staff(){
        let fetched = await this.instance.get(`/staff`).catch(err => {return err})
        if(fetched?.response?.status === 401 && this.debug) return new Error("Invalid API KEY")
        if(fetched?.response?.status === 404 && this.debug) return new Error("An error occured")
        else return fetched.data
    }

    async playersStats(){
        let fetched = await this.instance.get(`/stats/players`).catch(err => {return err})
        if(fetched?.response?.status === 401 && this.debug) return new Error("Invalid API KEY")
        if(fetched?.response?.status === 404 && this.debug) return new Error("An error occured")
        else return fetched.data
    }
}

module.exports = {Rinaorc}