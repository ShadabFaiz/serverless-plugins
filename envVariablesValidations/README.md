# Serverless Environment Variables Validation Plugin

A serverless plugin that lists the environment variables defined in `provider.environment` in your `serverless.yml`.

## Installation

To install this plugin in your Serverless project, run:

```bash
npm install --save-dev serverless-plugin-environment-variables-validations
```

## Usage

Add the plugin to your `serverless.yml`:

```yaml
# serverless.yml

plugins:
  - serverless-plugin-environment-variables-validations

provider:
  name: aws
  runtime: nodejs18.x
  environment:
    SERVICE_NAME: my-service
    STAGE: ${sls:stage}
    DB_HOST: localhost
```

When you deploy your service (e.g., `serverless deploy`), the plugin will automatically list the environment variables detected from `provider.environment`.

Example output:

```
Environment Variables:
  - SERVICE_NAME
  - STAGE
  - DB_HOST
```

## Publishing to npm

This plugin can be published to the npm registry.

1.  **Log in to npm:**

```bash
npm login
```

2.  **Update version (if necessary):**

    Before publishing, you might want to update the version number in `package.json`.

```bash
npm version [major|minor|patch]
```

3.  **Build the project:**

    Ensure your TypeScript code is compiled to JavaScript.

```bash
npm run build
```

4.  **Publish:**

```bash
npm publish
```

    Make sure your `package.json` has `"main": "dist/index.js"` so npm knows which file to use.

## Development

To develop on this plugin:

1.  Clone the repository.
2.  `npm install`
3.  `npm run build` to compile TypeScript. 