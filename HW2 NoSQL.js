QUESTION 1-

db.createCollection("Customer",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required: ["customer_numb","customer_first_name","customer_last_name","customer_street","customer_city","customer_state","customer_zip","customer_phone"],
            properties:{
                customer_numb:{
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                customer_first_name:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                customer_last_name:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                customer_street:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                customer_city:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                customer_state:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                customer_zip:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                customer_phone:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                }
            }
        }
    }
})

db.createCollection("Order",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required: ["order_numb","customer_numb","order_date","credit_card_numb","credit_card_exp_date","order_complete?","pickup_or_ship?"],
            properties:{
                order_numb:{
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                customer_numb:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                order_date:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                credit_card_numb:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                credit_card_exp_date:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                order_complete:{
                    enum:["Yes","No"],
                    description: "can only be one of the enum values and is required"
                },
                pickup_or_ship:{
                    enum:["Pickup","Ship"],
                    description: "can only be one of the enum values and is required"
                }
            }
        }
    }
})

db.Customer.insertMany([
    {customer_numb: NumberInt(1), customer_first_name: "John", customer_last_name: "Doe", customer_street: "Lake St", customer_city: "Chicago", customer_state: "Illinois",customer_zip: NumberInt(60611),customer_phone: NumberInt(3124561234)},
    {customer_numb: NumberInt(2), customer_first_name: "Jane", customer_last_name: "Dee", customer_street: "River St", customer_city: "Chicago", customer_state: "Illinois",customer_zip: NumberInt(60615),customer_phone: NumberInt(3121231234)}
])

db.Order.insertMany([
    {order_numb: NumberInt(10), customer_numb: NumberInt(1), order_date: NumberInt(1/28), credit_card_numb: NumberInt(123456789), credit_card_exp_date: NumberInt(10/25),order_complete: "Yes", pickup_or_ship: "Ship"},
    {order_numb: NumberInt(20), customer_numb: NumberInt(2), order_date: NumberInt(6/28), credit_card_numb: NumberInt(987654321), credit_card_exp_date: NumberInt(4/25),order_complete: "Yes", pickup_or_ship: "Pickup"}
])




QUESTION 2-

db.createCollection("student",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required: ["student_name","student_home_address","student_zip","student_phone"],
            properties:{
                student_name:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                student_home_address:{
                    bsonType:"string",
                    description: "must be a string and is required"
                },
                student_zip:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                },
                student_phone:{
                    bsonType:"int",
                    description: "must be an integer and is required"
                }
            }   
        }
    }
})

db.student.insertMany([
    {student_name: "Kim Kardashian", student_home_address: "1234 Sunset Blvd", student_zip: NumberInt(90210), student_phone: NumberInt(1234566789)},
    {student_name: "Khloe Kardashian", student_home_address: "4321 Sunset Blvd", student_zip: NumberInt(90211), student_phone: NumberInt(987654321)},
    {student_name: "Kourtney Kardashian", student_home_address: "3456 Sunset Blvd", student_zip: NumberInt(90213), student_phone: NumberInt(2134738271)},
    {student_name: "Kris Jenner", student_home_address: "5869 Sunset Blvd", student_zip: NumberInt(90216), student_phone: NumberInt(2130982673)},
    {student_name: "Kylie Jenner", student_home_address: "2305 Sunset Blvd", student_zip: NumberInt(90222), student_phone: NumberInt(2128983243)},
    {student_name: "Kendall Jenner", student_home_address: "1284 Sunset Blvd", student_zip: NumberInt(90232), student_phone: NumberInt(6262910294)},
    {student_name: "North West", student_home_address: "0235 Sunset Blvd", student_zip: NumberInt(90244), student_phone: NumberInt(2321321234)},
    {student_name: "Saint West", student_home_address: "2982 Sunset Blvd", student_zip: NumberInt(90234), student_phone: NumberInt(9177666324)},
    {student_name: "Chicago West", student_home_address: "4829 Sunset Blvd", student_zip: NumberInt(90903), student_phone: NumberInt(9879879876)},
    {student_name: "Psalm West", student_home_address: "1842 Sunset Blvd", student_zip: NumberInt(90240), student_phone: NumberInt(3453453456)}
])

db.student.createIndex({student_zip: 1, student_phone:1})
db.student.find({student_zip:90210})
