class Exchanger {
    constructor() {
        this.cach = { args: [], time: Date.now(), res: null }
    }
    checkCach() {
        console.log(arguments);
        if (JSON.stringify(this.cach.args) == JSON.stringify([...arguments]) &&
            Date.now() - this.cach.time < 3000) return this.cach.res;
        this.cach.args = [...arguments];
        this.cach.time = Date.now();
        return false;
    }

    async getCoff(base, symbol) {
        try {
            const cach = this.checkCach(base, symbol);
            console.log(cach);
            if (cach) return cach
            if (base == symbol) return 1;
            console.log('new');
            let coff = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`).then((r) => r.json())
            this.cach.res = coff.rates[symbol];
            return coff.rates[symbol]
        } catch (err) {
            console.error(err.message)
            return -1;
        }
    }
}