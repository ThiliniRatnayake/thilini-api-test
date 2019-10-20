package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Created by LakinduMac on 20/10/19.
 */
public class VerifyCreatedStationsSaved {
    @Given("^I do a GET operation$")
    public void iDoAGETOperation() throws Throwable {
    }

    @Then("^values for new stations get returned$")
    public void valuesForNewStationsGetReturned() throws Throwable {
        testmethods.CheckStationOne();
    }
}
