const { exec } = require('child_process');
const os = require('os');

console.log("Installing dependencies...");
exec('npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${error}`);
    return;
  }
  console.log(stdout);

  const linkCommand = os.platform() === 'win32' ? 'npm link' : 'sudo npm link';
  console.log("Linking the CLI tool globally...");
  exec(linkCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error linking CLI tool: ${error}`);
      return;
    }
    console.log(stdout);
    console.log("Setup complete! You can now use the 'quickmigrate' command.");
  });
});
