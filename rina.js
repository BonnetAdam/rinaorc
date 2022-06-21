const {Rinaorc} = require('./index')

let api = new Rinaorc("ecb26c86-3c5b-406b-ae20-740276d955d8", true)

main()

async function main() {
    console.log(await api.playerName("ba3cc7da-3dbc-4e4f-a0bd-8cd04d670ea1"))
}