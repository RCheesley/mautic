<?php


class SegmentsCest
{
    public function _before(\Step\Acceptance\Login $I)
    {
        $I->loginAsUser(); // Check for existing session or log in
        $I->amOnPage('/s/dashboard'); // Go to dashboard
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function createPublicSegmentNoFilters(AcceptanceTester $I)
    {
        $I->amOnPage('/s/segments');
        $I->dontSee('Simple Test Segment'); // Check we don't already have a test segment
        $I->makeScreenshot('confirm-no-segment');
        $I->click('//*[@id="toolbar"]/div[1]/a/span/span'); // Click to create a new segment
        $I->waitForElementVisible('//*[@id="leadlist_name"]', 5); // Wait for the form to load
        $I->fillField('//*[@id="leadlist_name"]', 'Simple Test Segment');
        $I->fillField('//*[@id="details"]/div[2]/div/div/div/div/div[3]/div', 'This is a simple, public test segment created by automated tests with no filters applied');
        $I->click('//*[@id="leadlist_buttons_save_toolbar"]');
        $I->wait(1);
        $I->see('Simple Test Segment');
        $salesuser = $I->haveFriend('sales-user'); // Establish a session in a new window so we can log in as a different user
        $salesuser->does(function (AcceptanceTester $I) {
            $I->amOnPage('/s/login'); // Log in using the sample data sales user
            $I->fillField('//*[@id="username"]', 'sales');
            $I->fillField('//*[@id="password"]', 'mautic');
            $I->click('.//*[@id="main"]/div/div[1]/div/div/div/form/button');
            $I->amOnPage('/s/segments');
            $I->see('Simple Test Segment'); // As the segment is public, it should be visible to other users with access to segments
        });
        $salesuser->leave(); // Close the second browser window
    }

    public function createPrivateSegmentNoFilters(AcceptanceTester $I)
    {
        $I->amOnPage('/s/segments');
        $I->dontSee('Simple Private Test Segment'); // Check we don't already have a test segment
        $I->makeScreenshot('confirm-no-segment');
        $I->click('//*[@id="toolbar"]/div[1]/a/span/span'); // Click to create a new segment
        $I->waitForElementVisible('//*[@id="leadlist_name"]', 5); // Wait for the form to load
        $I->fillField('//*[@id="leadlist_name"]', 'Simple Private Test Segment');
        $I->fillField('//*[@id="details"]/div[2]/div/div/div/div/div[3]/div', 'This is a simple, private test segment created by automated tests with no filters applied');
        $I->click('//*[@id="app-content"]/div/form/div[1]/div[2]/div/div[1]/div/div/div/label[1]/span');
        $I->click('//*[@id="leadlist_buttons_save_toolbar"]');
        $I->wait(1);
        $I->see('Simple Private Test Segment');
        $salesuser = $I->haveFriend('sales-user'); // Establish a session in a new window so we can log in as a different user
        $salesuser->does(function (AcceptanceTester $I) {
            $I->amOnPage('/s/login'); // Log in using the sample data sales user
            $I->fillField('//*[@id="username"]', 'sales');
            $I->fillField('//*[@id="password"]', 'mautic');
            $I->click('.//*[@id="main"]/div/div[1]/div/div/div/form/button');
            $I->amOnPage('/s/segments');
            $I->dontsee('Simple Private Test Segment'); // As the segment is private, it should NOT be visible to other users with access to segments
        });
        $salesuser->leave(); // Close the second browser window
    }
}
