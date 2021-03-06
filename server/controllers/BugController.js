import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNoteByBugId)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete)
      .delete("/:id/notes/:noteId", this.deleteNoteByBugId)
  }

  async getNoteByBugId(req, res, next) {
    try {
      let data = await noteService.getNoteByBugId(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    //FIXME logic in the controller
    try{
      let data = await bugService.edit(req.params.id, req.body)
      res.send(data)
      } catch(error) {
        next(error)
      }
    }
  async create(req, res, next) {
    try {
      let data = await bugService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
      try {
        let data = await bugService.changeToClosed(req.params.id)
        return res.send("Bug closed")
      } catch (error) {
        next(error)
      }
  }
  async deleteNoteByBugId(req, res, next) {
    try {
      let data = await noteService.deleteNoteByBugId(req.params.noteId)
      return res.send("Note deleted")
    } catch (error) {
      next(error)
    }
  }
}
