import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import geoFire from "geofire-common";
import addressToCoordinate from "./addressToCordinates.js";

// const serviceAccount = require("../firebaseAdminConfig.json");
// import * as serviceAccount from "../firebaseAdminConfig.json"

initializeApp({
  credential: cert("../firebaseAdminConfig.json"),
});

const db = getFirestore();

function generateRandomId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

async function getUniqueId() {
  const uid = generateRandomId(10); // Adjust the length as needed

  const snapshot = await db
    .collection("tourism-place")
    .where("lid", "==", uid)
    .get();
  if (!snapshot.empty) {
    return checkAndStoreUniqueId();
  } else {
    return uid;
  }
}

async function addDataToTourismPlaceTable(data) {
  const dataToBeStored = { ...data };
  try {
    dataToBeStored.lid = await getUniqueId();
    const long = (await addressToCoordinate(data.address)).longitude;
    const lat = (await addressToCoordinate(data.address)).latitude;
    const hash = geoFire.geohashForLocation([lat, long]);

    delete dataToBeStored.address;
    dataToBeStored.locationInfo = {
      lat: lat,
      lng: long,
      fullAddress: data.address,
      geoHash: hash,
    };

    console.log(dataToBeStored);

    const res = await db
      .collection("tourism-places")
      .doc(dataToBeStored.lid)
      .set(dataToBeStored);
  } catch (error) {
    console.log(error);
  }
}

// Add a new document in collection "cities" with ID 'LA'

const data = {
  name: "Vaital Temple",
  desc: "  An 8<sup>th</sup> century construction, Vaital Deul is the epitome of grace and charm. The delicate carvings of figurines and strong tantric influences on the temple make Vaital Deul an interesting study. The temple remains open from morning till late in the night. ",
  image: "https://www.orissatourism.org/helpers/images/vaital-deul-temple.jpg",
  address: "6RRJ+XWG, Barhadanda Road, Old Town, Bhubaneswar, Odisha 751002",
  type: "TEMPLE",
  type_desc: "hindu religious place",
  gstar: "4.5",
};

export default addDataToTourismPlaceTable

// addDataToTourismPlaceTable(data);
