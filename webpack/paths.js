const path = require('path');

const paths = (function definePaths() {
  const projectRoot = path.resolve(__dirname, '..');
  const outputRoot = path.resolve(projectRoot, 'dist');

  const project = {
    root: projectRoot,
    app: path.resolve(projectRoot, 'app'),
    client: path.resolve(projectRoot, 'client'),
    pages: path.resolve(projectRoot, 'pages'),
    server: path.resolve(projectRoot, 'server'),
  };

  const entries = {
    client: path.resolve(project.client, 'entry.tsx'),
    server: path.resolve(project.server, 'index.ts'),
  };

  const outputs = {
    root: outputRoot,
    scripts: path.resolve(outputRoot, 'scripts'),
  };

  return {
    project,
    entries,
    outputs,
  };
})();

module.exports = paths;
