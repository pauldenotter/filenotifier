const chokidar = require('chokidar')
const got = require('got')

chokidar.watch(process.env.WATCH_PATH).on('add', path => {
  got.post(process.env.WEBHOOK_URL, {
    json: {
      text: `Added file ${path}`
    }
  })
})
