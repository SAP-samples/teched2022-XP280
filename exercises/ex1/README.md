# Exercise 1 - Create a Job in the SAP Continuous Integration and Delivery service

In this exercise, you will set up SAP Continuous Integration and Delivery and, in the service, create a job.

## Exercise 1.0 - Set Up SAP Continuous Integration and Delivery

### Subscribe to SAP Continuous Integration and Delivery

1. In your subaccount in the SAP BTP cockpit, choose **Services** → **Service Marketplace**.

2. In the text box, enter and search for `continuous`.

3. Click on the three dots (**...**) on the **Continuous Integration & Delivery** tile and choose **Create**.

   <br>![](/exercises/ex1/images/create_subscription.png)

 > **Note:** If you don't see the **Continuous Integration & Delivery** tile when you search for it, please go back to [Exercise 0.1](../ex0/README.md#exercise-01---optional-add-the-required-entitlements) for adding the correct entitlements first and then come back.

4. In the **New Instance or Subscription** pop-up, leave the default settings and choose **Create**.

### Add the Required Permissions

1. In your subaccount in the SAP BTP cockpit, choose **Security** → **Users**.
 
2. Choose the arrow **>** next to your user entry.

   <br>![](/exercises/ex1/images/click_on_user.png)

3. In the **Role Collections** overview of your user entry, click on **Assign Role Collection** or, if the button is not visible, click the three dots (**...**) and choose **Assign Role Collection**.

   <br>![](/exercises/ex1/images/assign_role.png)

4. Check the boxes for **CICD Service Administrator** and **CICD Service Developer**, then click **Assign Role Collection**.

   <br>![](/exercises/ex1/images/assign_cicd_roles.png)

### Open the Continuous Integration and Delivery Service

1. In your subaccount in the SAP BTP cockpit, choose **Services** → **Instances and Subscriptions**.

<br>![](images/login_to_cicd.png)

2. In the **Subscriptions** overview, choose **Continuous Integration & Delivery**.
Now, the user interface of SAP Continuous Integration and Delivery opens.

<br>![](/exercises/ex1/images/open_service.png)

> **Note:** If you get an authorization error when trying to access the service, please log out of the service and log back in again.


## Exercise 1.1 Add Your Repository to SAP Continuous Integration and Delivery

Connect SAP Continuous Integration and Delivery with the repository in which your sources reside.

1. In SAP Continuous Integration and Delivery, choose **Repositories** → **+** _(Add)_.

<br>![](images/add_repo.png)

2. In the **Add Repository** pop-up, add a name for your repository.

3. In GitHub, copy the HTTPS clone URL of the repository you just created in [Exercise 0](../ex0#exercise-00---create-a-copy-of-this-repository) .

<br>![](images/clone_url.png)

4. Paste it into the **Clone URL** field in the **Add Repository** pop-up in SAP Continuous Integration and Delivery. 

5. Enter the **Name** for your repository and leave the rest of the fields as they are.
6. Choose **Add**.
 
<br>![](images/configure_repo.png)


## Exercise 1.2 (Optional) Create a Webhook

You can configure a webhook for your repository, which automatically triggers a build of your job when there is a change commit in the source code repository. 
1. In the **Repositories** tab in SAP Continuous Integration and Delivery, choose your newly created repository, then choose **Webhook Data**.
As a result, the Webhook Data pop-up opens. This pop-up provides the information you need to create a webhook in GitHub.

<br>![](images/webhook_data_button.png)

2. Copy both **Payload URL** and **Secret**, then click on the link to your GitHub repository.

<br>![](images/webhook_payload_info.png)

3. In your project in GitHub, go to the **Settings** tab.

4. From the navigation pane, choose **Webhooks**, then choose **Add webhook**.
 
<br>![](images/add_webhook_button.png)

5. Enter the **Payload URL**, **Content type**, and **Secret** from the **Webhook Data** pop-up in SAP Continuous Integration and Delivery. For all other settings, leave the default values.

6. Choose **Add webhook**.

<br>![](images/webhook_config.png)

## Exercise 1.3 Create and Trigger a Job in SAP Continuous Integration and Delivery

1. In SAP Continuous Integration and Delivery, go to the **Jobs** tab and choose **+** _(Create job)_.

<br>![](images/add_a_job.png)

2. In the **General Information** section of the **Create Job** pane, enter the following values:
- **Job Name**: Freely choose a unique name for your job. We recommend using a name that contains both your GitHub project name and branch.
- **Repository**: From the drop-down list, choose your repository you have created.
- **Branch**: Enter `main`.
- **Pipeline**: From the drop-down list, choose **SAP Fiori in the Cloud Foundry environment**.

3. In the **Stages** section, choose **Job Editor** as **Configuration Mode**.

4. In the **Build** section, choose **Java 8 Node 14** as **Build Tool Version**.

<br>![](images/configure_a_job.png)

5. Choose **Create**. You've now created your first CI/CD job, in which the **Build** stage is enabled.

6. To trigger a build of your job, choose **Run**.

<br>![](images/trigger_build.png)

7. The successful build looks like the following.

<br>![](images/successful_build.png)


## Summary

Congratulations! You've now set up SAP Continuous Integration and Delivery, added your GitHub repository to the service, and created and triggered your first CI/CD job.

Continue to - [Exercise 2 - Set up SAP Cloud Transport Management](../ex2/README.md)

