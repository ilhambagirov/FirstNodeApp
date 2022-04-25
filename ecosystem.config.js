module.exports = {
  apps: [
    {
      name: "firstnodeapp",
      script: "./bin/www",
      env_production: {
        NODE_ENV: "production",
        NAME: "ILham Baghirov"
      },
      env: {
        NODE_ENV: "development",
        NAME: "Ilham"
      },
    },
  ],
};
