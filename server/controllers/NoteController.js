import express from "express";
import noteService from "../services/NoteService";
 
export default class ValueController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      //.get("/:id/note", this.getNoteByBugId)
      .put("", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await noteService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
    async getById(req, res, next) {
    try {
      let data = await noteService.getById(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try{
    let data = await noteService.edit(req.params.id)
    res.send(data)
    } catch(error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await noteService.delete(req.params.id)
      res.send("Note deleted")
    } catch (error) {
      next(error)
    }
  }
}
