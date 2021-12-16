class Vue {
    constructor(pageModel) {
        this.page = pageModel || {
            left: {
                buttons: [
                    { name: 'RUB', el: leftRub },
                    { name: 'USD', el: leftUsd },
                    { name: 'EUR', el: leftEur },
                    { name: 'GBP', el: leftGbp }
                ],
                input: leftInp,
                hint: lHint
            },
            rigth: {
                buttons: [
                    { name: 'RUB', el: rigthRub },
                    { name: 'USD', el: rigthUsd },
                    { name: 'EUR', el: rigthEur },
                    { name: 'GBP', el: rigthGbp }
                ],
                input: rigthInp,
                hint: rHint
            },
            selectClass: 'select-button'
        }
    }

    render(lbtn, rbtn, sum1, sum2) {
        this.page.left.buttons.forEach(el => el.el.classList.remove(this.page.selectClass));
        this.page.rigth.buttons.forEach(el => el.el.classList.remove(this.page.selectClass));
        this.page.left.buttons.filter(el => el.name == lbtn)[0].el.classList.add(this.page.selectClass);
        this.page.rigth.buttons.filter(el => el.name == rbtn)[0].el.classList.add(this.page.selectClass);
        this.page.left.input.value = sum1;
        this.page.rigth.input.value = sum2;
        this.page.left.hint.innerText = `1 ${lbtn} = ${sum1/sum2} ${rbtn}`;
        this.page.rigth.hint.innerText = `1 ${rbtn} = ${sum2/sum1} ${lbtn}`;
    }
}