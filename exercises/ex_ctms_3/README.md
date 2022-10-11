# Set up transport landscape
## Create destinations
You will now create destinations to deploy the content built by the CI&D service to the target subaccounts / spaces.
1. Enter the subaccount in which you subscribed to Cloud Transport Management, normally this should be the one called 'trial'.
2. Open the **'Destinations'** view (to be found in the Connectivity area).
3. Click on **New Destination**.
4. Enter a **Name** for the destination, for example 'DEV_MTA'.
5. Leave **Type** set to 'HTTP'.
6. Optionally enter a description.
7. The **URL** follows this pattern: `https://deploy-service.cfapps.<default-domain>/slprot/<myorg>/<myspace>/slp`.
    - The `default-domain` depends on the region your trial subaccount runs in. You can determine it by opening the 'Overview' tab of your subaccount in a second browser tab / window. In the section **Cloud Foundry Environment** you will find the entry **API Endpoint**. The part that follows `https://api.cf.` would be the default domain, for example `us10.hana.ondemand.com`.
    - In the same section you also find the information for `myorg` and `myspace`.
    - `myorg`can be found under **Org Name**.
    - `myspace`to the right in the 'Spaces' table in the column **Name**.
8. The overall URL should look like this (please use your own values!): `https://deploy-service.cfapps.us10.hana.ondemand.com/slprot/123abc45trial/dev/slp`.
9. Leave **Proxy Type** set to **Internet**.
10. Change **Authentication** to **BasicAuthentication**.
11. Enter your trial username for **User**.  
12. Enter your **Password**.
13. Click **Save**.
14. Click **Check Connection**. The return code should be '200: OK'. Otherwise re-check your entries.
15. Now repeat these steps for the other two subaccounts you have created previously.
16. 
