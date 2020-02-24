var baseConfig = require("./base-config")

var allMachineThingies = [
    {
        homeUser: "citysearch-socket",
        type:"service",
        socket: true,
        dnsNames: ["citysearch.weblenny.at"],
        outsidePort: 65531
    },
    {
        homeUser: "weblenny-homepage",
        type:"website",
        searchIndexing: true,
        dnsNames: ["www.weblenny.at", "weblenny.at"]
    },
    {
        homeUser: "citysearch",
        type:"service",
        port: "3002",
        broadCORS: true,
        upgradeWebsocket: true,
        dnsNames: ["citysearch.weblenny.at"]
    },
    // {
    //     homeUser: "citysearch-socket",
    //     repository: "citysearch-on-socket-deploy",
    //     branch: "release",
    //     type:"service",
    //     socket: true,
    //     outsidePort: 65531,
    //     updateCode: [
    //         "sudo -u citysearch-socket -H sh -c 'cd /home/citysearch-socket/citysearch-on-socket-deploy; git pull origin release'"
    //     ]
    // },
    // {
    //     homeUser: "program-editor-tester",
    //     repository: "program-editor-tester",
    //     branch: "release",
    //     type:"service",
    //     socket: true,
    //     dnsNames: ["program-tester.auroxtech.com", "program-tester.aurox.at"],
    //     updateCode: [
    //         "sudo -u program-editor-tester -H sh -c 'cd /home/program-editor-tester/program-editor-tester; git pull origin release'",
    //         "systemctl restart program-editor-tester.service"
    //     ]
    // },
    // {
    //     homeUser: "weblenny-homepage",
    //     repository: "constructionpage",
    //     branch: "master",
    //     type:"website",
    //     dnsNames: ["www.weblenny.at", "weblenny.at"],
    //     updateCode: [
    //         "sudo -u weblenny-homepage -H sh -c 'cd /home/weblenny-homepage/constructionpage; git pull origin master'"
    //     ]    
    // },
    // {
    //     homeUser: "citysearch",
    //     repository: "aurox-citysearch-deploy",
    //     branch: "release",
    //     type:"service",
    //     port: "3002",
    //     dnsNames: ["weather.auroxtech.com", "weather.aurox.at"],
    //     updateCode: [
    //         "sudo -u citysearch -H sh -c 'cd /home/citysearch/aurox-citysearch-deploy; git pull origin master'",
    //         "systemctl restart citysearch.service"
    //     ]    
    // }

]
baseConfig.thingies = baseConfig.thingies.concat(allMachineThingies)
module.exports = baseConfig;
