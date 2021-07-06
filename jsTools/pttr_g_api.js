// @ts-nocheck

(async () => {
  const Rize = require("rize")
  const puppeteer = require("puppeteer")
  const fs = require("fs")

  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    // headless: false,
    // slowMo: 50,
    // devtools: true
  })

  const rize = new Rize({
    browser,
  })

  await rize.goto("http://apidoc.shebao.net/login")
    .type("#email", "xxxxxxxx.com")
    .type("#password", "xxxxxxxx")
    .press("Enter")
    .waitForNavigation()
    .goto("http://apidoc.shebao.net/project/1053/interface/api/cat_14796")
    .sleep(2000)

  const data = await rize.evaluateWithReturn(() =>
    Object.fromEntries(
      Array.from(document.getElementsByClassName("ant-table-row-level-0")).map(
        (item) => [item.children[0].innerText, item.children[1].innerText]
      )
    )
  )

  await fs.writeFileSync("./api.jsonc", JSON.stringify(data), {
    encoding: "utf-8",
  })
  rize.end()
})()