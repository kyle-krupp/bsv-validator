## Create a gift card

- **Endpoint** : `/giftcard`
- **Method** : `POST`
- **Auth required** : `NO`

### Request
##### Header parameters:
- **Content-Type**: `application/json`
  
- **Body**: 
  ```json
  {
      "handCashAuthToken": "string - required",
      "amount": "number - required",
      "currencyCode": "string - required",
      "receiverEmail": "string - optional",
      "receiverPhoneNumber": "string - optional",
      "receiverHandler": "string - optional",
      "expirationDate" : "number - unix time",
  }
  ```

### Success Response

- **Status Code** : `200`
- **Body** : `YES`

```json
{
    "redemptionToken": "string - token to redmeem gift"
}
```


### Error Response

##### The request contains invalid or missing parameters.
- **Status Code** : `400`
- **Body** : `{"message": "The message describing the error."}`

##### The request is not authenticated.
- **Status Code** : `401`
- **Body** : `{"message": "Invalid authorization."}`

##### Internal Error
- **Status Code** : `500`
- **Body** : `NO`

## Example

### Request

- **POST** `<API_BASE_URL>/giftcard`

##### Header parameters
- **Content-Type** : `application/json`
- **Body** : `YES`
``` json
{
    "handCashAuthToken": "2eee4324125b74e62565be3090ce67f14333c68b18b784655ee6665b8a225609",
    "amount": "10",
    "currencyCode": "USD",
    "receiverEmail": "brandonbryant@gmail.com",
    "expirationDate" : "1609810968",
}
```

### Response
- **Status Code** : `200`
- **Body** : `YES`

``` json 
{
    "redemptionToken": "haJhbcs-5Pi1iONo8aF02UA4ZDcyMWVhOTdjMmViMjhiYjQ5ZGMzNjIzMWI3Yjg0MTJhZjY2N2M5NGFkYjQ0YjBhOWI1ZWQ5NjQ1MjBmYzkyonNup2JyYW5vZG-iYWTZIjFHRnA1ZUtaUlNQcXlKOXhHaEFxblllZ25leTc5VjJzOXihd9k0TDJqMTlEQXBTQ3hHdjFwRHlObWs2dVlZNkRvOTZkNGVmZXY2TXU1ck1ta3RkU3kzZzlpeg"
}
```
