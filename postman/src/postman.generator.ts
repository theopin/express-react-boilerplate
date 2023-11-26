import fs from 'fs'
import path from 'path'

const info = {
  name: 'Boilerplate API',
  description: '\r\nThis is the Entity API for the Express boilerplate application. \r\n\r\n',
  schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
}

const endpoints: Array<{ name: string, request: { method: string, url: string } }> = []

async function generateApiEndpoints (): Promise<any> {
  const rootDirectory = path.join(__dirname, '..', '..')
  const serviceRoots = fs.readdirSync(rootDirectory)
  const routeDir = 'src/routes'

  for (const serviceRoot of serviceRoots) {
    const serviceRouteDir = path.join(rootDirectory, serviceRoot, routeDir)

    if (fs.existsSync(serviceRouteDir)) {
      await traverseRouteFile(serviceRouteDir)
    }
  }

  return {
    ...info,
    items: endpoints
  }
}

async function traverseRouteFile (routesDirectory: string): Promise<void> {
  const routeFilePaths = fs.readdirSync(routesDirectory)
  for (const routeFilePath of routeFilePaths) {
    const routeFile = path.join(routesDirectory, routeFilePath)
    if (fs.existsSync(routeFile)) {
      await generateEndpointObjects(routeFile)
    }
  }
}

async function generateEndpointObjects (routeFile: string): Promise<void> {
  const componentRoutes = (await import(routeFile))
  const routerStack = componentRoutes.default._router.stack

  routerStack.forEach((layer: any) => {
    if (layer.route !== null && layer.route !== undefined) {
      const route = layer.route

      const pathArray = routeFile.split('.')[0].split('/')
      const pathArrayLastWord = pathArray[pathArray.length - 1]

      const endpoint = {
        name: `${layer.route.stack[0].method} ${pathArrayLastWord}`,
        request: {
          method: layer.route.stack[0].method.toUpperCase(),
          url: `http://{{base_url}}${route.path}`
        }
      }
      endpoints.push(endpoint)
    }
  })
}

generateApiEndpoints()
  .then((apiEndPoints) => {
    const jsonFilePath = path.join(__dirname, 'postman.collection.json')
    fs.writeFileSync(jsonFilePath, JSON.stringify(apiEndPoints, null, 2))

    console.log(`Api Endpoints written to ${jsonFilePath}`)
  }).catch((error) => {
    console.log(error)
  })
