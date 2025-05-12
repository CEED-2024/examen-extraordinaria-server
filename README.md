# Examen Extraordinaria Server

Este proyecto es un servidor básico utilizando Fastify que expone endpoints para obtener combinaciones aleatorias de elementos y consultar colores por su identificador.

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd examen-extraordinaria-server
   ```

2. Instala las dependencias del proyecto:
   ```bash
   yarn install
   # o
   npm install
   ```

## Cómo ejecutar el servidor

1. Inicia el servidor ejecutando el siguiente comando:
   ```bash
   yarn start
   # o
   npm start
   ```

2. El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### `GET /combo/:id`

Devuelve una combinación aleatoria de entre 3 y 10 elementos de una lista predefinida.

#### Respuesta exitosa (200):
```json
{
  "combo": [
    { "id": 1, "caption": "Llama Carmesí" },
    { "id": 2, "caption": "Niebla Azul" },
    { "id": 3, "caption": "Atardecer Dorado" }
  ]
}
```

#### Respuesta de error (500):
```json
{
  "error": "Internal Server Error"
}
```

> **Nota:** Existe una probabilidad del 10% de que el servidor devuelva un error interno (configurable en `FAIL_RATE`).

### `POST /color`

Devuelve el valor hexadecimal del color correspondiente al identificador proporcionado en el cuerpo de la petición.

#### Cuerpo de la petición (JSON):
```json
{
  "color": 1
}
```

#### Respuesta exitosa (200):
```json
{
  "hex": "#DC143C"
}
```

#### Respuesta de error (404):
```json
{
  "error": "Color not found"
}
```

## Notas adicionales

- Puedes modificar el puerto del servidor o la tasa de fallo (`FAIL_RATE`) editando el archivo `server.js`.
- El servidor utiliza CORS abierto (`origin: '*'`).
- Los endpoints están documentados para facilitar pruebas con herramientas como Postman o curl.
