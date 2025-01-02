//Space API Endpoints:
//GET /api/v1/spaces/all - Get all spaces
//GET /api/v1/spaces/:id - Get a space by id
//POST /api/v1/spaces - Create a new space
//PUT /api/v1/spaces/:id - Update a space by id
//DELETE /api/v1/spaces/:id - Delete a space by id
//JOIN A SPACE - POST /api/v1/spaces/:id/join
//LEAVE A SPACE - POST /api/v1/spaces/:id/leave
//GET ALL MEMBERS OF A SPACE - GET /api/v1/spaces/:id/members

import { Router } from "express";

export const spaceRouter = Router();

spaceRouter.get("/all", (req, res) => {
    
});

spaceRouter.get("/:id", (req, res) => {

});

spaceRouter.post("/", (req, res) => {

});

spaceRouter.put("/:id", (req, res) => {

});

spaceRouter.delete("/:id", (req, res) => {

});

spaceRouter.post("/:id/join", (req, res) => {

});

spaceRouter.post("/:id", (req, res) => {

});

spaceRouter.get(":/id/members", (req, res) => {
    
})