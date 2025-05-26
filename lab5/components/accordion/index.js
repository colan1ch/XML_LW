export class AccordionComponent {
    constructor(parent) {
        this.parent = parent;
    }
    getHTML(data) {
      return `
          <div class="accordion" id="labradorAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="characteristicsHeading">
      <button class="accordion-button" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#characteristicsCollapse" 
              aria-expanded="true" 
              aria-controls="characteristicsCollapse">
        📏 Основные характеристики
      </button>
    </h2>
    <div id="characteristicsCollapse" 
         class="accordion-collapse collapse show" 
         aria-labelledby="characteristicsHeading" 
         data-bs-parent="#labradorAccordion">
      <div class="accordion-body">
        <ul class="list-unstyled">
          <li><strong>Порода:</strong> ${data.breed}</li>
          <li><strong>Рост:</strong> ${data.height}</li>
          <li><strong>Вес:</strong> ${data.weight}</li>
          <li><strong>Продолжительность жизни:</strong> ${data.lifespan}</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="temperamentHeading">
      <button class="accordion-button collapsed" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#temperamentCollapse" 
              aria-expanded="false" 
              aria-controls="temperamentCollapse">
        🐶Особенности характера
      </button>
    </h2>
    <div id="temperamentCollapse" 
         class="accordion-collapse collapse" 
         aria-labelledby="temperamentHeading" 
         data-bs-parent="#labradorAccordion">
      <div class="accordion-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.temperamentDetails}</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="careHeading">
      <button class="accordion-button collapsed" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#careCollapse" 
              aria-expanded="false" 
              aria-controls="careCollapse">
        🛁 Рекомендации по уходу
      </button>
    </h2>
    <div id="careCollapse" 
         class="accordion-collapse collapse" 
         aria-labelledby="careHeading" 
         data-bs-parent="#labradorAccordion">
      <div class="accordion-body">
        <h5>Основные требования:</h5>
        <ul class="list-group">
          <li class="list-group-item">${data.careTips}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    `;
}


    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}