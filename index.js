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

//JS - Date
const now = new Date();
console.log(now);

const yesterday = new Date('2024-09-29');
console.log(yesterday);

// Date methods
// accesarea proprietatilor unui obiect date

console.log('now.getDate: ', now.getDate()); //returneaza ziua de pe obiectul date
console.log('now.getDay: ', now.getDay()); //returneaza ziua din saptamana, calendar evreiesc
console.log('now.getFullYear: ', now.getFullYear()); //returneaza anul
console.log('now.getMonth: ', now.getMonth()); //retuneaza indexul corespunzator luniim intr-un array de 12 obiecte, numerotare de la 0.
console.log('now.getHours: ', now.getHours()); // returneaza ora
console.log('now.getMinutes: ', now.getMinutes()); //returneaza minutele de pe obiect
console.log('now.getMilliseconds: ', now.getMilliseconds()); 

// setarea prorietatilor unui obiect date
yesterday.setFullYear(2023);
console.log('yesterday: ', yesterday);

yesterday.setMonth(6);
console.log(yesterday);

yesterday.setDate(5);
console.log(yesterday);

yesterday.setHours(21);
console.log(yesterday);

yesterday.setMinutes(36);
console.log(yesterday);

yesterday.setSeconds(12);
console.log(yesterday);

//adaugare de zile intr-un obiect date
yesterday.setDate(yesterday.getDate() + 2);
console.log(yesterday);

//diferenta dintre doua date in milisecunde
const difference = now - yesterday;
console.log('difference: ', difference);

//formatarea unei date
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const weekDay = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fruiday', 'Saturday'];

const FormatedDate = `Year ${year}, month ${months[month]}, day ${day}, ${weekDays[weekDay]}, time: ${hour}:${minutes}`;
console.log(FormatedDate);

const newDate = new Date(); //am instantiat data de astazi
const timeStamp = newDate.getTime(); //ne da time stamp 
console.log(newDate); 
const fromTimeStamp = new Date(timeStamp - 500000); //din timpul initial, am scazut 500000 milisecunde
console.log(fromTimeStamp);
