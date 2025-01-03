//  User API Endpoints:
//     1. POST /api/v1/user/signup        //create a new user
//     2. POST /api/v1/user/signin        //login the user
//     3. GET /api/v1/user/logout         //delete the token
//     4. GET /api/v1/user/profile/:id    //get the user profile
//     5. PUT /api/v1/user/profile/:id    //update the user profile
//     6. DELETE /api/v1/user/profile/:id //delete the user profile

import { Router } from "express";
import client from "@repo/db/client"

export const userRouter = Router();

userRouter.post("/signup", (req,res) => {
    res.json({
        message: "This is the signup route"
    })
})

userRouter.post("/signin", (req, res) => {
    res.json({
        message: "This is the signin route"
    })
})

userRouter.get("/logout", (req, res) => {
    res.json({
        message: "This is the logout route"
    })
});

userRouter.get("/profile/:id", (req, res) => {
    res.json({
        message: "This is the profile route"
    })
});

userRouter.put("/profile/:id", (req, res) => {
    res.json({
        message: "This is the update profile route"
    })
});

userRouter.delete("/profile/:id", (req, res) => {
    res.json({
        message: "This is the profile delete route"
    })
});




