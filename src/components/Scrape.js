const puppeteer = require("puppeteer");

const urlNfl =
  "https://www.bovada.lv/sports/football/nfl-futures/super-bowl-54-2020-odds-to-win-202001051830";
const urlNhl =
  "https://www.bovada.lv/sports/hockey/nhl/2019-stanley-cup-odds-to-win-201906301845";

async function scrapeIndexPage(urlNfl) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(urlNfl);

    const html = await page.evaluate(function() {
      // Need to pluck values withing evaluate: https://stackoverflow.com/questions/37018789/nightmarejs-document-getelementsbyclassname-return-empty-object
      var elements = Array.from(document.querySelectorAll(".bet-btn"));
      return elements.map(function(element) {
        return {
          team: element.children[0].innerHTML,
          moneyline: element.children[1].innerText
        };
      });
    });

    console.log(html);
  } catch (err) {
    console.log(err);
  }
}

export default function Scrape(url) {
  scrapeIndexPage(url);
}
