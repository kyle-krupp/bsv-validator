## Create a gift card

- **Endpoint** : `/redeemGiftcard`
- **Method** : `POST`
- **Auth required** : `NO`

### Request
##### Header parameters:
- **Content-Type**: `application/json`
  
- **Body**: 
  ```json
  {
      "handCashAuthToken": "string - required",
      "redemptionToken": "string - required",
  }
  ```

### Success Response

- **Status Code** : `200`
- **Body** : `NO`


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

- **POST** `<API_BASE_URL>/redeemGiftcard`

##### Header parameters
- **Content-Type** : `application/json`
- **Body** : `YES`
``` json
{
    "handCashAuthToken": "2eee4324125b74e62565be3090ce67f14333c68b18b784655ee6665b8a225609",
    "redemptionToken": "haJhbcs-5Pi1iONo8aF02UA4ZDcyMWVhOTdjMmViMjhiYjQ5ZGMzNjIzMWI3Yjg0MTJhZjY2N2M5NGFkYjQ0YjBhOWI1ZWQ5NjQ1MjBmYzkyonNup2JyYW5vZG-iYWTZIjFHRnA1ZUtaUlNQcXlKOXhHaEFxblllZ25leTc5VjJzOXihd9k0TDJqMTlEQXBTQ3hHdjFwRHlObWs2dVlZNkRvOTZkNGVmZXY2TXU1ck1ta3RkU3kzZzlpeg"
}
```

### Response
- **Status Code** : `200`
- **Body** : `NO`