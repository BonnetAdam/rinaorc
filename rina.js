const {Rinaorc} = require('./index')

let api = new Rinaorc("ecb26c86-3c5b-406b-ae20-740276d955d8", true)

main()

async function main() {
    console.log(await api.staff())
}