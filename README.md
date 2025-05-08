# Examen Extraordinaria Server

Este proyecto es un servidor básico utilizando Fastify que expone un endpoint para obtener combinaciones aleatorias de elementos.

## Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd examen-extraordinaria-server
   ```

2. Instala las dependencias del proyecto:
   ```bash
   yarn install
   ```

## Cómo ejecutar el servidor

1. Inicia el servidor ejecutando el siguiente comando:
   ```bash
   yarn start
   ```

2. El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### `GET /combo`

Este endpoint devuelve una combinación aleatoria de entre 3 y 10 elementos de una lista predefinida.

#### Respuesta exitosa (200):
```json
{
  "combo": ["Llama Carmesí", "Niebla Azul", "Atardecer Dorado"]
}
```

#### Respuesta de error (500):
```json
{
  "error": "Internal Server Error"
}
```

> **Nota:** Existe una probabilidad del 10% de que el servidor devuelva un error interno.

## Notas adicionales

- Puedes modificar el puerto del servidor o la tasa de fallo (`FAIL_RATE`) editando el archivo `server.js`.
