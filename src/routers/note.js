const express = require('express')
const Note = require('../models/note')
const authenticate = require('../middleware/authenticate')
const router = new express.Router()

router.post('/notes', authenticate, async (req, res) => {
    const note = new Note({
        ...req.body,
        owner: req.user._id
    })

    try {
        await note.save()
        res.status(201).send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/notes', authenticate, async (req, res) => {
    try {
        await req.user.populate({
            path: 'notes'
        }).execPopulate()
        res.send(req.user.notes)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/notes/:id', authenticate, async (req, res) => {
    const _id = req.params.id

    try {
        const note = await note.findOne({ _id, owner: req.user._id })

        if (!note) {
            return res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/notes/:id', authenticate, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const note = await note.findOne({ _id: req.params.id, owner: req.user._id})

        if (!note) {
            return res.status(404).send()
        }

        updates.forEach((update) => note[update] = req.body[update])
        await note.save()
        res.send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/notes/:id', authenticate, async (req, res) => {
    try {
        const note = await note.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!note) {
            res.status(404).send()
        }

        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
