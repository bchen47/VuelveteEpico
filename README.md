# Vuélvete épico [React.js](https://reactjs.org)
Proyecto creado para el reto de Nuwe, Herétics y Binance
Participando en la categoría de:"How could we turn our followers into real fans thanks to blockchain technology?"

La estructura del proyecto consta de 3 apartados:
**Blockchain**: Contiene todo lo relacionado con Smart contracts, archivos de compilación, etc.
  Para este apartado se utiliza a OpenZeppelin como intermediario entre la red de Binance Smart Chain testnet y el front.
  El contrato que se ha creado consiste en un modelo muy básico de votaciones donde existe el usuario y el producto. El cuál registrará el número de votos y los usuarios   que han votado.
  URL de la dirección del contrato:https://testnet.bscscan.com/address/0x667c00cdf15690a4a74c6f15c91b7aa3d8ebacdf
  ![image](https://user-images.githubusercontent.com/11718074/209402589-06938446-9d41-43d2-a978-58c150f537f9.png)
  Los errores en amarillo significan que la transacción no se ha completado porque el servidor lo ha rechazado, debido a una transacción inválida.
  Los errores en rojo son errores por parte de problemas de la red, como podría ser falta de gas o ejecución del contrato.
  Los registros que no marcan nada son transacciónes que se han podido llevar a cabo.
**Spring**: Alternativa de un back en caso de que se quisiera crear un modelo híbrido poder juntarlo con un usuario.
  Se ha creado un microservicio para poder gestionar el alta de usuarios
**src**: El código que contiene el front de la aplicación realizado en react:
  Contiene las llamadas de escritura a OpenZeppelin para hacer las transacciones a la BlockChain, la llamada de lectura de la Red y la inicialización de los productos.
  Para este caso se ha escogido un modelo totalmente descentralizado el cuál no se contempla el registro de usuarios.
  ![image](https://user-images.githubusercontent.com/11718074/209402949-ac03bdf8-47b4-42c5-83b0-e9d5ef90da13.png)
En el documento pdf adjunto se detalla más la idea y las posibles arquitecturas planteadas en la solución.

Objetivos conseguidos:
  - Creación del contrato y subido a la Red Blockchain de Binance.
  - Comunicación entre el smart contract y el front.
  - Meta transacciones con Open Zeppelin.
  - Seguridad en los contratos, mediante cláusulas que puedan alterar la integridad de la red.
  - Realización del back con comunicación al servidor SQL.
  
Cosas a mejorar:
  - Reutilización de componentes en React.
  - Añadir mayor complejidad a la estructura de la blockchain.
  - Registro de usuarios para crear un filtro y que no pueda votar cualquiera
  - Enfocarlo más al modelo híbrido que se detalla en el documento.
  - Mejorar la estructura de directorios
  - Optimización del código.
  
