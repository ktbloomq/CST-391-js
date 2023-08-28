# Week 2 - Introduction to Angular

## Screenshots
Verifying Angular installation
![angular 16.2.0](./angular%20version.png)

Running test app
![angular test app](./angular%20testapp.png)

Adding a name message
![by Kevin Bloomquist](./angular%20testapp%20with%20name%20message.png)

## Research
### File Structure

| directory | usage |
| - | - |
| src/ | source files for root app
| src/app | project logic and data
| src/assets | 
| src/environments |

### Setup Files

| filename | purpose |
| - | - |
| angular.json | CLI configuration defaults
| package.json | Configures npm package dependencies
| tsconfig.json | TypeScript configuration

### Execution process
The app starts with main.ts which loads connected app modules. In this case, app.module.ts is loaded which bootstraps app.component. Next, when a browser instance starts, index.html is opened. Inside, the \<app-root\> tag references an external component. app-root is defined as a component in app.component.ts. This file points to the contents located in app.component.css and app.component.html. The contents of these files are inserted into the index page to be rendered by the browser.

## References
[angular.io](https://angular.io/)