const express = require("express");
const router = express.Router();
const { ErrorHandler } = require("../helpers/error");
const kahaki = require("kahaki");

router.get("/metadata", async (req, res, next) => {
    try {
        const { url, subObject } = req.query;
        if(url==undefined || url=="") throw new ErrorHandler(400, "An url is required");
        const subObjectValue = typeof subObject == "boolean" ? subObjectValue : false;
        res.send(await kahaki.getAllMetadata(url,{subObjectValue}))
    } catch (error) {
        next(error)
    }
})

router.get("/jsonld", async (req, res, next) => {
    try {
        const { url } = req.query;
        if(url==undefined || url=="") throw new ErrorHandler(400, "An url is required");
        res.send(await kahaki.getJsonld(url))
    } catch (error) {
        next(error)
    }
})


router.get("/preview", async (req, res, next) => {
    try {
        const { url } = req.query;
        if(url==undefined || url=="") throw new ErrorHandler(400, "An url is required");
        res.send(await kahaki.getPreview(url))
    } catch (error) {
        next(error)
    }
})


module.exports = router;
