

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module

const hostController = require('../Controller/hostController')

hostRouter.get("/add-home",hostController.getAddHome) 

hostRouter.post("/add-home",hostController.postAddHome)
hostRouter.get("/host-home-list",hostController.getHomeList)
hostRouter.get("/edit-home/:homeId",hostController.getEditHome)
hostRouter.post("/edit-home",hostController.postEditHome)
hostRouter.post("/delete-home/:homeId",hostController.postDeleteHome)
 

exports.hostRouter = hostRouter;

