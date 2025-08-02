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
            "id": "cca6f433-ed4e-4f73-b29a-d1571245012e",
            "name": "learn ts code",
            "desc": "before dinner"
        },
        {
            "id": "dc1639d8-9c46-484b-9cf6-b1c67890e098",
            "name": "learn golang code",
            "desc": "tomorrow"
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
    "data": {
        "id": "dc1639d8-9c46-484b-9cf6-b1c67890e098",
        "name": "learn golang code",
        "desc": "tomorrow"
    }
}
```

#### Create Task

```api
  POST /api/v1/task
```

Example Request body

```res


 {
"name":"learn golang code",
"desc":"tomorrow"
}
```

Example Reponse

```res

{
    "id": "dc1639d8-9c46-484b-9cf6-b1c67890e098",
    "name": "learn golang code",
    "desc": "tomorrow"
}
```

#### Update Task

```api
  PUT /api/v1/task/:id
```

Example Request body

```res
{
    "name": "learn golang code",
    "desc": "right now!!!!!!!"
}
```

Example Reponse

```res
{
    "message": "updated",
    "data": {
        "id": "a124c2bd-268a-4883-bf11-826b5c84f756",
        "name": "learn golang code",
        "desc": "right now!!!!!!!"
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

## Run application (without nodemon)

```bash
  npm  start
```
