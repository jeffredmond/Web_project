module.exports = {
  register (req, res) {
    res.send({
      message: `hey hey hey what you think you're doing ${req.body.email}`
    })
  }
}
