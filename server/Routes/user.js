const express = require("express");
const router = express.Router();


router.get('/user', (req, res) => {
    res.status(200).json({
        message:"get all user"
    })
  })


  router.post('/user', (req, res) => {

  
    const  data = req.body;
    res.status(200).json({
        message:"create user successfuly",
        body:[data]
    })
  })


module.exports = router;