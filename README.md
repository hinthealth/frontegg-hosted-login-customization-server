# Frontegg Hosted Login Box Customization Overrides Server

This project provides a Node.js server that handles metadata overrides for customizing the Frontegg login box.

## Setup instructions

1. Get as close as you can to the design you want in the Frontegg builder

2. Clone this repo and host your code on Heroku \ similar online providers. Save the URL of your server for step 3. It should look like https://yourserveraddress/overrides

3. follow [the instructions here to implement Frontegg Metadata Overrides](https://docs.frontegg.com/docs/hosted-and-embedded-setup#getting-started-with-metadataoverrides) to connect your hosted login box to the server.

4. Load your hosted login box (The `Login URL` from `Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page`, followed by `/account/login`). For example - `https://app-frtqiefxjqn9.frontegg.com/oauth/account/login`. You should see the settings are applied.

5. If you do not see the settings applied, open the network tools, refresh the page, and search for a request from `/overrides` to see if your server was called. You can also search for the call from `/metadata?entityName=adminBox` to verify that your are passing `metadataOverrides` under `configuration` as required.

```

"metadataOverrides": {
    "url": "https://yourserveraddress/overrides"
}

```
