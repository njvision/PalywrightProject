import {test, expect} from "@playwright/test";

test.beforeAll(async ({playwright}) => {
    //connect to server
    //connect to database
});

test.beforeEach(async ({page}, testInfo) => {
    console.log('Running test: %d', testInfo.title);
    //open URL
    //create page object
    //clean up database
});

test.afterAll(async ({page}, testInfo) => {
    console.log('Test run finished');
    //close database connection
});

test.afterEach(async ({page}, testInfo) => {
    console.log('Finished %d with status %d', testInfo.title, testInfo.status);
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log('Did not run as expected, ended at %d', page.url());
    }
//clean up database
});