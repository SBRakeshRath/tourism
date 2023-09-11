import puppeteer from "puppeteer";

const scrappedPlaceData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  await page.goto(
    "https://www.orissatourism.org/bhubaneswar-destination-guide/",
    {
      waitUntil: "domcontentloaded",
    }
  );

  const placeData = await page.evaluate(() => {
    const placeNames = [];
    const placeDesc = [];
    const container = document.getElementById("top-attraction");
    const card = container.querySelectorAll(".row");
    const cardCount = card.length;
    const placeNamesContainer = container.querySelectorAll("h5");
    placeNamesContainer.forEach((el) => {
      const name = el.innerText;
      placeNames.push(name);
    });
    card.forEach((el) => {
      image = el.querySelectorAll("div")[0].querySelectorAll("img")[0].src;
      desc = el.querySelectorAll("div")[1].querySelectorAll("p")[0].innerHTML;
      placeDesc.push({ image, desc });
    });
    return { placeNames, placeDesc };
  });

  //   console.log(placeData);
  const data = placeData;

  // Close the browser
  await browser.close();

  return data;
};

const data = await scrappedPlaceData();

const { placeNames, placeDesc } = data;

let placeData = [];

placeNames.forEach((el, i) => {
  const name = el;
  const desc = placeDesc[i].desc;
  const image = placeDesc[i].image;
  placeData.push({ name, desc, image });
});

//save the data into json file

import * as fs from "fs";

const jsonData = JSON.stringify(placeData);
try {
  fs.writeFileSync("dataBase/placeData.json", jsonData);
  console.log("Completed");
} catch (error) {
  console.log(error);
}

console.log(placeData);
