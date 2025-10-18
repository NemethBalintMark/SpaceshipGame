class Enemy {
    #health;
    #isStrong;
    #x;
    #y;
    #fallInterval;
    #element;
    #container;

    constructor(x, y, container) {
        this.setX(x);
        this.setY(y);
        this.setContainer(container);
        this.createEnemy();
    }

    setHealth(health) {
        this.#health = health;
    }

    setX(x) {
        this.#x = x;
    }

    getX(){
        return this.#x;
    }

    setY(y) {
        this.#y = y;
    }

    setContainer(container) {
        this.#container = document.querySelector(container);
    }

    createEnemy() {
            this.#element = document.createElement("div");
            this.#isStrong = parseInt(Math.random() * 2);
            this.#element.classList.add("enemy");
            this.#element.classList.add(this.#isStrong == 0 ? "weak" : "strong");
            this.setHealth(this.#isStrong == 0 ? 1 : 3);

            this.#element.style.left = this.#x + "px";
            this.#element.style.top = this.#y + "px";

            this.#container.appendChild(this.#element);
    } 

    fall() {
        this.#fallInterval = setInterval(() => {
            this.#y += 50;
            this.#element.style.top = this.#y + "px";
            if (this.#y > this.#container.offsetHeight) {
                lose();
                this.remove();
            }
        }, 500);
    }

    remove() {
        this.#element.remove();
        clearInterval(this.#fallInterval);
    }

    damage() {
        this.#health -= 1;
        if (this.#health == 0) {
            this.remove();
        }
    }
}