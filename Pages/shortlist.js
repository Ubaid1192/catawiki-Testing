export class addFavorites{
    constructor(page) {
        this.page = page; 
        this.searchbox = page.locator('xpath=//*[@id="field_r_2_"]');
        this.productButton = page.getByText('Fernandez Arman (1928-2005) - Hommage au violon', { exact: true })
        this.addFavoritesButton = page.locator('xpath = //*[@id="__next"]/div/main/div[3]/div[1]/div[1]/div/div/div/button');
        this.profile = page.locator('xpath = //*[@id="cw-header-container"]/div/div/header/div/div/nav/div/div[3]/div/div[2]/button');
        this.myFavouritesButton = page.locator('#my-favorites');
        this.removeFavoritesButton = page.getByTitle('favourite');
        this.logoutButton = page.getByRole('button', { name: 'Sign out' });
    
    }
    async searchProduct (){
        await this.searchbox.waitFor({ state: 'visible' });
        await this.searchbox.fill('Fernandez Arman');
        await this.searchbox.press('Enter');
        console.log('Product searching');
        await this.page.waitForTimeout(4000);
    }

    async clickProduct(){
        await this.productButton.waitFor({ state: 'visible' });
        await this.productButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('Product clicked');
    }

    async addFavorites() {
        await this.addFavoritesButton.waitFor({ state: 'visible' });
        await this.addFavoritesButton.click();
        console.log('Product added to favorites');
        await this.page.waitForTimeout(4000);
    }

    async clickProfile() {
        await this.profile.waitFor({ state: 'visible' });
        await this.profile.click();
        console.log('Profile menu clicked');
        await this.page.waitForTimeout(4000);
    }

    async clickFavourites() {
        await this.myFavouritesButton.waitFor({ state: 'visible' });
        await this.myFavouritesButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('Favourites clicked');
    }

    async removeFavorite() {
        await this.removeFavoritesButton.waitFor({ state: 'visible' });
        await this.removeFavoritesButton.click();
        console.log('Product removed from favorites');
        await this.page.waitForTimeout(4000);
    }

    async logout() {
        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('Logout successful.');
    }
}