package Test.Test.glue;


import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
 

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import Test.Test.page.objects.LoginPage;

import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
 
public class AbstractStepDefinition {
	
	
	protected static WebDriver driver;
	protected static Wait<WebDriver> fluentwait;
	

	
	public WebDriver getDriver(){
		if(driver==null){
			driver = new FirefoxDriver();
			}
		return driver;
	}
	
	public Wait<WebDriver> getWaitDriver(){
		if(fluentwait==null){
	fluentwait = new FluentWait<WebDriver>(driver)                            
			.withTimeout(20, TimeUnit.SECONDS)          
			.pollingEvery(5, TimeUnit.SECONDS)          
			.ignoring(NoSuchElementException.class);
		}
	return fluentwait;
	}
	
	
	
	
	
	 public void getscreenshot() throws Exception 
     {
             File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
          //The below method will save the screen shot in C drive with name "screenshot.png"
             FileUtils.copyFile(scrFile, new File("C:\\Users\\s39527\\Documents\\Workspace\\Test\\target\\Screenshot.png"));
     }
	 
	 public void highlight(WebElement element) throws Exception
	 {
	  for (int i = 0; i < 2; i++)
	        {
	         JavascriptExecutor js = (JavascriptExecutor) driver;
	         js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "color: yellow; border: 2px solid yellow;");
	         js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
	        }
	  getscreenshot();
	 }
	 
	 
	 	 
	 
	
	  protected void closeBrowser() {
		  	driver.quit();
	        driver=null;
	    }
	
}