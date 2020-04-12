const express = require("express");
const router = express.Router();
const got = require('got');
const { ErrorHandler } = require("../helpers/error");
const metascraper = require('metascraper')([
    require('metascraper-amazon')(),
    require('metascraper-author')(),
    require('metascraper-clearbit')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-lang')(),
    require('metascraper-logo')(),
    require('metascraper-publisher')(),
    require('metascraper-soundcloud')(),
    require('metascraper-title')(),
    require('metascraper-url')(),
    require('metascraper-spotify')(),
    require('metascraper-youtube')()
]);
  

router.get("/preview", async (req, res) => {

    const { url } = req.query;
    if(url==undefined) throw new ErrorHandler(400, "An url is required");
    
    const { body: html } = await got(url)
    const metadata = await metascraper({ html, url })
    res.send(metadata)

});

module.exports = router;
