# Exercise 3 

In this exercise, you will extend your SAP Continuous Integration and Delivery pipeline with additional unit tests and an upload to SAP Cloud Transport Management.

## Exercise 3.1 - Enable Additional Unit Tests

1. In the **Jobs** tab in SAP Continuous Integration and Delivery, choose your job. 
2. In the **Stages** section of your job details, switch on **Additional Unit Tests** using the toggle button.

<br>![](/exercises/ex3/images/03_01_0010.png)

## Exercise 3.2 - Create the Service Key Credential for SAP Cloud Transport Management

In this exercise, we will create service key for SAP Cloud Transport Management from BTP cockpit.

### Create the Service Key Credential

Procedure

1. In the SAP BTP cockpit, navigate to the subaccount in which you’ve created an instance for SAP Cloud Transport Management.
2. From the navigation area, choose Spaces and select your space in which you’ve created the Cloud Transport Management instance.
3. From the navigation area, choose Services > Instances.
4. Choose the name of your service instance.
5. From the navigation area, choose Service Keys.
6. Copy the entire service key.
7. In SAP Continuous Integration and Delivery, create a new Service Key credential and paste the copied service key into the respective text field. See [Creating Credentials](https://help.sap.com/docs/CONTINUOUS_DELIVERY/99c72101f7ee40d0b2deb4df72ba1ad3/6658c81f3e43456891852955b1ee11db.html).
8. When creating a job, use the newly created Service Key credential in the Upload to Cloud Transport Management stage.

## Exercise 3.3 - Create the Transport Nodes and Route 

Create nodes for your spaces or subaccounts, connect them through a transport route, and provide the respective data to SAP Continuous Integration and Delivery.

### Procedure
1. In SAP Cloud Transport Management, create a node for each of your development and production spaces or subaccounts. See [Create Transport Nodes](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/f71a4d5550cd453ea824d5b5c677969d.html).
2. Connect the nodes through a transport route. See [Create Transport Routes](https://help.sap.com/docs/TRANSPORT_MANAGEMENT_SERVICE/7f7160ec0d8546c6b3eab72fb5ad6fd8/dddb74937a014aea8d3d76d740180597.html).
3. In your job configuration in SAP Continuous Integration and Delivery, enter the name of your development node in the **Upload to SAP Cloud Transport Management** stage.
4. When you've finished your job creation, choose **Add**.

## Exercise 3.4 Activate the Release Stage of your job

### Deploy to Cloud Foundry Space

Configure Release Stage via providing corresponding mandorty parameters as described below.

1. In the **Stages** section of your job details, switch on the **Deploy to Cloud Foundry Space** using the toggle (If the Deploy to Cloud Foundry Space step is switched off, all corresponding entry fields are deactivated).
2. Enter the URL of your SAP BTP, Cloud Foundry API Endpoint. See [Regions and API Endpoints Available for the Cloud Foundry Environment](https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/350356d1dc314d3199dca15bd2ab9b0e.html#loiof344a57233d34199b2123b9620d0bb41).
3. Enter the name of your Cloud Foundry organization. You can find it in the overview of your subaccount in the SAP BTP cockpit.
4. Enter the name of the Cloud Foundry space to which you want to deploy your application.
5. To authenticate your pipeline against the Cloud Foundry API endpoint, create a Basic Authentication credential of a user, who has the appropriate permissions. The user must have the Space Developer role and be a member of the specified Cloud Foundry organization and space. See [Creating Credentials](https://help.sap.com/docs/CONTINUOUS_DELIVERY/99c72101f7ee40d0b2deb4df72ba1ad3/6658c81f3e43456891852955b1ee11db.html). Choose this credential from the dropdown list.

### Upload to Cloud Transport Management

1. Enter the name of the node for the upload to SAP Cloud Transport Management.
2. To authenticate your pipeline against SAP Cloud Transport Management, create a Service Key. Choose this credential from the dropdown list.
3. Choose Save.

<br>![](/exercises/ex3/images/03_02_0010.png)

## Exercise 3.5 - Run the Pipeline manually (Test stage fails)

1. Run SAP Fiori in the Cloud Foundry environment pipeline by pressing blue **Run** button on the top right button.
2. Here **Additional Unit Tests** Stage is bound to fail.

## Exercise 3.6 - Fix the test and GitHub commit

In the previous run of your pipeline, **Additional Unit Tests** are failing because the reference file during the test stage doesn't exist within your application repository. Please follow points listed below to fix the test.
1. Provide correct manifest [file type](https://github.com/SAP-samples/teched2022-XP280/blob/main/HTML5Module/webapp/Component.js#L11) via changing **xml** to **json**. 
2. Click on Commit changes to perform a GitHub commit.

## Exercise 3.7 - Check the Pipeline for success

1. After pressing Commit changes, your configured job would trigger automatically (this is because, you have already configured webhook for your designated job. Any push event would auto trigger your pipeline now).
2. Your job should be successful this time.
