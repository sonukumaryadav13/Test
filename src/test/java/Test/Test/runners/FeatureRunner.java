package Test.Test.runners;
 
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
 
@CucumberOptions(features = "src/test/resources/features/NewEra_433.feature",
glue = "Test.Test.glue",
format = { "pretty","html:target/reports",
"json:target/cucumber.json" }, tags = {"~@ignore" })




//@CucumberOptions(strict = false, features = &quot;features&quot;, 



public class FeatureRunner extends AbstractTestNGCucumberTests {
}