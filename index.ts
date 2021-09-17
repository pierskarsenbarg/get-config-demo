import { LocalWorkspace } from "@pulumi/pulumi/automation";


// Set these values

const organisationName = "";
const projectName = "";
const stackName = "";

// You don't need to change anything below here

(async () => {


    // Create local workspace
    const workspace = await LocalWorkspace.create({
        projectSettings: {
            name: projectName,
            runtime: "nodejs",
        }
    });

    // Refresh config from console
    const config = await workspace.refreshConfig(`${organisationName}/${stackName}`);

    console.log(config);

    // Loop through config key/value pairs
    for (let configKey in config) {
        console.log(`Config key: ${configKey} Config value: ${config[configKey].value}`);
    }
})();

