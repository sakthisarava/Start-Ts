// const person:  {
//     name: string;
//     age: number;
// } = {
//     const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//     name: 'sakthi',
//     age: 23,
//     hobbies: ['sports', 'traveling'],
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 'AUTHOR' };

const person = {
name: 'sakthi',
age: 23,
hobbies: ['sports', 'traveling'],
role: Role.AUTHOR
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}