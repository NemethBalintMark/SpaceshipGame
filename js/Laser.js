class Laser{
    #container;
    #x;
    #y;
    #element;

    constructor(x, y, container){
        this.setX(x);
        this.setY(y);
        this.setContainer(container);
        this.#element = null;
        this.createLaser();
    }

    setX(x) {
        this.#x = x;
    }
    
    setY(y) {
        this.#y = y;
    }

    setContainer(container) {
        this.#container = document.querySelector(container);
    }

    createLaser() {
        if (this.#element == null) {
            this.#element = document.createElement("div");

            this.#element.style.left = this.#x + "px";
            this.#element.style.top = this.#y + "px";

            this.#element.classList.add("laser");

            this.#container.appendChild(this.#element);
            this.hit();
            setTimeout( () => {
                this.remove();
            }, 500);
        }
    }

    remove() {
        this.#element.remove();
        this.#element = null;
    }

    hit(){
        var weaks = document.querySelectorAll(".weak");
        var strongs = document.querySelectorAll(".strong");

        for (let i = 0; i < weaks.length; i++) {
            if (weaks[i].getX() == this.#x) {
                weaks[i].damage();
            }
        }

        for (let i = 0; i < strongs.length; i++) {
            if (strongs[i].getX() == this.#x) {
                strongs[i].damage();
            }
        }
    }
}