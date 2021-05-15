let puppeteer = require("puppeteer");

let gtab;
console.log("before");

let browerPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized",]
})

browerPromise.then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
}).then(function (newTab) {
    let loginPageWillBeOpened = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    gtab = newTab;
    return loginPageWillBeOpened;
}).then(function () {
    let emailWillBeTyped = gtab.type("#input-1", "kocipe1879@asfalio.com", { delay: 200 });
    return emailWillBeTyped;
}).then(function () {
    let pswrdWillBeTyped = gtab.type("#input-2", "Shanu@123", { delay: 200 });
    return pswrdWillBeTyped;
}).then(function () {
    let loginWillBeClicked = gtab.click("button[data-analytics='LoginPassword']");
    let combinedPromise = Promise.all([loginWillBeClicked, gtab.waitForNavigation({ waitUntil: "networkidle0" })]);
    return combinedPromise;
}).then(function () {
    let clickPromise = gtab.click(".card-content h3[title='Interview Preparation Kit']");
    let WarmUpPromise = gtab.waitForSelector("a[data-attr1='warmup']",{visible:true});
    let combinedPromise = Promise.all([clickPromise, gtab.waitForNavigation({ waitUntil: "networkidle0" }),WarmUpPromise]);
    return combinedPromise;
})
.then(function () {
    let clickPromise = gtab.click("a[data-attr1='warmup']");
    let sockMerchantPromise = gtab.waitForSelector("a[data-attr1='sock-merchant']",{visible:true});
    let combinedPromise = Promise.all([clickPromise, gtab.waitForNavigation({ waitUntil: "networkidle0" }),sockMerchantPromise]);
    return combinedPromise;
})
.then(function () {
    let clickPromise = gtab.click("a[data-attr1='sock-merchant']");
    let combinedPromise = Promise.all([clickPromise, gtab.waitForNavigation({ waitUntil: "networkidle0" })]);
    return combinedPromise;
})
.catch(function (err) {
    console.log(err);
})
console.log("after");