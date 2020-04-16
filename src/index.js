import '@babel/polyfill'
import app from './server'

async function main () {
  await app.listen(5000)
  console.log('running on port:', app.get('port'))
}

main()
