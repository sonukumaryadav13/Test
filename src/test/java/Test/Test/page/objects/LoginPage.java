package Test.Test.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Test.Test.glue.AbstractStepDefinition;

public class LoginPage extends AbstractStepDefinition{

	/*
	public LoginPage(WebDriver driver) {
		super(driver);
	}
	*/
	

	public WebElement Login = driver.findElement(By.cssSelector(".inner-wrapper>div>h1"));
	public WebElement Username = driver.findElement(By.id("Username"));
	public WebElement Password = driver.findElement(By.id("Password"));
	public WebElement LoginButton = driver.findElement(By.xpath("html/body/div[1]/div/div/form/input[4]"));
	
	
	
	
	
	
	

}
