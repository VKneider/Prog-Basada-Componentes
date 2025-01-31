class CustomCard extends HTMLElement {
    constructor() {
        super();

        // Crear el template de la tarjeta
        this.innerHTML = this.getTemplate(); 
        this.loadStyles(); 
    }

    // Método para obtener el template
    getTemplate() {
    
        return  `
        <div class="card">
            <img src="" alt="Imagen" class="card-img">
            <div class="card-content">
                <h2 class="card-title"></h2>
                <p class="card-description"></p>
                <button class="card-button">Ver Más</button>
            </div>
        </div>
    `;
    }


    loadStyles() {

        // Cargar los estilos solo una vez al body
        if (!document.getElementById('card-styles')) {
            const styles = document.createElement('style');
            styles.id = 'card-styles';
            styles.textContent = `
                .card {
                    background-color: #e6f7ff;
                    border: 1px solid #cce7ff;
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 300px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    margin-bottom: 20px;
                }

                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }

                .card-img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 20px;
                    text-align: center;
                }

                .card-title {
                    font-size: 1.5rem;
                    color: #007acc;
                    margin-bottom: 10px;
                }

                .card-description {
                    font-size: 1rem;
                    color: #333;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }

                .card-button {
                    background-color: #007acc;
                    color: white;
                    border: none;
                    border-radius: 25px;
                    padding: 10px 20px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .card-button:hover {
                    background-color: #005f99;
                }
            `;

            document.head.appendChild(styles);
        }
    }

    // Métodos del Web Component

    // Método para obtener o actualizar la imagen
    get img() {
        return this.querySelector('.card-img').src;
    }

    set img(value) {
        this.querySelector('.card-img').src = value;
    }

    // Método para obtener o actualizar el título
    get title() {
        return this.querySelector('.card-title').textContent;
    }

    set title(value) {
        this.querySelector('.card-title').textContent = value;
    }

    // Método para obtener o actualizar la descripción
    get description() {
        return this.querySelector('.card-description').textContent;
    }

    set description(value) {
        this.querySelector('.card-description').textContent = value;
    }

    // Método de inicialización cuando se conecta al DOM
    connectedCallback() {
        // Aquí puedes manejar eventos o realizar acciones adicionales
        console.log('Card conectado al DOM');
    }

    // Método de desconexión cuando se elimina del DOM
    disconnectedCallback() {
        console.log('Card removido del DOM');
    }

    // Método de observación de cambios en los atributos
    static get observedAttributes() {
        return ['title', 'description', 'img'];
    }

    // Callback cuando los atributos cambian
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            this.title = newValue;
        } else if (name === 'description') {
            this.description = newValue;
        } else if (name === 'img') {
            this.img = newValue;
        }
    }
}

// Definir el Web Component
customElements.define('custom-card', CustomCard);
