class Controler {
    constructor(exchanger, manyRenderer) {
        this.model = exchanger;
        this.rend = manyRenderer;
        this.lbtn = 1;
        this.rbtn = 1;
        this.left = 'RUB';
        this.rigth = 'USD';
        this.coff = 1;
    }
    genCallbackFromButton(rigthOrLeft, name) {

        return async(e) => {
            if (rigthOrLeft == 'left') {
                this.left = name;
                this.coff = await this.model.getCoff(this.left, this.rigth);
                this.rbtn = this.lbtn * this.coff;
            } else {
                this.rigth = name;
                this.coff = await this.model.getCoff(this.left, this.rigth);
                this.lbtn = this.rbtn / this.coff;
            }
            this.toRender()
        }
    }

    genCallbackFromInput(direction) {
        return (e) => {
            if (direction == 'left') {
                this.lbtn = isNaN(e.target.value) ? this.lbtn : e.target.value;
                this.rbtn = this.lbtn * this.coff;
                this.toRender();
            } else {
                this.rbtn = isNaN(e.target.value) ? this.rbtn : e.target.value;
                this.lbtn = this.rbtn / this.coff;
                this.toRender();
            }
        }
    }
    toRender() {
        this.rend.render(this.left, this.rigth, this.lbtn, this.rbtn)
    }

    async init() {
        this.rend.page.left.buttons.forEach((item) => { item.el.addEventListener('click', this.genCallbackFromButton('left', item.name)) })
        this.rend.page.rigth.buttons.forEach((item) => { item.el.addEventListener('click', this.genCallbackFromButton('rigth', item.name)) })
        this.rend.page.left.input.addEventListener('keyup', this.genCallbackFromInput('left'));
        this.rend.page.rigth.input.addEventListener('keyup', this.genCallbackFromInput('rigth'));
        this.coff = await this.model.getCoff(this.left, this.rigth);
        this.rbtn = this.lbtn * this.coff;
        this.toRender()
    }
}