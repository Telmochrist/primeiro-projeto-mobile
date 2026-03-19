

const users = { name: 'Telmo', age: 42, street: 'rua torta'}

for (const key in users) {

    console.log(`${key} : ${users[key]}`)
}