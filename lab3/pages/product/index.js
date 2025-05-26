import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { AccordionComponent } from "../../components/accordion/index.js";


export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }


    getData() {
        return [
            {
                id: 1,
                title: "Лабрадор-ретривер",
                breed: "Labrador Retriever",
                src: "https://i.pinimg.com/736x/ed/ed/e5/edede575e0fdca2d16d195844d704824.jpg",
                height: "54–57 см (кобели), 52–55 см (суки)",
                weight: "27–40 кг",
                lifespan: "10–12 лет",
                text: "Дружелюбный, активный, общительный. Идеален для семей с детьми.",
                temperamentDetails: "Любит воду, легко обучается, не агрессивен.",
                careTips: "Расчесывать шерсть 2 раза в неделю, Ежедневные прогулки не менее 1 часа, Регулярная чистка ушей"
            },

            {
                id: 2,
                title: "Немецкая овчарка",
                breed: "German Shepherd",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
                height: "60–65 см (кобели), 55–60 см (суки)",
                weight: "30–40 кг",
                lifespan: "9–13 лет",
                text: "Умная, преданная, смелая. Идеальна для службы и защиты.",
                temperamentDetails: "Отличные рабочие качества, требует умственной нагрузки, сильно привязывается к хозяину.",
                careTips: "Ежедневные тренировки и занятия, Вычесывание 3 раза в неделю, Профилактика дисплазии суставов",
            },

            {
                id: 3,
                title: "Сибирский хаски",
                breed: "Siberian Husky",
                src: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
                height: "53–60 см (кобели), 51–56 см (суки)",
                weight: "20–27 кг",
                lifespan: "12–15 лет",
                text: "Энергичная, дружелюбная, с независимым характером. Обожает холод и простор.",
                temperamentDetails: "Склонны к побегам, любят рыть ямы, плохие охранники, но отличные компаньоны.",
                careTips: "Интенсивные прогулки 2-3 часа в день, Вычесывание в период линьки ежедневно, Содержание в прохладном климате"
            }
        ][this.id - 1]
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

        const data = this.getData()
        const product = new ProductComponent(this.pageRoot)
        product.render(data)

        const accordion = new AccordionComponent(this.parent);
        // data.forEach(item => accordion.render(item));
        accordion.render(data)
    }
}