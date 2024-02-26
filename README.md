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

Este desafío no solo pondrá a prueba tus habilidades de programación, sino que también te permitirá trabajar con tecnologías reales de integración de billeteras y servicios de API, una habilidad invaluable en el desarrollo de aplicaciones modernas. ¡Esperamos ver tus soluciones innovadoras!


## Reto semana 2 (Bonus): Integración del Historial de Transacciones
*Amplía el desafío principal integrando el historial de transacciones en la aplicación. Este desafío bono busca profundizar tu experiencia con APIs y mejorar la presentación de datos en la aplicación.*

+ **Instrucciones.**
Implementa una TransactionsSection en la BalancePage: Diseña esta nueva sección para mostrar el historial de transacciones de manera intuitiva y accesible.

+ **Extiende el ShyftApiService:**
Agrega un método getTransactions para recuperar el historial de transacciones de la billetera conectada. Gestiona eficientemente la carga de datos, considerando aspectos como la paginación o el filtrado.

+ **Utiliza el getTransactions en la TransactionsSection:**
Muestra el historial de transacciones detallando información clave como fecha, monto, y destinatario/emisor de cada transacción.

+ **Entrega**
Usa el mismo proceso de entrega del desafío principal. Crea una rama específica para este bono, implementa tus mejoras y, tras revisar tu trabajo, envía un Pull Request a Bob.

Este desafío bono no solo pone a prueba tus habilidades de desarrollo, sino que también enriquece la funcionalidad de tu aplicación, ofreciendo una experiencia más completa a los usuarios. ¡Demuestra tu habilidad para implementar características avanzadas de manera eficaz!

## Reto Semana 3: Envío de Transferencias
*Amplía tu aplicación para permitir transferencias de fondos. Trabaja en una nueva rama, actualiza el adaptador ``@heavy-duty/wallet-adapter`` a la versión 0.8.3, e instala ``@solana/spl-token`` y ``@heavy-duty/spl-utils``.*

+ **Actualiza el Adaptador:**
Asegura la funcionalidad con la versión 0.8.3 de @heavy-duty/wallet-adapter.

+ **Instalaciones Requeridas:**
Incorpora `@solana/spl-token` y `@heavy-duty/spl-utils` para manejar tokens SPL en Solana.

+ **Interfaz de Usuario:** 
Crea un formulario para capturar concepto, destinatario y monto de transferencias.

+ **Modal de Envío:**
Implementa un modal que muestre el formulario y procese la transferencia al enviarlo.

+ **Requisitos Técnicos**
Utiliza los paquetes instalados para gestionar la creación y envío de transacciones de tokens SPL.
Valida los datos del formulario para asegurar entradas correctas y saldo suficiente.

Este desafío te permite integrar funcionalidades de blockchain avanzadas, mejorando la interacción del usuario con activos digitales. ¡Esperamos tus soluciones innovadoras!