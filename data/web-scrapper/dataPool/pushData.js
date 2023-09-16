import addDataToTourismPlaceTable from "./addDataToTourismPlaceTable.js";
import jsonFileToObjectHelper from "./jsonFileToObject.js";

const arrayOfData = jsonFileToObjectHelper(
  "../dataBase/placeDataWithAddress.json"
);

arrayOfData.forEach(async (element) => {
  try {
    await addDataToTourismPlaceTable(element);
  } catch (error) {
    console.log(error);
  }
  console.log(element);
});
