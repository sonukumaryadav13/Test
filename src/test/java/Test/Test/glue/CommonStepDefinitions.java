package Test.Test.glue;

import cucumber.api.java.*;
import org.testng.annotations.Parameters;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Parameters;
import Test.Test.page.objects.LoginPage;
import Test.Test.page.objects.MyAccountPage;

 
public class CommonStepDefinitions extends AbstractStepDefinition {
	
	WebDriver driver = getDriver();
//	Wait<WebDriver> fluentwait = getWaitDriver();

	

	@Given("^user is on Testserver \"([^\"]*)\"$")
	public void user_is_on_Testserver(String URL) throws Exception{
	 
		driver.get(URL);
		LoginPage LoginPage = new LoginPage();
	//	fluentwait.until(ExpectedConditions.visibilityOfElementLocated((By) LoginPage.Login));
		highlight(LoginPage.Login);
	
	}
	
	
	@Given("user is logged in as with these credentials, username: \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void login(String username, String password) throws Exception{
		LoginPage LoginPage = new LoginPage();
		LoginPage.Username.sendKeys(username);
		LoginPage.Password.sendKeys(password);
		LoginPage.LoginButton.click();
	//	highlight(LoginPage.LoginButton);
		
	}
	
	@Given("^My account screen is displayed$")
	public void my_account_screen_is_displayed() throws Exception{// throws Exception{
		
		WebDriverWait wait = new WebDriverWait(driver,250);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("flexbox-self-align-middle")));
		
		
	//	WebElement YourAccountText = driver.findElement(By.xpath("html/body/div[1]/div/div/form/input[4]"));
		
		if( driver.findElement(By.className("flexbox-self-align-middle")).isDisplayed()){
					
			System.out.println("User is in my account page");
			}else{
			System.out.println("My account text is not present");
			}
//		highlight(YourAccountText);
	}
		
	
	@Given("^that I am a \"([^\"]*)\"$")
	public void that_I_am_a(String Customer) {
		System.out.println("Customer type is: "+Customer);

	}


	@Then("^close the browser$")
	public void close_the_browser(){
		
		closeBrowser();
		
	 
	}
  
}