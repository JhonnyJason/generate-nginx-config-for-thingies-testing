
var config = {};

config.ipAddress = "78.47.207.64"
config.name = "testMachine1"
config.webhookSecret = "sluttysecretofdork"
config.webhookPort = 65531
config.thingies = [
    {
        homeUser: "root",
        repository: "test-machine1-output",
        branch: "release",
        type:"installer",
        updateCode: [
            "cd /root/test-machine1-output; git pull origin release;",
            "/root/test-machine1-output/installer.js update;"
        ]
    }
    // ,
    // {
    //     homeUser: "webhook-handler",
    //     repository: "webhook-handler",
    //     branch: "release",
    //     type:"service",
    //     socket: true,
    //     port: 65531,
    //     updateCode: [
    //         "sudo -u webhook-handler -H sh -c 'cd /home/webhook-handler/webhook-handler; git pull origin release'"
    //     ]
    // }
]

module.exports = config;
