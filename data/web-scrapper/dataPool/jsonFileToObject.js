const jsonFilePath = "../dataBase/placeDataWithAddress.json";

import { readFileSync } from "fs";

function jsonFileToObjectHelper(filePath) {
  try {
    const jsonContent = readFileSync(filePath, "utf8");

    const jsonObject = JSON.parse(jsonContent);

    return jsonObject;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return null;
  }
}

export default jsonFileToObjectHelper;

// // Example usage:
// const jsonObject = jsonFileToObjectHelper(jsonFilePath);

// if (jsonObject) {
//   console.log("JSON Object:", jsonObject);
// } else {
//   console.log("Failed to read or parse JSON file.");
// }
