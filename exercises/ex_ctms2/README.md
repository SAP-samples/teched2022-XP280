# Enable SAP Cloud Transport Management for use
## Subscribe to SAP Cloud Transport Management
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

## Create role collection and assign it to your user

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

## Check your access to the Cloud Transport Manangement UI

1. Open **Instances and Subscriptions**. It can be found in the area 'Services' in the navigation pane.
2. Click on the link to **'Cloud Transport Management'**.
3. The cTMS overview page should open.

## Create a cTMS service instance and service key

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
