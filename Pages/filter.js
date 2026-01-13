export class filtersPage {
    constructor(page) {
        this.page = page;
        this.categorybutton = page.locator('xpath = //*[@id="__next"]/div/main/div[2]/div/ul/div/div[1]/div[4]/a/li/button/span[1]');
        this.subcategorybutton = page.locator('xpath = //*[@id="__next"]/div/main/div[5]/div/ul/li[1]/div/a[2]/h4');
        this.pricefilter = page.locator('xpath = //*[@id="sticky-filters-component"]/div[2]/ul/li[2]/button/span[1]');
        this.confirmFilter = page.locator("//label[@for='filter_reserve price-value_1']//div[@class='Checkbox_overlay__hGmhr']");
        this.applyChangesButton = page.locator('xpath = //*[@id="__next"]/div/main/div[8]/div/div[2]/div[3]/button'); 
    }

    async clickCategory(){
        await this.categorybutton.waitFor({ state: 'visible' });
        await this.categorybutton.click();
        console.log('Category clicked');
        await this.page.waitForTimeout(4000);
        
        
    }


    async openPriceFilter(){
        await this.pricefilter.waitFor({ state: 'visible' });
        await this.pricefilter.click();
        console.log('Price filter clicked');
        await this.page.waitForTimeout(4000);
    }

    async openSubCategory(){
        await this.subcategorybutton.waitFor({ state: 'visible' });
        await this.subcategorybutton.click();
        console.log('Subcategory clicked');
        await this.page.waitForTimeout(4000);
    }

    async applyPriceFilter(){
        await this.confirmFilter.waitFor({ state: 'visible' });
        await this.confirmFilter.click();
        console.log('Price filter applied');
        await this.page.waitForTimeout(4000);
    }

    async applyChanges(){
        await this.applyChangesButton.waitFor({ state: 'visible' });
        await this.applyChangesButton.click();
        console.log('Changes applied');
        await this.page.waitForTimeout(4000);
    }
}