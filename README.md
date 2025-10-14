# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌿 Development Branch

All current work, including the latest updates to the home page sections, is being tracked on the `work` branch.

### Obtener la rama `work`

Si clonas el repositorio y no ves la rama `work` publicada en un remoto, puedes recrearla localmente aplicando el parche que se incluye en `patches/work.patch`:

1. Asegúrate de estar en la rama base del proyecto (por ejemplo `main` o `master`):

   ```bash
   git checkout main # o git checkout master
   ```

2. Crea una rama nueva llamada `work` y cámbiate a ella:

   ```bash
   git switch -c work
   ```

3. Aplica el parche con todos los cambios más recientes:

   ```bash
   git apply --whitespace=nowarn patches/work.patch
   ```

4. Instala dependencias y ejecuta el proyecto:

   ```bash
   npm install
   npm run dev -- --host 0.0.0.0 --port 4173
   ```

Con estos pasos tendrás una copia local idéntica al contenido de la rama `work` lista para revisión.
