package Test.Test.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Test.Test.glue.AbstractStepDefinition;

public class ViewBill extends AbstractStepDefinition{
	
	
	/*
	public ViewBill(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	
	*/
	//WebDriver driver1 = getDriver();
//	WebDriverWait wait = new WebDriverWait(driver1,20);
	
	public WebElement PaymentValue = driver.findElement(By.className("c-card__callout"));

	
	
	
	
	
	
	

}
