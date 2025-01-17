import express from "express";

const router = express.Router();

router.post("/add", (req, res) => {
    res.status(200).send("add customer");
})

export default router;