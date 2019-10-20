package steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;

/**
 * Created by LakinduMac on 17/10/19.
 */
public class Validation {

    @Given("^I register without API key$")
    public void iRegisterWithoutAPIKey() throws Throwable {
        given().contentType(ContentType.JSON);

    }

    @Then("^I get a (\\d+) response$")
    public void iGetAResponse(int arg0) throws Throwable {
        testmethods.RegisterWithoutAPIKey();

    }

}
