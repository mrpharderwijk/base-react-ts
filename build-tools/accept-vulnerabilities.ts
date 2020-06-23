/**
 * This script will check which vulnerabilities there are and accept them for you...
 * Please use responsibly.
 *
 * Add this to package.json: "audit:accept": "node node_modules/nsi-components/build-tools/accept-vulnerabilities.js",
 * And then run npm run audit:accept
 */
/* eslint-disable */
(() => {
  const fs = require('fs');
  const childProcess = require('child_process');

  const acceptedVulnerabilities: {
    id: number;
    path: string;
    acceptedUntil: Date | string;
    why?: string;
  }[] = [];

  try {
    childProcess.execSync('npm audit --json --registry=https://registry.npmjs.org > audit.json');
  } catch (error) {}

  const audit = JSON.parse(fs.readFileSync('audit.json', 'utf8'));
  audit.actions = audit.actions || [];

  /* tslint:disable:no-console */
  audit.actions.forEach((action: any) =>
    action.resolves.forEach((resolve: any) => !addAcceptRuleIfNecessary(resolve.path, resolve.id)),
  );

  function addAcceptRuleIfNecessary(path: string, id: number): boolean {
    const now = new Date();
    const acceptance = acceptedVulnerabilities.find(
      (findAccepted) => findAccepted.path === path && findAccepted.id === id,
    );

    if (!acceptance) {
      // Never accepted, accept it now for 60 days
      const newDate = new Date();
      newDate.setDate(new Date().getDate() + 60);
      acceptedVulnerabilities.push({
        id,
        path,
        acceptedUntil: newDate.toJSON(),
        why: 'Accepted by npm run audit:accept',
      });
    }

    return true;
  }

  fs.writeFileSync('accepted-vulnerabilities.json', JSON.stringify(acceptedVulnerabilities));
  console.log(`Done, now ${acceptedVulnerabilities.length} vulnerabilities are accepted.`);
})();
/* eslint-enable */
