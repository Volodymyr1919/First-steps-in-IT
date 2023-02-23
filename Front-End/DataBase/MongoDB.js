// Создать / переключиться на БД

// use database

// Создать коллекцию в текущей БД

db.createCollection('database_name')

// Удалить коллекцию

db.users.drop()

// Добавить один документ в коллекцию users

db.users.insertOne({
  _id: 1,
  first_name: 'Anton',
  last_name: 'Ivanov',
  age: 38
})

// Добавить несколько документов в коллекцию users

db.users.insertMany([
  {
    _id: 2,
    first_name: 'Irina',
    last_name: 'Ushanova',
    age: 23
  },
  {
    _id: 3,
    first_name: 'Olga',
    last_name: 'Ivanova',
    age: 29
  },
  {
    _id: 4,
    first_name: 'Ivan',
    last_name: 'Sidorov',
    age: 37
  }
])

// Операторы сравнения

// $lt <
// $lte <=
// $gt >
// $gte >=
// $ne <>
// $in []


// Вывести все документы в коллекции

db.users.find()

// Вывести только те документы, где в свойстве age значение равно 29

db.users.find({ age: 29 })

// Вывести только те документы, где в свойстве age значение >= 25

db.users.find({ age: {$gte: 25} })

// Вывести только те документы, где в свойстве age значение равно 23 или 37 или 40

db.users.find({ age: {$in: [23, 37, 40]} })

// Вывести те документы, где в свойстве age значение находится в диапазоне между 20 и 30 (включительно)

db.users.find({ age: {$gte: 20, $lte: 30} })

// Вывести только те документы, где в свойстве age значение >= 25 и значение в _id >=3

db.users.find({ 
  age: {$gte: 25},
  _id: {$gte: 3}
})


// deleteOne() / deleteMany() - удалять документы
// Удалить все документы, где в свойстве age значение >= 25

db.users.deleteMany({ age: {$gte: 25} })
// Удалить все документы

db.users.deleteMany({})
// updateOne() / updateMany() - изменять/обновлять документы

// $set - добавляет свойство или полностью обновляет значение уже существующего свойство
// Всем документам добавить новое свойство city со значением Berlin​
db.users.updateMany(
  {},
  {$set: {city: 'Berlin'}}
)

// Светлане и Никите изменить город на Hamburg​
db.users.updateMany(
  {name: {$in: ['Svetlana', 'Nikita']}},
  {$set: {city: 'Hamburg'}}
)

// $unset - удаляет свойство
// У Светланы и Никиты удалить свойство city

db.users.updateMany(
  {name: {$in: ['Svetlana', 'Nikita']}},
  {$unset: {city: ''}}
)

// У всех документов удалить свойство city
db.users.updateMany(
  {},
  {$unset: {city: ''}}
)


// $inc - изменяет количество
// Всем документам увеличить значение в свойстве age на 2

db.users.updateMany(
  {},
  {$inc: {age: 2}}
)

// $push - добавляет все переданные значения в массив

// $addToSet - добавляет уникальные значения в массив


// ПРАКТИКА 1

// 1. 	Создать коллекцию users и заполнить документами (4 штуки) со следующими 
// свойствами (_id, name, age, gender). Используйте следующие данные

// 1 Anatoliy 28 m
// 2 Svetlana 25 f
// 3 Nikita 33 m
// 4 Olga 22 f

db.createCollection('users')

db.users.insertMany([
  {
    _id: 1,
    name: 'Anatoliy',
    age: 28,
    gender: 'm'
  },
  {
    _id: 2,
    name: 'Svetlana',
    age: 25,
    gender: 'f'
  },
  {
    _id: 3,
    name: 'Nikita',
    age: 33,
    gender: 'm'
  },
  {
    _id: 4,
    name: 'Olga',
    age: 22,
    gender: 'f'
  }
])

// 2. Вывести все документы, которые содержат информацию о женщинах

db.users.find({ gender: 'f' })

// 3. Вывести все документы, которые содержат информацию о мужчинах старше 30 лет

db.users.find({
  gender: 'm',
  age: {$gte: 30}
})

// 4. Вывести все документы, которые содержат информацию о женщинах в возрасте от 30 до 40 лет включительно

db.users.find({
  gender: 'f',
  age: {$gte: 30, $lte: 40}
})



// ПРАКТИКА 2
// 1. Создать коллекцию products, используя следующий массив

db.products.insertMany(
  [  
    {
      _id: 1,
      title: "Велосипед",
      price: 45000,
      count: 12
    },
      {
      _id: 2,
      title: "Самокат",
      price: 15000,
      count: 10
    },
    {
      _id: 3,
      title: "Ролики",
      price: 20000,
      count: 20
    },
    {
      _id: 4,
      title: "Лыжи",
      price: 22000,
      count: 15
    },
    {
      _id: 5,
      title: "Скейт",
      price: 19000,
      count: 4
    },
    {
      _id: 6,
      title: "Сноуборд",
      price: 33000,
      count: 17
    }
  ]
)

// 2. Документу с title Велосипед изменить значение на Горный велосипед

db.products.updateOne(
  {title: 'Велосипед'},
  {$set: {title: 'Горный велосипед'}}
)

// 3. Всем товарам, количество которых не превышает 10, изменить количество на 10

db.products.updateMany(
  {count: {$lte: 10}},
  {$set: {count: 10}}
)

// 4. Всем товарам, чья цена входит в диапазон от 10 до 20 тыс, увеличить цену на 5000

db.products.updateMany(
  {price: {$gte: 10000, $lte: 20000}},
  {$inc: {price: 5000}}
)

// 5. Всем документам добавить свойство country и в качестве значения задать пустой массив

db.products.updateMany(
  {},
  {$set: {country: []}}
)

// 6. Всем документам в массив country добавить значение 'Germany'

db.products.updateMany(
  {},
  {$push: {country: 'Germany'}}
)

// 7. Товарам дороже 20000 добавить в свойство country значения France, Poland, Germany (добавлять без дублей)

db.products.updateMany(
  {price: {$gt: 20000}},
  {$addToSet: {country: {$each: ['France', 'Poland', 'Germany']}}}
)

// 8. Всем документам задать свойство discount со значением 0

db.products.updateMany(
  {},
  {$set: {discount: 0}}
)

// 9. Всем документам, чья цена превышает 30 тыс, именить значение свойства discount на 0.5

db.products.updateMany(
  {price: {$gt: 30000}},
  {$set: {discount: 0.5}}
)

// 10. Всем документам удалить свойство country

db.products.updateMany(
  {},
  {$unset: {country: ''}}
)

// 11. Документам с айди 1, 3, 6 добавить свойство country со значением 'Germany'. А документам с айди 2, 4. 5 - 'Spain'

db.products.updateMany(
  {_id: {$in: [1, 3, 6]}},
  {$set: {country: 'Germany'}}
)

db.products.updateMany(
  {_id: {$in: [2, 4, 5]}},
  {$set: {country: 'Spain'}}
)


// 12. Всем товарам добавить массив city

db.products.updateMany(
  {},
  {$set: {city: []}}
)

// 13. Товарам из Германии добавить в массив city Bremen, Dresden, Hamburg

db.products.updateMany(
  {country: 'Germany'},
  {$push: {city: ['Bremen', 'Dresden', 'Hamburg']}}
)

// 14. Товарам из Испании добавить в массив city Madrid и Barcelona

db.products.updateMany(
  {country: 'Spain'},
  {$push: {city: ['Madrid', 'Barcelona']}}
)


// 15. Товарам из Германии дешевле 25000 (вкл) удалить свойство city

db.products.updateMany(
  {
    country: 'Germany',
    price: {$lte: 25000} 
  },
  {$unset: {city: ''}}
)



//ДЗ
// 1. 1. Создать коллекцию workers.
        db.createCollection('workers');
// 2. Заполнить коллекцию workers 5 документами со свойствами _id, firstname, lastname, age, position, salary, skills. Используйте следующие данные:
  // 1. Inga Petrova, 27, Barista, 1500, [’preparing drinks’, ‘cleaning equipment’] 
  // 2. Boris Orlov, 36, Server, 2400, [’taking orders’, ‘suggesting meals’, ‘taking payments’]
  // 3. Ivan Demidov, 32, Chef, 3200, [’preparing food’, ‘baking bread’]
  // 4. Marina Sidorova, 22, Hostess, 1700, [’greeting guests’, ‘seating guests’, ‘answering phone calls’]
  // 5. Olga Ivanova, 43, Sommelier, 2500, [’curating a wine list’, ‘creating wine pairings’]
        db.insertMany([
            {
            id: 1,
            firstname: 'Inga',
            lastname: 'Petrova',
            age: 27,
            position: 'Barista',
            salary: 1500,
            skills: ['preparing drinks', 'cleaning equipment']
            },
            {
            id: 2,
            firstname: 'Boris',
            lastname: 'Orlov',
            age: 36,
            position: 'Server',
            salary: 2400,
            skills: ['taking orders', 'suggesting meals', 'taking payments']
            },
            {
            id: 3,
            firstname: 'Ivan',
            lastname: 'Demidov',
            age: 32,
            position: 'Chef',
            salary: 3200,
            skills: ['preparing food', 'baking bread']
            },
            {
            id: 4,
            firstname: 'Marina',
            lastname: 'Sidorov',
            age: 22,
            position: 'Hostess',
            salary: 1700,
            skills: ['greeting guests', 'seating guests', 'answering phone calls']
            },
            {
            id: 5,
            firstname: 'Olga',
            lastname: 'Ivanova',
            age: 43,
            position: 'Sommelier',
            salary: 2500,
            skills: ['curating a wine list', 'creating wine pairings']
            }
        ])

// 3. Работнику с id 3 увеличить зарплату на 400;
        db.updateMany(
            {id: 3},
            {$inc: {salary: 400}}
        )
// 4. Работникам с id 1 и 4 изменить зарплату на 1800;
        db.updateMany(
            {id: {$in: [1,4]}},
            {$set: {salary: 1800}}
        )
// 5. Всем работникам в массив skills добавить навык 'attending group meetings'
        db.updateMany(
            {},
            {$push: {skills: 'attending group meetings'}}
        )
// 6. Работникам Boris и Marina добавить в skills ‘working with CRM-system’ и ‘preparing for a concert’
        db.updateMany(
            {firstname: {$in: ['Boris', 'Marina']}},
            {$push: {skills: {$each: ['working with CRM-system','preparing for a concert']}}}
        )
// 7. 1. Добавить всем работникам свойство gender со значением ‘not defined’
        db.updateMany(
            {},
            {$set: {gender: 'not defined'}}
        )
// 8. Работникам Inga, Marina и Olga установить в свойстве gender значение female
        db.updateMany(
            {firstname: {$in: ['Inga', 'Marina', 'Olga']}},
            {$set: {gender: 'female'}}
        )
// 10. Работникам Boris и Ivan установить в свойстве gender значение male
        db.updateMany(
            {firstname: {$in: ['Boris', 'Ivan']}},
            {$set: {gender: 'male'}}
        )