# To do list Restful api

แนวคิดของโปรเจคนี้
เลือกใช้ express เพราะมีความถนัด

-เริ่มวางโครงสร้างโปรเจค ประกอบไปด้วย ไฟล์ main.js ที่เป็นตัวหลัก , router สำหรับ route handling และ services เก็บ bussiness logic ซึ่งเชื่อมต่อกับ route ในการเรียกใช้ ที่ทำแบบนี้ เพราะscalable
</br></br>

-เริ่มคิดเกี่ยวกับ lib ที่ต้องใช้นอกจากตัว express ซึ่งจะใช้ uuid ในการจำลอง unique key เป็น id และ nodemon เพิ่มความสะดวกในการ develop </br></br>
-ตัว data stucture หลักจะทำเป็น array object เพราะเข้าใจง่าย ใช้งานง่าย</br></br>
-logic ในการทำจะทำ function findUser ที่ทำหน้าที่หา task ใน storage แยกไว้เป็น function เรียกใช้งาน เนื่องจากประเมินแล้วว่า หลาย function ต้องเรียกใช้งานบ่อย </br></br>
-handle errors
-เพิ่ม jwt middleware และ env ที่กี่ยวข้อง  โดย username และ password นั้น จะใช้ plain text โดยจะละการเข้ารหัสไว้ในฐานที่เข้าใจเพื่อความง่ายในการใช้งาน 

## Installation

enter directory todo-api-manual ( if not)

```bash
  cd todo-api-manual


```
Create .env file at root directory 
example 

```bash
JWT_SECRET=super_secret_jwt_key
AUTH_USER=user
AUTH_PASS=password



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
```
curl --location 'http://localhost:3000/api/v1/task' \
--header 'Authorization: Bearer <token>'
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
```
curl --location 'http://localhost:3000/api/v1/task/:id' \
--header 'Authorization: Bearer <token>'
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

```

 {
"name":"learn golang code",
"desc":"tomorrow"
}
```
```
curl --location 'http://localhost:3000/api/v1/task' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>' \
--data ' {
"name":"learn golang code",
"desc":"tomorrow"
}'
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
```
curl --location --request PUT 'http://localhost:3000/api/v1/task/:id' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <tiken>' \
--data '{
    "name": "learn golang code",
    "desc": "right now!!!!!!!"
}'
```
Example Reponse

```res
{
    "message": "updated",
    "data": {
        "id": "ba30139a-b520-401e-8dad-fd9615b94e97",
        "name": "learn golang code",
        "desc": "right now!!!!!!!"
    }
}
```

#### Delete Task

```api
  DELETE /api/v1/task/:id
```
```
curl --location --request DELETE 'http://localhost:3000/api/v1/task/:id' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>' \
--data '{
    "name": "learn golang code",
    "desc": "right now!!!!!!!"
}'
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
