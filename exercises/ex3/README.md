# Exercise 3 - Add TMS to the CI/CD Job

In this exercise, you will extend your SAP Continuous Integration and Delivery pipeline with additional unit tests and an upload to SAP Cloud Transport Management.

## Exercise 3.1 - Enable Additional Unit Tests

1. In the **Jobs** tab in SAP Continuous Integration and Delivery, choose the job you created in Exercise 1.
2. Click **Edit** to make the changes required below.
3. In the **Stages** section of your job details, switch on **Additional Unit Tests** using the toggle button.
<br>![](/exercises/ex3/images/03_03_0010.png)

## Exercise 3.2 - Create the Service Key Credential for SAP Cloud Transport Management

In this exercise, we will create service key for SAP Cloud Transport Management from BTP cockpit.

### Create the Service Key Credential

#### Procedure

1. In the SAP BTP cockpit, navigate to the subaccount in which you’ve created an instance for SAP Cloud Transport Management.
2. From the navigation area, choose Spaces and select your space in which you’ve created the Cloud Transport Management instance.
3. From the navigation area, choose Services > Instances.
4. Choose the name of your service instance.
5. From the navigation area, choose Service Keys.
6. Next to the name of your service key, click on the 3 dots and then click "View"
7. Copy the entire service key by clicking the "Copy JSON" button.
8. In SAP Continuous Integration and Delivery, create a new Service Key credential and paste the copied service key into the respective text field.
9. Enter a name for the service key. For example "tms-service-key".

**Note:** For additional information, see [Creating Credentials](https://help.sap.com/docs/CONTINUOUS_DELIVERY/99c72101f7ee40d0b2deb4df72ba1ad3/6658c81f3e43456891852955b1ee11db.html)

## Exercise 3.3 Activate the Release Stage of your job

Configure Release Stage via providing corresponding mandorty parameters as described below.

### Upload to Cloud Transport Management

1. Turn on the TMS upload step via toggle button.
2. Enter the name of the node for the upload to SAP Cloud Transport Management.
3. To authenticate your pipeline against SAP Cloud Transport Management, choose the service key you just created from the dropdown list.
4. Choose Save.
<br>![](/exercises/ex3/images/03_02_0010.png)

## Exercise 3.4 - Run the Pipeline manually

1. Run your job by pressing the blue **Run** button on the top right.
2. You should see that the build has failed in the **Additional Unit Tests** stage. Click on the stage to find more information.

## Exercise 3.5 - Fix the test and GitHub commit

In the previous run of your pipeline, **Additional Unit Tests** are failing because one of the unit tests is trying to access a file that doesn't exist. Please follow points below for a fix.

1. Fix the test by providing the correct manifest file type. In your repository copy, go to the HTML5Module/webapp/Component.js file. Click on the pencil icon to edit the [file]((https://github.com/SAP-samples/teched2022-XP280/blob/main/HTML5Module/webapp/Component.js#L11)). Change line 11 from "xml" to "json".
<br>![](/exercises/ex3/images/03_04_0010.png)
2. Replace "Update Component.js" with a meaningful commit message, like "Replace xml with json". Click "Commit changes" to save the file.

## Exercise 3.6 - Check the Pipeline for success

Return to your job in the SAP Continuous Integration and Delivery service.

If you created a webhook in Exercise 1, your configured job should have already started automatically after you committed the changes to the file in GitHub. If you didn't create a webhook, click the blue "Run" button to start your job manually.

Your job should now be successful, and not only run unit tests, but also perform an upload to SAP Cloud Transport Management.
