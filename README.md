# Tenpo challenge

## creado por Lucas Singh

Este proyecto corresponde al challenge requerido para el proceso de entrevistas por Tenpo CL.
EL proyecto consta de tres pantallas que muestran un home, una autorizacion del dispositivo y una pantalla para agregar una direccion en un mapa.

### Dependencias

```json
"dependencies": {
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "expo": "~48.0.4",
    "expo-location": "~15.1.1",
    "expo-status-bar": "~1.4.4",
    "jest": "^29.2.1",
    "jest-expo": "^48.0.1",
    "react": "18.2.0",
    "react-native": "0.71.3",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-google-places-autocomplete": "^2.5.1",
    "react-native-maps": "^1.4.0",
    "react-native-maps-directions": "^1.9.0",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-vector-icons": "^9.2.0",
    "styled-components": "^5.3.6"
  },
```
### Estructura del proyecto

![image](https://user-images.githubusercontent.com/25686886/222984998-e07e5ec7-8916-4dab-8b97-b642367d6642.png)

1. __test__: Contiene una replica del folder src con los test de los componentes
2. assets: continene las imagenes de splash e icono del proyecto junto con una carpeta imgs con las imagenes usadas en el proyecto
3. src
    - components: contienene las subs carpetas con los componentes usados en cada pantalla y los componentes usados en toda la app dentro de la carpeta UI
    - constants: archivo con constantes usadas en la app
    - hooks: carpeta para los hooks personalizados
    - interfaces: carpeta con las interfaces utilizadas en el proyecto
    - navigation: contiene el archivo con la nevegacion de la app
    - screens: carpeta con las pantallas de la aplicacion
    - theme: configuracion de styled components
    - types: carpeta que contiene los archivos con los tipos para la configuracion de styled compoenents y los tipos para la config de variables de entorno.

### Instalación del proyecto en modo de desarrollo

1. Acceder al repositorio del proyecto [aqui](https://github.com/lucassingh/tenpo-challenge) y descargar el proyecto zip o ejecutar en la consola de comando de su preferencia

`git clone https://github.com/lucassingh/tenpo-challenge.git` 
2. `cd tenpo-challenge`
3. `yarn install` o `npm install` para instalar las dependencias
4. Abrir el proyecto en el editor de codigo de su preferencia y crear en la raiz del proyecto un archivo `.env` y crear la variable de entorno de GOOGLE_API_KEY 
`GOOGLE_API_KEY=your_api_key`
    - Advertencia: si no tiene Google api key asociada a ningun proyecto, puede crear una siguiendo los pasos en el siguiente video tutorial [aqui](https://www.youtube.com/results?search_query=create+google+api+key+for+maps)


