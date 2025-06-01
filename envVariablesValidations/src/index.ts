import Serverless from 'serverless';

class EnvVariablesValidationPlugin {
  serverless: any;
  hooks: {
    'before:package:createDeploymentArtifacts': () => Promise<void>;
  };

  constructor(serverless: any) {
    this.serverless = serverless;
    this.hooks = {
      'before:package:createDeploymentArtifacts': this.listEnvVariables.bind(this),
    };
  }

  async listEnvVariables() {
    const service = this.serverless.service;
    const environment = service.provider.environment;

    if (environment) {
      this.serverless.cli.log('Environment Variables:');
      for (const key in environment) {
        const value = environment[key];
        if (value === null || value === undefined || value === '') {
          throw new this.serverless.classes.Error(
            `Environment variable '${key}' cannot be null, undefined, or an empty string.`
          );
        }
        this.serverless.cli.log(`  - ${key}`);
      }
    } else {
      this.serverless.cli.log('No environment variables found in provider.environment.');
    }
  }
}

module.exports = EnvVariablesValidationPlugin; 