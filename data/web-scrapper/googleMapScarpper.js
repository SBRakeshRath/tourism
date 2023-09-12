import puppeteer from "puppeteer";

//functions

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const scrappedPlaceData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  await page.goto(
    "https://www.google.com/maps/@20.3644041,85.8179029,15z?entry=ttu",
    {
      waitUntil: "domcontentloaded",
    }
  );

  const placeData = await page.evaluate(async () => {
    async function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const searchBox = document.getElementById("searchboxinput");
    searchBox.value = "Lingraj Temple";
    await sleep(5000);

    // press enter

    const enterKeyPress = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      which: 13,
      charCode: 13,
      bubbles: true,
      cancelable: true,
    });

    searchBox.dispatchEvent(enterKeyPress);
    await sleep(5000);
    // searchBox.dispatchEvent(enterKeyPress);

    document.click()
    await sleep(1000)

    const addressElement = document.querySelector("#QA0Szd > div > div > div.w6VYqd > div.bJzME.Hu9e2e.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.DxyBCb.kA9KIf.dS8AEf > div:nth-child(11) > div:nth-child(3) > button > div > div.rogA2c > div.Io6YTe.fontBodyMedium.kR99db");

// Now you can work with the 'element' variable, for example, accessing its properties or adding event listeners.

    // #QA0Szd > div > div > div.w6VYqd > div.bJzME.Hu9e2e.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.DxyBCb.kA9KIf.dS8AEf > div:nth-child(11) > div:nth-child(3) > button > div > div.rogA2c > div.Io6YTe.fontBodyMedium.kR99db
    console.log(addressElement.innerHTML)
    console.log("finished")
    // #searchbox-searchbutton
  });

  //   console.log(placeData);
  const data = placeData;

  // Close the browser
    // await browser.close();
    console.log("finished")


  return data;
};

const data = await scrappedPlaceData();
