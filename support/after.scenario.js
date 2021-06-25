
import { After, Status, Before } from "cucumber";

After(function (scenarioResult) {
    //if (scenarioResult.status === Status.FAILED) {
    // Attach the original state
    const screenshot = browser.saveScreenshot();
    world.attach(screenshot, 'image/png');
    //}

    return Promise.resolve(scenarioResult.status);
});