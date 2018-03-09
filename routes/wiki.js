const router = require('express').Router()
const { Page } = require("../models");
const addPage = require('../views/addPage')
//replace snippet
const replace = (str) => {
  return str.replace(/ /g, "_");
}

router.get('/', (req, res) => {
    res.send('go to GET /wiki')
})

router.post("/", async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.textArea

    Page.beforeValidate((user) => {
        user.slug = replace(user.title);
    });
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});





router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router
