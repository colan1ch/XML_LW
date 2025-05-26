import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class ProductAddPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('product-add-page');
    }

    getHTML() {
        return `
            <div id="product-add-page" class="container mt-4">
                <h2 class="mb-4">Добавить новую карточку</h2>
                <form id="add-product-form">
                    <!-- Основная информация -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="title" class="form-label">Название</label>
                                <input type="text" class="form-control" id="title" required>
                            </div>
                            <div class="mb-3">
                                <label for="breed" class="form-label">Порода</label>
                                <input type="text" class="form-control" id="breed">
                            </div>
                            <div class="mb-3">
                                <label for="src" class="form-label">Ссылка на изображение</label>
                                <input type="url" class="form-control" id="src">
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="height" class="form-label">Рост</label>
                                <input type="text" class="form-control" id="height" placeholder="54-57 см (кобели), 52-55 см (суки)">
                            </div>
                            <div class="mb-3">
                                <label for="weight" class="form-label">Вес</label>
                                <input type="text" class="form-control" id="weight" placeholder="27-40 кг">
                            </div>
                            <div class="mb-3">
                                <label for="lifespan" class="form-label">Продолжительность жизни</label>
                                <input type="text" class="form-control" id="lifespan" placeholder="10-12 лет">
                            </div>
                        </div>
                    </div>

                    <!-- Описание и темперамент -->
                    <div class="mb-3">
                        <label for="text" class="form-label">Краткое описание</label>
                        <textarea class="form-control" id="text" rows="2"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="temperamentDetails" class="form-label">Подробности темперамента</label>
                        <textarea class="form-control" id="temperamentDetails" rows="3"></textarea>
                    </div>

                    <!-- Советы по уходу -->
                    <div class="mb-3">
                        <label for="careTips" class="form-label">Советы по уходу</label>
                        <textarea class="form-control" id="careTips" rows="4"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="margin-bottom:10px">Добавить карточку</button>
                </form>
            </div>
        `;
    }

    setupForm() {
        const form = document.getElementById('add-product-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newProduct = {
                title: document.getElementById('title').value,
                breed: document.getElementById('breed').value,
                src: document.getElementById('src').value,
                height: document.getElementById('height').value,
                weight: document.getElementById('weight').value,
                lifespan: document.getElementById('lifespan').value,
                text: document.getElementById('text').value,
                temperamentDetails: document.getElementById('temperamentDetails').value,
                careTips: document.getElementById('careTips').value
            };
    
            ajax.post(stockUrls.createStock(), newProduct, (data, response) => {
                    this.clickBack();
                })
            
        });
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.setupForm();
    }
}