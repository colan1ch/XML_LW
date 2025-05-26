import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { AccordionComponent } from "../../components/accordion/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";


export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    // getData() {
    //     ajax.get(stockUrls.getStockById(this.id), (data) => {
    //         this.renderData(data);
    //     })
    // }


    async getData() {
        try {
            const response = await fetch(stockUrls.getStockById(this.id));
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            this.renderData(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item)
        const accordion = new AccordionComponent(this.pageRoot);
        accordion.render(item)
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        this.getData()
    }
}