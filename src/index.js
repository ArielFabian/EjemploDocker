const app = require('./app')

async function main(){
    await app.listen(3000);
    console.log('Web-server is runnign')
}

main()
