# Exercise 3 - Extend CI/CD Pipeline With Additional Stages

In this exercise, you will extend your SAP Continuous Integration and Delivery pipeline with additional stages i.e **Additional Unit Tests** and **Release**.

## Exercise 3.0 - Enable Additional Unit Tests

1. In the **Jobs** tab in SAP Continuous Integration and Delivery, choose the job you created in Exercise 1.
2. Click **Edit** to make the changes required below.
3. In the **Stages** section of your job details, switch on **Additional Unit Tests** using the toggle button.
<br>![](/exercises/ex3/images/03_03_0010.png)

## Exercise 3.1 - Activate the Release Stage of your job

Configure `Release` Stage via providing corresponding mandatory parameters as described below.

### Upload to Cloud Transport Management

1. Turn on **Upload to Cloud Transport Management** section under **Release** section via toggle button.
2. Enter the name of the node for the upload to SAP Cloud Transport Management.
3. To authenticate your pipeline against SAP Cloud Transport Management, choose the service key credential you just created from the drop-down list.
4. Choose **Save**.
<br>![](/exercises/ex3/images/03_01_0010.png)

### Exercise 3.1.1 - Activate the Upload to SAP Cloud Transport Management

In this exercise, we will create a service key credential using an already created service key for SAP Cloud Transport Management from BTP cockpit.

### Create the Service Key Credential

#### Procedure

1. In the SAP BTP cockpit, navigate to the subaccount in which you’ve created an instance for SAP Cloud Transport Management.
2. From the navigation area, choose **Spaces** and select your space in which you’ve created the Cloud Transport Management instance.
3. From the navigation area, choose **Services** -> **Instances**.
4. Choose the name of your service instance.
5. From the navigation area, choose **Service Keys**.
6. Next to the name of your service key, click on the 3 dots and then click "View".
7. Copy the entire service key by clicking the "Copy JSON" button.
8. In SAP Continuous Integration and Delivery, create a new Service Key credential and paste the copied service key into the respective text field.
9. Enter a name for the service key. For example "tms-service-key".

## Exercise 3.2 - Run the Pipeline manually

1. Run your job by pressing the blue **Run** button on the top right.
2. You should see that the build has failed in the **Additional Unit Tests** stage. Click on the failed stage to find more information.

## Exercise 3.3 - Fix the test and GitHub commit

In the previous run of your pipeline, **Additional Unit Tests** are failing because one of the unit tests is trying to access a file that doesn't exist. Please follow points below for a fix.

1. Fix the test by providing the correct manifest file type. In your repository copy, go to the `HTML5Module/webapp/Component.js` file. Click on the pencil icon to edit the file. Change line 11 from "xml" to "json".
<br>![](/exercises/ex3/images/03_04_0010.png)
2. Replace "Update Component.js" with a meaningful commit message, like "Replace xml with json". Click "Commit changes" to save the file.

## Exercise 3.4 - Check the Pipeline for success

Return to your job in the SAP Continuous Integration and Delivery service.

If you created a webhook in Exercise 1, your configured job should have already started automatically after you committed the changes to the file in GitHub. If you didn't create a webhook, click the blue "Run" button to start your job manually.

Your job should now be successful, and not only run unit tests, but also perform an upload to SAP Cloud Transport Management.

## Summary

Congratulations! You've extended your CI/CD job by enabling **Additional Unit Tests** and **Release** Stages.