package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Created by LakinduMac on 20/10/19.
 */
public class AddNewStations {

    @Given("^I perform post operation for station (\\d+)$")
    public void iPerformPostOperationForStation(int arg0) throws Throwable {
        testmethods.RegisterFirstStation();
    }

    @Then("^test$")
    public void test() throws Throwable {

    }

    @Given("^I perform post operation for statoion (\\d+)$")
    public void iPerformPostOperationForStatoion(int arg0) throws Throwable {
        testmethods.RegisterSecondStation();
    }
}
