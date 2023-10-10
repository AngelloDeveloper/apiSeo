const { Router }   = require('express')
const userRouter   = Router()

//controllers
const {
    getAccessToken
} = require('../controllers/controllers');

//end-points

userRouter.post('/auth/getAccessToken', async (req, res) => {
   const resp = await getAccessToken;
   console.log(resp);
})

userRouter.get('/sendMessages', async (req, res) => {
    
})
  


module.exports = userRouter