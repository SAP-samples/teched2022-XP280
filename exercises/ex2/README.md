# Exercise 2 - Set up SAP Cloud Transport Management

In this exercise we will set up SAP Cloud Transport Management so that it can be used to perform imports of transport requests created by the CI&D service. This setup consists of several steps:
- Create additional subaccounts which act as targets for the imports.
- Subscribe to SAP Cloud Transport Management
- Create a role collection and assign it to your user
- Create a cTMS instance and a service key
- Create destinations for deployment
- Create transport nodes and routes

## Create target subaccounts for transport

### Create test subaccount

1. Go to the BTP Cockpit of your SAP BTP Trial global account to the tab 'Account Explorer'.
2. You should see (at least) one subaccount called 'trial', which was created when your Trial global account was set up.
3. You will now create two additional subaccounts which will be used as targets for transporting with SAP Cloud Transport Management.
4. Choose **'Create -> Subaccount'**.
5. Enter a **Display Name** of your choice, for example 'Test'
6. Enter a **Subdomain** name. Please note that this name must be unique in your region, so you might want to include something specific to your trial account. The input screen provides you with a proposal when you start typing in the Display Name field.
7. For **Region** choose the same region as your Trail global account is in.
8. Click on **Create**
9. The creation of the subaccount takes a few seconds.
10. Click on the newly created tile.
11. On the 'Overview' tab click on **Enable Cloud Foundry**.
12. Leave the **Plan** set to **standard**.
13. You can leave the **Instance Name** as it is.
14. The **Org Name** becomes part of the URL to be used in the destination to deploy content to this subaccount. So you might want to make it a little shorter as the proposal which is created from global account name and the subdomain name. It must be be unique, though. As the subdomain name has to be unique as well you could use it as Org Name as well (remove the global account name part).
15. Click on **Create**.
16. After a few seconds the Cloud Foundry Environment is set up.
17. Click on **Create Space**.
18. Choose a **Space Name**, for example 'Test'
19. Make sure that your user gets the roles 'Space Manager' and 'Space Developer' assigned. This is the default.
20. Click on **Create**.
21. Go back to the Account Explorer view of your Trail global account by clicking on its name in the breadcrumps on the top of the screen (besides the globe icon).

### Create production subaccount

Repeat the above steps for your second addtional subaccount. Call it for example 'Prod'.

22. Choose **'Create -> Subaccount'**.
23. 25. Enter a **Display Name** of your choice, for example 'Prod'
26. Enter a **Subdomain** name. Please note that this name must be unique in your region, so you might want to include something specific to your trial account. The input screen provides you with a proposal when you start typing in the Display Name field.
27. For **Region** choose the same region as your Trail global account is in.
28. Click on **Create**
29. The creation of the subaccount takes a few seconds.
30. Click on the newly created tile.
31. On the 'Overview' tab click on **Enable Cloud Foundry**.
32. Leave the **Plan** set to **standard**.
33. You can leave the **Instance Name** as it is.
34. The **Org Name** becomes part of the URL to be used in the destination to deploy content to this subaccount. So you might want to make it a little shorter as the proposal which is created from global account name and the subdomain name. It must be be unique, though. As the subdomain name has to be unique as well you could use it as Org Name as well (remove the global account name part).
35. Click on **Create**.
36. After a few seconds the Cloud Foundry Environment is set up.
37. Click on **Create Space**.
38. Choose a **Space Name**, for example 'Prod'
39. Make sure that your user gets the roles 'Space Manager' and 'Space Developer' assigned. This is the default.
40. Click on **Create**.

You now have (at least) three subaccounts inside your Trail global account. 

### Optional: Redistribute Cloud Foundry entitlements between the subaccounts

Our demo application needs a Cloud Foundry memory entitlement to run. This is necessary for all subaccounts to which it should be deployed. In the Trial environment the initial subaccount receives by default all 4 available entitlements. If you want to deploy the application to the test and production environment as well in exercise 4 you have to redistribute the Cloud Foundry memory entitlement between the three subaccounts.

1. 


## Enable SAP Cloud Transport Management for use

### Subscribe to SAP Cloud Transport Management

The subaccount which has been created automatically when creating the BTP Trial global account (called 'trial' by default) has all the needed entitlements for enabling SAP Cloud Transport Management. We will use this subaccount for the exercise. 

If you want to use another subaccount to enable cTMS you have to first make sure that the needed entitlements are available. Please see the [corresponding documentation](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/13894bed9e2d4b25aa34d03d002707f9.html) in that case.

1. Open the BTP Cockpit of your trial global account.
2. In the 'Account Explorer' view click on the tile called **'trial'**.
3. Open the **'Service Marketplace'**. It can be found in the area 'Services' in the navigation pane.
4. In the Search field enter 'Transport'.
5. Click on the tile **'Cloud Transport Management'**.
6. Click on **Create**.
7. In the dropdown for **Plan** select **'lite'** of type Subscription.
8. Click on **Create**.
9. Click on **View Subscription**.
10. After a few seconds the status of the subscription should change to 'Subscribed'.

For more details see [the documentation](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/7fe10fc1baae444e9315579786d623b9.html). Please note that the documentation refers to a non-trail environment. The plan to subscribe to here is called 'standard'.

### Create role collection and assign it to your user

1. In your 'trial' subaccount open the **'Role Collections'** view (to be found in the 'Security' area).
2. Click on the **'+'** icon.
3. Enter a name for the role collection for example 'TMS Admin'.
4. Click on **Create**.
5. Open **Instances and Subscriptions**. It can be found in the area 'Services' in the navigation pane.
6. On the **Subscriptions** tab, in the **Cloud Transport Management** row, choose the three dots (Actions) and **Manage Roles**.
7. Click on the **'+'** icon in the row with the template role **'Administrator'**.
8. Assign the role to the newly created role collection by selecting the checkbox.
9. Click on **Add**.
10. In your 'trial' subaccount open the **'Role Collections'** view (to be found in the 'Security' area).
11. In the list of role collections click on the line with the newly created role collection.
12. Click on **Edit**.
13. In the 'Users' tab enter the email address of your trial account user in the field **ID**. 
14. Click on the **'+'** icon.
15. Click on **Save**

For more details see [the documentation](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/eb134e02d2074918bcc5af34f50fb19f.html).

### Check your access to the Cloud Transport Manangement UI

1. Open **Instances and Subscriptions**. It can be found in the area 'Services' in the navigation pane.
2. Click on the link to **'Cloud Transport Management'**.
3. The cTMS overview page should open.

### Create a cTMS service instance and service key

1. Open **Instances and Subscriptions**. It can be found in the area 'Services' in the navigation pane.
2. Click on **Create**.
3. For **Service** choose **Cloud Transport Management**.
4. For **Plan** select **standard** of type 'Instance'.
5. Leave the **Runtime Environment** unchanged at **Cloud Foundry**.
6. Leave the **Space** unchanged at **dev**.
7. Select an Instance Name for example 'TMS1'.
8. Click on **Create**.
9. After a few seconds the new instance is created.
10. In the row with the newly created cTMS instance click on the three dots (Actions) and choose **Create Service Key**.
11. Choose a name for the service key, for example 'TMS_SK'.
12. Click on **Create**.

For more details see [the documentation](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/f44956035ce54684b1dbb9e4d23c37d2.html).

The service key now created will be used to enable the CI&D service to upload content to cTMS and create a transport request.


## Set up transport landscape

### Create destinations

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

Now repeat these steps for the other two subaccounts you have created previously and name the destinations for example 'TEST_MTA' and 'PROD_MTA'.
You should now have a total of three destinations pointing to your three subaccounts.

### Create transport landscape in cTMS

#### Create transport nodes

1. Open the cTMS UI by entering the subaccount in which you have subscribed to cTMS (normally 'trial') and opening the **'Instances and Subscriptions'** view (to be found in the 'Services' area).
2. In the 'Subscriptions' area click on the link of **'Cloud Transport Management'**.
3. The cTMS Overview page opens.
4. In the navigation pane click on **Transport Nodes**.
5. Click on the '+' icon.
6. Enter a **Name**, for example 'DEV'.
7. Optionally enter a **Description**, for example 'Devlopment node'.
8. **Select** the checkbox 'Allow Upload to Node'.
9. Leave the **Forward Mode** set to **Auto**.
10. Do **not** set the checkbox **Controlled By SAP Solution Manager**.
11. Select **Content Type** **'Multi-Target Application'** from the dropdown.
12. Set the **Destination** to point to your development subaccount (**'DEV_MTA'** if you followed our naming proposal). 
13. Leave the **Deployment Strategy** set to **default**.
14. Click on **OK** .

Repeat these steps for the other two subaccounts (with some slight changes!):

15. Click on the '+' icon.
6. Enter a **Name**, for example 'TEST'.
7. Optionally enter a **Description**, for example 'Test node'.
8. Do **not** set the checkbox 'Allow Upload to Node'.
9. Leave the **Forward Mode** set to **Auto**.
10. Do **not** set the checkbox **Controlled By SAP Solution Manager**.
11. Select **Content Type** **'Multi-Target Application'** from the dropdown.
12. Set the **Destination** to point to your development subaccount (**'TEST_MTA'** if you followed our naming proposal). 
13. Leave the **Deployment Strategy** set to **default**.
14. Click on **OK** .
25. Click on the '+' icon.
6. Enter a **Name**, for example 'PROD'.
7. Optionally enter a **Description**, for example 'Production node'.
8. Do **not** set the checkbox 'Allow Upload to Node'.
9. Leave the **Forward Mode** set to **Auto**.
10. Do **not** set the checkbox **Controlled By SAP Solution Manager**.
11. Select **Content Type** **'Multi-Target Application'** from the dropdown.
12. Set the **Destination** to point to your development subaccount (**'PROD_MTA'** if you followed our naming proposal). 
13. Leave the **Deployment Strategy** set to **default**.
14. Click on **OK** .

You should now have three transport nodes DEV, TEST and PROD.

#### Create transport routes

1. Click on **Transport Routes** in the navigation pane.
2. Click on the '+' icon.
3. Enter a **Name**, for example 'DEV_to_TEST'.
4. Optionally enter a **Description**.
5. **Choose a source node** for the route, in our naming convention 'DEV'.
6. **Choose a target node**, in our naming convention 'TEST'.
7. Click on **OK**.
8. Click on the '+' icon again.
9. Enter a **Name**, for example 'TEST_to_PROD'.
4. Optionally enter a **Description**.
5. **Choose a source node** for the route, in our naming convention 'TEST'.
6. **Choose a target node**, in our naming convention 'PROD'.
7. Click on **OK**.

You should now see two tranport routes 'DEV_to_TEST' and 'TEST_to_PROD'.

### Check visual representation of transport landscape

1. Click on **Landscape Visualization** in the navigation pane.
2. You should see a linear three node landscape.



Continue to - [Exercise 3 - Excercise 3 ](../ex3/README.md)
