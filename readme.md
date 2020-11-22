# Node 101

Más ejemplos prácticos en la web [nodejs.org](https://nodejs.org/en/knowledge/).

Para crear una aplicación de cero seguimos lo siguientes pasos

```sh
# Comprobar que node esta instalado
node -v

# Inicializar una nueva aplicacion Node.js
node init -y

# Instalar HTTP
npm i http

# Ejecutar la aplicación
node simple.js
```

Para usar ficheros de configuración. Si establecemos NODE_ENV como `development`, y no existe un fichero con tal nombre, usará el fichero `default.yaml`.

```sh
# Instalar config y js-yaml
npm i config js-yaml

# Añadir las siguientes variables de entorno
export NODE_ENV=development
export NODE_CONFIG_DIR=/mnt/d/code/node-101/
```

## Variables de entorno

```sh
# Añadir un valor a una clave existente
export PATH=$PATH:/home/himanshu/practice/

# Crear una clave con un valor
export NODE_ENV=development

# Listar una variable de entorno
echo $NODE_ENV

# Listar todas las variables existentes
printenv
```
