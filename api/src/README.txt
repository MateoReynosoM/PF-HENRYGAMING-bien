Ruta de ejemplo para CREAR USUARIO
http://localhost:3001/postUser
{
  "userName": "aaaa",
  "firstName": "lima",
  "lastName": "123123",
  "email": "peru@gmail.com",
  "password":"123123123"
}

Ruta de ejemplo para AGREGAR DIRECCION A USUARIO
http://localhost:3001/postUserAdress
{
    "adress": "aaaa",
    "city": "lima",
    "postalCode": 123123,
    "country": "peru",
    "phoneNumber":"123123123",
    "userId":1
}

Ruta de ejemplo para BORRAR USUARIO
http://localhost:3001/deleteUser?userId=1&password=123

Ruta de ejemplo para BORRAR DIRECCION DE USUARIO POR ID
http://localhost:3001/deleteUserAdress?adressId=1


Ruta de ejemplo para CREAR REVIEW
http://localhost:3001/addReview
{
    "idProduct":1,
    "idUser":1,
    "reviewUser":"asdfsdfsdfsdf"
}

Ruta de ejemplo para ACTUALIZAR REVIEW (id por params y la nueva review en el body)
http://localhost:3001/updateReview/id

{
    newReview: la nueva reseña para actualizar
}

Ruta de ejemplo para BORRAR REVIEW POR ID (por params)
http://localhost:3001/removeReview/1


Ruta de ejemplo para TRAER CARRO POR ID
http://localhost:3001/?cartId=1

Ruta de ejemplo para AGREGAR PRODUCTO AL CARRITO
http://localhost:3001/productToCart
{
  "idUser":4,
  "idProduct":6,
  "amount":12
}

Ruta de ejemplo para BORRAR PRODUCTO DEL CARRITO
http://localhost:3001/deleteCartProduct?id=1

Ruta de ejemplo para BORRAR TODO EL CARRITO
http://localhost:3001/deleteCart?cartId=1


Ruta de ejemplo para FILTRAR PRODUCTO POR MARCA (brandId)
http://localhost:3001/brand/1

Ruta de ejemplo para FILTRAR PRODUCTO POR PRECIO
http://localhost:3001/productPrice?min=100&max=200

Ruta de ejemplo para FILTRAS PRODUCTO POR MODELO
http://localhost:3001/productModel?name=ryzen

Ruta de ejemplo para FILTRAS PRODUCTO POR TIPO
http://localhost:3001/productType?type=keyboard

Ruta de ejemplo para TRAER TODOS LOS PRODUCTOS
http://localhost:3001/products

Ruta de ejemplo para TRAER TODAS LAS MARCAS DE PRODUCTOS
http://localhost:3001/allBrand

Ruta de ejemplo para TRAER TODOS LOS TIPOS DE PRODUCTOS
http://localhost:3001/allTypes

Ruta de ejemplo para TRAER TODOS LOS USUARIOS
http://localhost:3001/getUser

Ruta de ejemplo para POSTEAR UN PRODUCTO
http://localhost:3001/postProduct
{
  "category": "aaaa",
  "brand": "lima",
  "model": "123123",
  "price": "peru@gmail.com",
  "createdInDb":"123123123"
  "rank": "123123",
  "detail": "peru@gmail.com"
}