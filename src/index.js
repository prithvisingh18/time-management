import StorageInterface from "./storageInterface";

const storageInterface = new StorageInterface();

const length = process.argv.length;
const action = process.argv[length - 2];
const data = process.argv[length - 1];

if (action === "add") {
} else if (action === "start") {
} else if (action === "stop") {
} else {
  console.log("Wrong arguments.");
}
