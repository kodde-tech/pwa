# PWA

A simple example of a Progressive Web App setup using React.

## Installation

To run it locally, clone the repo and make sure you execute these commands in the project directory:

```
npm install
```

After that all the project's dependencies will be installed. As PWAs need Service Workers to work and these Service Workers are only enabled in production environment, you are going to have to build the application and serve it with some HTTPS server (another requirement for Service Workers). To do that you can execute the following commands:

```
// Builds the app
npm run build

// Installs a HTTP server globally
npm install serve -g

// Serves the build through the server
serve -s build

// Creates a tunnel that can be accessed outside your network (and forces the project to be served through HTTPS). PS: In <PORT_TO_BE_TUNNELED> put the port in which the react app is executing, usually 3000.
npx localtunnel --port <PORT_TO_BE_TUNNELED>
```

Localtunnel will show in the terminal a public link in which you can access your react app. This link can be accessed from anywhere, so you can share the project with other people. PS: Localtunnel is a lib used for prototype purposes, so it has some limitations, if you want to put your app open to public search for alternatives.

## FAQ

- What is a PWA?

The initials means Progressive Web App. They are web applications that offer native mobile features. It became popular alternative to mobile apps, since they are cheaper, easier to setup, super fast, and the development it's like of a website.

- What is a Service Worker?

It's a script that is executed in the background of a browser. It is used for processing that doesn't need user interaction. In PWAs its commonly used for background data synchronization, push notifications, pre-fetching resources, caching resources, etc. An important thing is that Service Workers needs to be in the production environment and be served in a secure connection (HTTPS) to work.

## Useful links

- Create React App - Making a progressive web app:
  https://create-react-app.dev/docs/making-a-progressive-web-app/

- Web.dev - How to provide your own in-app install experience:
  https://web.dev/customize-install/

- Sandoche ADITTANE (Medium) - How PWAs works and how I implemented it with React and Webpack:
  https://medium.com/learning-lab/how-pwas-works-and-how-i-implemented-it-with-react-and-webpack-523381b1b7a4

- Satomi Ichii (Medium) - How to Implement Push Notifications in PWA using React:
  https://sichii.medium.com/how-to-implement-push-notifications-in-pwa-using-react-fd689f8394d3

- Google Developers - Progressive Web Apps: Going Offline:
  https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0
