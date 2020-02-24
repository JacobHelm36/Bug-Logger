import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({}).populate("Note");
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async edit(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
    
  }
  async changeToClosed(id) {
    let bug = await _repository.findById(id)
    if (bug["closed"] == false) {
      bug["closed"] = true
      bug["closedDate"] = Date()
      await _repository.findOneAndUpdate({_id: id}, 
        {$currentDate:
          {"lastEditDate": {$type: "date"}
      }
    })
      await bug.save()
    }
  }
}

const bugService = new BugService();
export default bugService;
