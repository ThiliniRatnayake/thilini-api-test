package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features/AddNewStations.feature", "src/test/java/features/Validation.feature", "src/test/java/features/VerifyCreatedStationsSaved.feature"},
        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/test-results.json",
        "html:target/test-results-html"})
public class TestRunner {
}