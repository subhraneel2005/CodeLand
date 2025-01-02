import { Router } from "express";
import { userRouter } from "./user.js";
import { spaceRouter } from "./spaces.js";

export const router = Router();

router.use('/user', userRouter); 
//all the requests that come to /api/v1/user will be redirected to the userRouter

router.use("/spaces", spaceRouter);
//all the requests that come to /api/v1/space will be redirected to the spacerouter