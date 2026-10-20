import type {Page} from '@playwright/test';
export class LoginPage
{
    constructor(private page: Page) {// Constructor: injects Playwright's page object
this.page=page;
//this.usernameInput=this.page.getByPlaceholder('Username');
//this.passwordInput=this.page.locator('#password');
//this.SubmitBtn= this.page.locator('#login-button');
    }
usernameInput = this.page.locator('#user-name'); 
passwordInput = this.page.locator('#password'); 
SubmitBtn = this.page.locator('#login-button'); 
async login(username: string, password: string) { // Method to perform login
    await this.usernameInput.fill(username); // Fill username
    await this.passwordInput.fill(password); // Fill password
    await this.SubmitBtn.click(); // Click login

  }
}
