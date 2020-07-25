import fs from "fs";
import { v5 as uuidv5 } from "uuid";

const NAMESPACE = "a32412b0-ce47-11ea-87d0-0242ac130003";

const path = `${__dirname}/../storage/`;
const tasksPath = `${path}tasks.json`;
const timePath = `${path}time.json`;

export default class StorageInterface {
  constructor() {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    if (!fs.existsSync(tasksPath)) {
      fs.writeFileSync(tasksPath, "");
    }
    if (!fs.existsSync(timePath)) {
      fs.writeFileSync(timePath, "");
    }
  }

  addTask(task, description) {}

  startTask(task) {}

  stopTast() {}

  listTasks() {}
}
