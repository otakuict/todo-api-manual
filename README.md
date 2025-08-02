# To do list Restful api

แนวคิดของโปรเจคนี้
เลือกใช้ express เพราะมีความถนัด

-เริ่มวางโครงสร้างโปรเจค ประกอบไปด้วย ไฟล์ main.js ที่เป็นตัวหลัก , router สำหรับ route handling และ services เก็บ bussiness logic ซึ่งเชื่อมต่อกับ route ในการเรียกใช้ ที่ทำแบบนี้ เพราะscalable
</br></br>

-เริ่มคิดเกี่ยวกับ lib ที่ต้องใช้นอกจากตัว express ซึ่งจะใช้ uuid ในการจำลอง unique key เป็น id และ nodemon เพิ่มความสะดวกในการ develop </br></br>
-ตัว data stucture หลักจะทำเป็น array object เพราะเข้าใจง่าย ใช้งานง่าย</br></br>
-logic ในการทำจะทำ function findUser ที่ทำหน้าที่หา task ใน storage แยกไว้เป็น function เรียกใช้งาน เนื่องจากประเมินแล้วว่า หลาย function ต้องเรียกใช้งานบ่อย </br></br>
-handle errors

## Installation

enter directory todo-api-manual ( if not)

```bash
  cd todo-api-manual


```

Install todo-api-manual with npm

```bash
  npm install

```

## Run application (without nodemon)

```bash
  npm start
```

## API Reference

#### Get all Tasks

```api
  GET /api/v1/task
```

Example Reponse

```res

{
    "data": [
        {
            "id": "c4bd794c-c77b-498c-8155-843272606cf5",
            "name": "a Guy",
            "age": 28,
            "email": "yourEmail@mail.com"
        },
        {
            "id": "e550a42b-e666-49aa-a87d-f234018a776a",
            "name": "a Guy2",
            "age": 20,
            "email": "yourEmail@mail.com"
        }
    ]
}
```

#### Get task by id

```api
  GET /api/v1/task/:id
```

Example Reponse

```res

 {
    "name": "a Guy",
    "age": 20,
    "email": "yourEmail@mail.com"
}
```

#### Create Task

```api
  POST /api/v1/task
```

Example Request body

```res

{
    "name": "a Guy3",
    "age": 20,
    "email": "yourEmail@mail.com"
}
```

Example Reponse

```res

 {
    "id": "e550a42b-e666-49aa-a87d-f234018a776a",
    "name": "a Guy",
    "age": 20,
    "email": "yourEmail@mail.com"
}
```

#### Update Task

```api
  PUT /api/v1/task
```

Example Request body

```res
{
"id":"793fdd7e-86c3-4cfc-8876-b3c3583bdd1f",
"name":"mumx1",
"email":"testmail2"
}
```

Example Reponse

```res
{
    "message": "updated",
    "data": {
        "id": "793fdd7e-86c3-4cfc-8876-b3c3583bdd1f",
        "name": "mumx1",
        "age": 20,
        "email": "testmail2"
    }
}
```

#### Delete Task

```api
  DELETE /api/v1/task/:id
```

Example Reponse

```res
{
    "message": "deleted"
}
```

## Run application (with nodemon)

```bash
  npm run start:dev
```
