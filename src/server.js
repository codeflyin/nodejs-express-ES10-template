import express from 'express'
const app = express()

// setting
app.set('port', process.env.PORT || 5000)

// router
app.get('/', (req, res) => res.json({work: 'working'}))

export default app
