// obiect cu metoda log careia ii dam un string #hello
console.log('Hello');

//  JS array
const fruits = ['apple', 'pear', 'grape', 'lemon'];
console.log(fruits);

const firstItem = fruits[0];
console.log(firstItem);

// ultimul element din lista .lenght-1
const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// modificarea unui element in array
fruits [1] = 'orange';
console.log(fruits);

// adaugarea de element in array - push
// intre ghilimele doar daca e string, daca e nr sau variabilia, fara ghilimele
// elemement adaugat la sfarsitul elementului
const newFruit = 'banana';
fruits.push(newFruit); // adauga newFruit la capatul array-ului
console.log(fruits);


// stergerea unui element din array
//  pop - sterge automat ultimul element din lista
fruits.pop();
console.log(fruits);

// sterge primul element din array
fruits.shift();
console.log(fruits);

// adauga element la inceputul array-ului (la index 0)
fruits.unshift('cherry');
console.log(fruits);

//aflarea indexului unui element din array
//salvam intr-o constanta
const indexOfCherry = fruits.indexOf('cherry');
console.log(indexOfCherry);

//extragerea unui subset din array
// am declarat o constanta in care am salvat rezultatul slice de la elementul 1 la 3
const fruitsSubset = fruits.slice(1, 3);
console.log(fruitsSubset);

//modificarea unui array
fruits.splice(1, 2);
console.log(fruits);

fruits.splice(1, 0, 'blueberry', 'strawberry');
console.log(fruits);

const allFruits = fruits.concat(fruitsSubset);
console.log(allFruits);

//JS Objects
//la cheia name punem stringul john
const person = {
name: 'John',
surname: 'Doe',
age: '32',
address: {
    street: 'Love Lane',
    number: '32'
},
contact: {
    phone: '0747188956',
    email: 'j_doe@unknown.com'
},
hobbies: ['hiking', ' fishing', 'chess']
}

// punem un label 
console.log('person name: ', person.name);
console.log('person hobbies: ', person.hobbies);
console.log('person phone no: ', person.contact.phone);
console.log('person surname: ', person['surname']);

//modificarea proprietatilor unui obiect
person.name = 'George';
console.log('person: ', person);

//compararea unui obiect
const obj1 = {a: 1};
const obj2 = {a: 1};
console.log('obj1 === obj2: ', obj1 === obj2);

const obj3 = obj1;
console.log('obj3 === obj1: ', obj3 === obj1);