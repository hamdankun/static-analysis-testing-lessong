const a = () => console.log('hello world');

typeof a === 'string';

if (!('serviceWorker' in navigator)) {
    // no browser support
}

const greeting = 'hello';
console.log(`${greeting} world!`);
const ba = [1, 2, 3, 4];
console.log(ba);

interface User {
    name: { first: string; middle: string; last: string };
}

function add(a: number, b: number) {
    return a + b;
}

function getFullName(user: User) {
    const {
        name: { first, middle, last },
    } = user;
    return `${first} ${middle} ${last}`;
}

add(1, 2);

getFullName({ name: { first: 'hamdan', middle: 'Bud', last: 'Matthews' } });
