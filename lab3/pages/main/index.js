import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"></div>
            `
        )
    }
    
    // getData() {
    //     return [
    //         {
    //             id: 1,
    //             title: "Лабрадор-ретривер",
    //             src: "https://i.pinimg.com/736x/04/ce/f4/04cef4820c0581e0da9a79ee9d00e019.jpg",
    //             text: "Дружелюбная и энергичная порода, идеальна для семей.",
    //             // breed: "Лабрадор-ретривер"
    //         },
    //         {
    //             id: 2,
    //             title: "Немецкая овчарка",
    //             src: "https://i.pinimg.com/736x/52/29/e9/5229e9f606653daec88eeee8061c9a15.jpg",
    //             text: "Умная и преданная, часто используется в полиции.",
    //             // breed: "Немецкая овчарка"
    //         }
    //     ];
    // }

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
                care: "Основные рекомендации по уходу:",
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
                care: "Основные рекомендации по уходу:",
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
                care: "Основные рекомендации по уходу:",
                careTips: "Интенсивные прогулки 2-3 часа в день, Вычесывание в период линьки ежедневно, Содержание в прохладном климате"
            }
        ];
    }
        
    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })

        const accordion = new AccordionComponent(this.pageRoot);
        data.forEach(item => accordion.render(item));
    }
}
