# Exercise 3 - Extend Your CI/CD Pipeline With Additional Stages

In this exercise, you can extend your SAP Continuous Integration and Delivery pipeline with additional stages, for example, the **Additional Unit Tests** and **Release** stage.

## Exercise 3.0 - Enable Additional Unit Tests

1. In the **Jobs** tab in SAP Continuous Integration and Delivery, choose the job you created in [Exercise 1](/exercises/ex1#exercise-13-create-and-trigger-a-job-in-sap-continuous-integration-and-delivery).
2. Choose **Edit**.
3. In the **Stages** section of your job details, switch on **Additional Unit Tests** using the toggle.
<br>![](/exercises/ex3/images/03_03_0010.png)

## Exercise 3.1 - Enable the Release Stage

To enable the `Release` stage, we will provided the desired node name and create a service key credential for SAP Cloud Transport Management.

1. In the **Release* stage, turn on **Upload to Cloud Transport Management** using the toggle.
2. Enter the name of the node for the upload to SAP Cloud Transport Management.
3. For **Service Key**, click on the drop down arrow and then on **Create Credentials**. You should see a window pop up.
4. In another window, open the SAP BTP cockpit and navigate to the subaccount in which you’ve created an instance for SAP Cloud Transport Management.
5. From the navigation area, choose **Spaces** and select your space in which you’ve created the Cloud Transport Management instance.
6. From the navigation area, choose **Services** -> **Instances**.
7. Choose the name of your service instance.
8. From the navigation area, choose **Service Keys**.
9. Next to the name of your service key, click on the 3 dots and then click "View".
10. Copy the entire service key by clicking the "Copy JSON" button.
11. Back in SAP Continuous Integration and Delivery, paste the copied service key into the text field of the pop up window.
12. Enter a name for the service key, for example "tms-service-key". Click "Create".
13. Choose **Save**.
<br>![](/exercises/ex3/images/03_01_0010.png)

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