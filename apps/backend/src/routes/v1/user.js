//  User API Endpoints:
//     1. POST /api/v1/user/signup        //create a new user
//     2. POST /api/v1/user/signin        //login the user
//     3. GET /api/v1/user/logout         //delete the token
//     4. GET /api/v1/user/profile/:id    //get the user profile
//     5. PUT /api/v1/user/profile/:id    //update the user profile
//     6. DELETE /api/v1/user/profile/:id //delete the user profile

import { Router } from "express";
import { LoginSchema, SignupSchema } from "../../types/index.js";
import client from "@repo/db/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../../config.js";

export const userRouter = Router();

userRouter.post("/signup", async (req,res) => {
    const {username, password} = SignupSchema.parse(req.body);
    if(!username || !password) {
        return res.status(400).json({
            message: "Invalid input"
        })
    }
    else{
        try {
            const hashedPass = await bcrypt.hash(password, 10);
            const userExists = await client.user.findUnique({
                where: {
                    username
                }
            });

            if(userExists){
                res.status(400).json({
                    message: "User already exists"
                })
            }
            
            const user = await client.user.create({
                data: {
                    username: username,
                    password: hashedPass
                }
            });
            return res.status(201).json({
                message: "User created successfully",
                userId: user?.id
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
})

userRouter.post("/signin", async(req, res) => {
    const {username, password} = LoginSchema.parse(req.body);

    if(!username || !password) {
        return res.status(400).json({
            message: "Invalid input"
        })
    }
    else{
        try {
            const user = await client.user.findUnique({
                where: {
                    username
                }
            });

            if(!user){
                return res.status(400).json({
                    message: "User not found"
                })
            }

            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid){
                return res.status(400).json({
                    message: "Invalid password"
                })
            }

            const token = jwt.sign({
                userId: user.id
            }, JWT_PASSWORD
            );

            return res.status(200).json({
                message: "User logged in successfully",
                token
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }

})

userRouter.get("/logout", (req, res) => {
    //invalidating the token by clearing the cookie
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
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




