console.log('!')

const app = async function() {
    const controler = new Controler(new Exchanger(), new Vue());
    controler.init();
}();

// const exam = function() {

//     console.log([] == []);

//     function foo(a, b) {
//         console.log('it is something new');
//         return a * b;
//     }

//     function pet(petName) {
//         return petName + 'твой новый питомец';
//     }


//     const mFoo = memoize(foo)

//     console.log(mFoo(7, 9));
//     console.log(mFoo(7, 9));
//     console.log(mFoo(7, 9));
//     console.log(mFoo(7, 9));
//     console.log(mFoo(7, 7));


//     function memoize(func) {
//         const cach = { args: [], res: null }
//         return function() {
//             if (JSON.stringify(cach.args) == JSON.stringify(arguments)) return cach.res
//             cach.args = arguments;
//             cach.res = func(...arguments)
//             return cach.res;
//         }
//     }






// }()