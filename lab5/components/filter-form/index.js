export class FilterFormComponent {
    constructor(parent, onFilter) {
        this.parent = parent;
        this.onFilter = onFilter; // Callback для обработки фильтрации
    }

    getHTML() {
        return `
            <form id="filter-form" class="mb-4">
                <div class="row">
                    <div class="col-md-4">
                        <input type="number" class="form-control" id="filter-height" placeholder="Рост">
                    </div>
                    <div class="col-md-4">
                        <input type="number" class="form-control" id="filter-lifespan" placeholder="Продолжительность жизни">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Применить фильтр</button>
            </form>
        `;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        const form = document.getElementById('filter-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const filters = {
                height: document.getElementById('filter-height').value || undefined,
                lifespan: document.getElementById('filter-lifespan').value || undefined,
            };
            this.onFilter(filters);
        });
    }
}