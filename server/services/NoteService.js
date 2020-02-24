import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);
 
class NoteService {

  async getNoteByBugId(BugId){
    return await _repository.find( {
      bug: BugId
    })
  }
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id)
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
  async deleteNoteByBugId (noteId) {
    await _repository.findByIdAndDelete(noteId)
  }
}

const noteService = new NoteService();
export default noteService;
