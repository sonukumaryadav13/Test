package Test.Test.glue;

import cucumber.api.PendingException;
import cucumber.api.java.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

import org.testng.annotations.Parameters;

import com.thoughtworks.selenium.Selenium;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Parameters;
import Test.Test.page.objects.HomePage;
import Test.Test.page.objects.MyAccountPage;
import Test.Test.page.objects.ViewBill;



 
public class StepDefinitions extends AbstractStepDefinition {
	
	
	/*
	public StepDefinitions(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
*/


//	WebDriver driver1= getDriver();// = 
//	Wait<WebDriver> fluentwait = getWaitDriver();


	
	
    @Given("^there is an agreed URL structure$")
    public void given_there_is_an_agreed_URL_structure() {
      
    }

    @When("^a customer visits the view bill page$")
    public void a_customer_visits_the_view_bill_page() throws Exception  {
    	HomePage HomePage = new HomePage();
    	
    		
    		WebDriverWait wait = new WebDriverWait(driver,50);
    		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("account-men")));
    		
    		
    	//	WebElement YourAccountText = driver.findElement(By.xpath("html/body/div[1]/div/div/form/input[4]"));
    		
    		if(HomePage.YourAccountMenu.isDisplayed()){
    					
    			System.out.println("Account menu is displayed");
    			}else{
    			System.out.println("Account menu is not displayed");
    			}
//    		highlight(YourAccountText);
    	
    		
    	HomePage.YourAccountMenu.click();
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[href*='/bill']")));
		
		
    	//	WebElement YourAccountText = driver.findElement(By.xpath("html/body/div[1]/div/div/form/input[4]"));
    		
    		if(HomePage.MenuViewBill.isDisplayed()){
    					
    			System.out.println("View bill option is displayed");
    			}else{
    			System.out.println("View bill option is not displayed");
    			}
    	HomePage.MenuViewBill.click();
   // 	highlight(HomePage.MenuViewBill);
    	}

    @Then("^the URL is eonenergy\\.com/\"(.*?)\"- not eonenergy\\.com/ViewBill$")
    public void the_URL_is_eonenergy_com_not_eonenergy_com_ViewBill(String bill){
    	
    	WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".c-card__callout")));
		if(driver.findElement(By.cssSelector(".c-card__callout")).isDisplayed()){
			
			System.out.println("View bill page is displayed");
			}else{
			System.out.println("View bill page is not displayed");
			}
        	
    	String URL = driver.getCurrentUrl();
    	String[] parts = URL.split("/");
    	URL = parts[3];
    	
    	Assert.assertEquals(URL, bill);
    }

   
    
    @Given("^As a fixed direct debit customer$")
    public void as_a_fixed_direct_debit_customer() {
    }

    @When("^I view my next direct debit amount$")
    public void i_view_my_next_direct_debit_amount(){
    	WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("c-card__callout")));
    }

  
    
    @Then("^show me the amount including pounds and pence$")
    
    public void show_me_the_amount_including_pounds_and_pence_ie_XX_XX() throws Exception {
    	ViewBill ViewBill = new ViewBill();
        String decimal = ViewBill.PaymentValue.getText();
    	String[] parts = decimal.split("\\.");
    	decimal = parts[1];
    	Assert.assertEquals(decimal.length(), 2);
 //   	highlight(ViewBill.PaymentValue);
    	
    }
    	   	
    	
    

    	@When("^the page has loaded$")
    	public void the_page_has_loaded() {
    		
    	    ExpectedCondition<Boolean> expectation = new
    	    		ExpectedCondition<Boolean>() 
    	    		    {
    	    		        public Boolean apply(WebDriver driver)
    	    		        {
    	    		            return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
    	    		        }
    	    		    };
    	    		    Wait<WebDriver> wait = new WebDriverWait(driver,30);
    	    		    try
    	    		    {
    	    		        wait.until(expectation);
    	    		    }
    	    		    catch(Throwable error)
    	    		    {
    	    		        System.out.println("Page was not loaded in 30 seconds");
    	    		    }

    		
    		
    		
    		
    		
    	    // Write code here that turns the phrase above into concrete actions
    	//    throw new PendingException();
    	}

    	

    	@Then("^I am shown \"([^\"]*)\" the Your Account page$")
    	public void i_am_shown_the_Your_Account_page(String TileView) {
    		System.out.println("My Account tile view is: "+TileView);
    	    // Write code here that turns the phrase above into concrete actions
   // 	    throw new PendingException();
    	}

    	
    	@Then("^Tile 1 is \"([^\"]*)\"$")
    	public void tile_1_is(String arg2){
    		final WebElement Tile1Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[1]/div/div[2]/div/h2"));
    		String Text = Tile1Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 2 is \"([^\"]*)\"$")
    	public void tile_2_is(String arg2){
    		final WebElement Tile2Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[1]/div/div/div/div/h2"));
    		String Text = Tile2Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 3 is \"([^\"]*)\"$")
    	public void tile_3_is(String arg2){
    		final WebElement Tile3Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[1]/div/div/div/h2"));
    		String Text = Tile3Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 4 is \"([^\"]*)\"$")
    	public void tile_4_is(String arg2){
    		final WebElement Tile4Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/h2"));
    		String Text = Tile4Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 5 is \"([^\"]*)\"$")
    	public void tile_5_is(String arg2){
    		final WebElement Tile5Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[1]/div/div[2]/div/h2"));
    		String Text = Tile5Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 6 is \"([^\"]*)\"$")
    	public void tile_6_is(String arg2){
    		final WebElement Tile6Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[1]/div/div/div/h2"));
    		String Text = Tile6Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    	@Then("^Tile 7 is \"([^\"]*)\"$")
    	public void tile_7_is(String arg2){
    		final WebElement Tile7Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[2]/div/div/div/h2"));
    		String Text = Tile7Text.getText();
    		boolean retval = Text.contains(arg2);
    		if(retval == false){
    			closeBrowser();
    		}
    		Assert.assertEquals(retval, true);
    		
    	    // Write code here that turns the phrase above into concrete actions
    //	    throw new PendingException();
    	}
    	
    
   
}