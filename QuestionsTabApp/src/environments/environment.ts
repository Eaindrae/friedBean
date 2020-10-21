export const environment = {
    production: false,
    apiBaseUrl: "https://myanmardevelopingteam.azurewebsites.net/api/Request/",
    selfUrl: "https://myanmardevelopingteam-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "1af8b4c7-8e05-466b-ba3b-a0ada1e909a9",
        clientId: "beab0405-4300-4466-95d4-be7f2aadfb5a",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
