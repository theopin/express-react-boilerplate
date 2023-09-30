import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000

const info = {
  name: "Entity API",
  description: "\r\nThis is the Entity API for the Express boilerplate application. \r\n\r\n",
  schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
};
async function generateApiEndpoints() {
  const endpoints: { name: string; request: { method: string; url: string } }[] = [];

  // Define the base directory for route files
  const routesDirectory = path.join(__dirname, '..', 'routes');

  // Read each component's route file dynamically
  const componentFolders = fs.readdirSync(routesDirectory)
  for (const componentFolder of componentFolders) {
    const routeFile = path.join(routesDirectory, componentFolder)

    // Check if the route file exists
    if (fs.existsSync(routeFile)) {
      const componentRoutes = (await import(routeFile)).default
      const routerStack = componentRoutes.default._router.stack

      routerStack.forEach((layer: any) => {
        if (layer.route) {
          const route = layer.route;
          const endpoint = {
            name: `${layer.route.stack[0].method} ${componentFolder.split('.')[0]}`,
            request: {
              method: layer.route.stack[0].method.toUpperCase(),
              url: `http://localhost:${port}${route.path}`,
            }

          }
          endpoints.push(endpoint)
        }
      })
    }
  }
  return {
    info,
    items: endpoints
  }
}

generateApiEndpoints()
.then((apiEndPoints) => {
  const jsonFilePath = path.join(__dirname, '..', '..', 'src', 'postman', 'postman.collection.json')
  fs.writeFileSync(jsonFilePath, JSON.stringify(apiEndPoints, null, 2))

  console.log(`ApiEndpoints written to ${jsonFilePath}`)

}).catch((error) => {
    console.log(error)
  })




