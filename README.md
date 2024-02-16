# Solana blockchain datacamp @HeavyDutyBuilders

> [!IMPORTANT]  
> **Se va a estructurar git de manera que cada branch contiene un reto, siendo la rama master la última tarea y actual estado de desarrollo.**

## Reto semana 1: Crear app utilizando Angular y NX
*Bienvenido al primer desafío del Heavy Duty Camp. Este será un momento crucial para aplicar los conocimientos que hemos adquirido en la clase teórica. Nuestro objetivo es crear una aplicación utilizando Angular y preparar el terreno para las próximas sesiones. A continuación, se detallan los pasos a seguir:*

+ Crear un workspace standalone de Angular con Nx, iniciando así la base de nuestro proyecto.
+ Configurar Angular Material para aprovechar sus componentes de interfaz de usuario.
+ Integrar Tailwind CSS, lo que nos permitirá diseñar una interfaz atractiva y responsive de manera eficiente.
+ Definir polyfills para Buffer, asegurando la compatibilidad y el funcionamiento óptimo de nuestra aplicación en diversos entornos.
+ Crear un repositorio en GitHub para el proyecto, lo cual facilitará la colaboración y el seguimiento del progreso.

## Reto semana 2: Exhibicion del Saldo de tu Billetera
*Tu misión en este desafío es mostrar el saldo en tu billetera dentro de la aplicación. Para ello, deberás utilizar el mismo repositorio que empleaste en el desafío anterior, creando una nueva rama para introducir tus cambios. Cuando estés conforme con tu código, tendrás que generar un Pull Request y entregarlo a Bob como tu participación en el desafío.*

+ **Integración de la Billetera.**
Para integrar billeteras en la aplicación, haremos uso del adaptador @heavy-duty/wallet-adapter. Implementaremos el botón múltiple y lo incorporaremos en el encabezado de la aplicación.

+ **Página de Saldo.**
Tras conectar una billetera, el saldo debe mostrarse en la BalancePage, utilizando un BalanceSection. Asegúrate de diseñar esta sección para que la información sea clara y accesible para el usuario.

+ **Integración con Shyft.**
Para lograr la integración con Shyft, necesitarás crear un servicio que se comunique con sus APIs. Esto implica crear una cuenta en Shyft y generar una clave API. Utiliza el Servicio API de Shyft para obtener la información de la cuenta de la billetera conectada.

	> [!NOTE]
	> Este desafío no solo pondrá a prueba tus habilidades de programación, sino que también te permitirá trabajar con tecnologías reales de integración de billeteras y servicios de API, una habilidad invaluable en el desarrollo de aplicaciones modernas. ¡Esperamos ver tus soluciones innovadoras!