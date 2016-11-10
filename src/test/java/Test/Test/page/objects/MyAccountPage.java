package Test.Test.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Test.Test.glue.AbstractStepDefinition;

public class MyAccountPage extends AbstractStepDefinition{
	
	
	/*
	public MyAccountPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	*/

//	WebDriver driver = getDriver();
//	WebDriverWait wait = new WebDriverWait(driver1,20);
	
	public WebElement YourAccountText = driver.findElement(By.xpath("html/body/div[1]/div/div/form/input[4]"));
	public WebElement Tile1Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[1]/div/div[2]/div/h2"));
	public WebElement Tile2Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[1]/div/div/div/div/h2"));
	public WebElement Tile3Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[1]/div/div/div/h2"));
	public WebElement Tile4Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/h2"));
	public WebElement Tile5Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[1]/div/div[2]/div/h2"));
	public WebElement Tile6Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[1]/div/div/div/h2"));
	public WebElement Tile7Text = driver.findElement(By.xpath("html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[2]/div/div/div/h2"));
	//wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("flexbox-self-align-middle")));
	
	
	
	
	
	
	

}
