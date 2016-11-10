package Test.Test.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Test.Test.glue.AbstractStepDefinition;

public class HomePage extends AbstractStepDefinition{
	
	
	/*
	
	public HomePage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	*/
//	WebDriver driver1 = getDriver();
//	WebDriverWait wait = new WebDriverWait(driver1,20);
	
	public WebElement YourAccountMenu = driver.findElement(By.id("account-men"));
	public WebElement MenuViewBill = driver.findElement(By.cssSelector(".is-dropdown-submenu.submenu.mega.menu.vertical.text-left")).findElement(By.cssSelector("a[href*='/bill']"));
	//wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("flexbox-self-align-middle")));
	
	
	
	
	
	
	

}
