import {ProductCardComponent} from "../../components/product-card/index.js";
import {AddButtonComponent} from "../../components/add-button/index.js";
import { ProductAddPage } from "../product-add/index.js";
import {ProductPage} from "../product/index.js";
// import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    get btnRoot() {
        return document.getElementById('btn-cont')
    }

    getHTML() {
        return (
            `
                <div id="btn-cont" class="d-flex flex-wrap"></div>
                <div id="main-page" class="d-flex flex-wrap"></div>
            `
        )
    }

    //  getData() {
    //     ajax.get(stockUrls.getStocks(), (data) => {
    //         this.renderData(data);
    //     })
    // }

    async getData() {
        try {
            const response = await fetch(stockUrls.getStocks());
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            this.renderData(data);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    clickAdd() {
        const productAddPage = new ProductAddPage(this.parent)
        productAddPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const addButton = new AddButtonComponent(this.btnRoot)
        addButton.render(this.clickAdd.bind(this))

        this.getData()
    }
}
