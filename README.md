VueJS-WP-Plugin
===

We will use this as a starting point for developing using [VueJS](https://vuejs.org/) as a WordPress Plugin.

It provides out of the box:
    - **VueJS**
    - **Webpack & Browser-Sync** to assist your dev with hot reload and pack
    - **Gulp** to copy required files to your final wp plugin
    - **NPM tasks** for dev watching and production

Getting started
---

You will need npm and composer installed in your dev machine

- Clone this repo into your project folder (not wordpress yet)
- Run `npm install`
- Run `composer install`
- Name your plugin in that init.php file you see in root
- Run `npm run dev` to start your development.
- After do something in Vue, you can Run `npm run prod` to pack your plugin

Gulp will copy required files to ./plugin-directory

Wp Plugin
---

After run `npm run prod`, your wp plugin folder will be like this:

```txt
- your-wp-plugin-folder
  - init.php
  - vendor/
  - classes/Functions.php
  - js/bundle.js
```

- Now you can zip it, and upload it to your wordpress, as a new plugin
- Activate the plugin
- Add an `<div id="vwpapp"></div>` element into your wordpress template.

We have a good and quickly scaffold for our VueJS-WP-Plugin.
