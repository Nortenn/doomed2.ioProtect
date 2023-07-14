const ms = 500

const users = {
  isActive: true,
  1: {
    name: 'norton',
    ip: 'none'
  }
}

const init: () => console.log('server started')

setTimeout(() => init(), ms)
