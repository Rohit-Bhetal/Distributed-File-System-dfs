const crypto = require('crypto')

module.exports= keyGenerator =()=>{
      return crypto.randomBytes(8).toString('hex');
}
