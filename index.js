import core from '@actions/core';

try {
  // Get input as defined in actions metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);

  const time = new Date().toTimeString();
  core.setOutput('time', time);

  // Get the webhook payload for the triggerring event
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The payload event: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
