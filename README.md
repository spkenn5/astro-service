

## How to use
install reqs :
``` js
npm install co
```
run service
```js
npm start
```

the service should be running at http://localhost:3000

## 2) unique characters
given a string, check whether the string have unique characters.

```java
public boolean isUnique(String str)
input : "abcdef"
output : true

input : "abcdefa"
output : false
```

##### GET

Insert new items

Request params :
```javascript
  user_id : String
  user_email : String
  user_photo : String
  user_channel_fav : String
  user_program_fav : String
```

Response body :
```javascript
{
  "response" : 200
  "status" : "Ok"
  "data" : [
    {
      "user_id" : "893472834314",
      "user_email" : "user@email.com",
      "user_photo"  : "http://aws.myserver.com/cdn/images/user123.jpg",
      "user_channel_fav"  : "TV 1, TV 2, TV 3"
      "user_program_fav"  : "Family Guy, Simpsons, Superman"
    }
 ]
}
```


##### GET

Insert new items

Request params :
```javascript
  user_id : String
  user_email : String
  user_photo : String
  user_channel_fav : String
  user_program_fav : String
```

Response body :
```javascript
{
  "response" : 200
  "status" : "Ok"
  "data" : [
    {
      "id" : 1
      "user_id" : "893472834314",
      "user_email" : "user@email.com",
      "user_photo"  : "http://aws.myserver.com/cdn/images/user123.jpg",
      "user_channel_fav"  : "TV 1, TV 2, TV 3"
      "user_program_fav"  : "Family Guy, Simpsons, Superman"
    }
 ]
}
```

##### GET

Get item

Request params :
```javascript
  user_id : String
```

Response body :
```javascript
{
  "response" : 200
  "status" : "Ok"
  "data" : [
    {
      "id" : 1,
      "user_id" : "893472834314",
      "user_email" : "user@email.com",
      "user_photo"  : "http://aws.myserver.com/cdn/images/user123.jpg",
      "user_channel_fav"  : "TV 1, TV 2, TV 3"
      "user_program_fav"  : "Family Guy, Simpsons, Superman"
    }
 ]
}
```

##### GET

Delete item

Request params :
```javascript
  user_id : String
```

Response body :
```javascript
{
  "response" : 200
  "status" : "Ok"
  "data" : [
    {
      "count" : 1
    }
 ]
}
```
