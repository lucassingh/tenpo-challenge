# Tenpo challenge

## creado por Lucas Singh

Este proyecto corresponde al challenge requerido para el proceso de entrevistas por Tenpo CL.
EL proyecto consta de tres pantallas que muestran un home, una autorizacion del dispositivo y una pantalla para agregar una direccion en un mapa.

![WhatsApp Image 2023-03-05 at 17 33 51](https://user-images.githubusercontent.com/25686886/222993518-4114c94f-c103-49a6-ac04-aae49ede1ec4.jpeg)

![WhatsApp Image 2023-03-06 at 09 37 59](https://user-images.githubusercontent.com/25686886/223112854-b43e8f92-676c-4d7c-b628-f8ec51498681.jpeg)

![WhatsApp Image 2023-03-05 at 17 33 51 (1)](https://user-images.githubusercontent.com/25686886/222993520-d6c47195-19cc-43d5-9c3b-4d7bd65663e0.jpeg)

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
### Dependencias de desarrollo

```json
"devDependencies": {
    "@babel/core": "^7.20.0",
    "@testing-library/react-native": "^12.0.0-rc.1",
    "@types/jest": "^29.4.0",
    "@types/react": "~18.0.14",
    "@types/react-native-vector-icons": "^6.4.13",
    "@types/react-test-renderer": "^18.0.0",
    "@types/styled-components": "^5.1.26",
    "@types/styled-components-react-native": "^5.2.1",
    "babel-plugin-styled-components": "^2.0.7",
    "react-native-dotenv": "^3.4.8",
    "typescript": "^4.9.4"
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

1. Acceder al repositorio del proyecto [aqui](https://github.com/lucassingh/tenpo-challenge) y descargar el proyecto zip o ejecutar en la consola de comando de su preferencia `git clone https://github.com/lucassingh/tenpo-challenge.git`
2. `cd tenpo-challenge`
3. `yarn install` o `npm install` para instalar las dependencias
4. Abrir el proyecto en el editor de codigo de su preferencia y crear en la raiz del proyecto un archivo `.env` y crear la variable de entorno de GOOGLE_API_KEY 
`GOOGLE_API_KEY=your_api_key`
    - Advertencia: si no tiene Google api key asociada a ningun proyecto, puede crear una siguiendo los pasos en el siguiente video tutorial [aqui](https://www.youtube.com/results?search_query=create+google+api+key+for+maps)
    - Una vez generada la api key de Google pegarla en el archivo creado `.env` ( verificar que el archivo `.env` este incorporado en el archivo `gitignore` para no subirlo a un futuro repositorio
5. Ejecutar `yarn start` o `npm start`
6. Este proyecto fue generado con EXPO Cli, el build de desarrollo generara un codigo QR en la pantalla donde hay varias opciones para la ejecución

![image](https://user-images.githubusercontent.com/25686886/222987144-4449e4ac-556b-451e-a8a7-b41ea8206b8e.png)

- Virtual device Android: Con Android Studio instalado (windows) ejecutar `open android` y se abrirá el dispositivo virtual que este instalado 
- Virtual device IOS: Con XCode instalado (Mac) ejectuar `open ios` y se abrirá el dispositivo virtual que este instalado

7. Si elegimos ver la app en el dispositivo físico podemos hacer:
- Crear una cuenta en Expo accediendo [aqui](https://expo.dev/)

**Dispositivos Android:** 

- Descargar la aplicación de Expo go desde la play store desde [aqui](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
- Loguearse con el usario y pass de la cuenta que creamos anteriormente
- Entrar a Expo app y scanear el QR de la consola para que genere el build de la aplicación.

**Dispositivos IOS:** 

- Descargar la aplicación Expo Go en la app store [aqui](https://apps.apple.com/us/app/expo-go/id982107779)
- Loguearse con el usario y pass de la cuenta que creamos anteriormente
- Abrir la cámara del dispositivo y escanear el código QR de la consola para generar el build de la aplicación.

### Testing

Este proyecto permite la creación de tests unitarios con la suite de `react-testing-library` y `jest`
- Para ejecutar los test debemos correr el siguiente comando `yarn test` o `npm run test`
- La ejecución de los test arroja la siguiente salida: 

![image](https://user-images.githubusercontent.com/25686886/222993174-1b0d794f-5418-424f-b808-3a632633f9a3.png)

### Escalabilidad y mejoras

- Refactorización de componentes
- agregar mas pruebas unitarias para incrementar el coverage.






