# Getting Started

In this exercise, you will create your own copy of this repository and set up access to both the
**SAP Continuous Integration and Delivery service** and the
**SAP Cloud Transport Management Service**.

## Create a copy of this repository

1. On the [main page of this repository](https://github.com/SAP-samples/teched2022-XP280), click
   the "Fork" button on the top right.

   <br>![](/exercises/ex0/images/fork_button.png)

1. Make sure that the owner matches the GitHub account that you want to use for the remainder of
   this session. All the other information can remain the same.

   <br>![](/exercises/ex0/images/fork_details.png)

1. Click "Create Fork". You should now be brought to a copy of the repository, but in your GitHub
   account. The top left of the screen should look similar to this:

   <br>![](/exercises/ex0/images/fork_name.png)

## Set up Subaccount on SAP Business Technology Platform (SAP BTP) Trial account

1. Open your SAP BTP Trial Account and create a sub-account by clicking the blue "Create" button and
   then clicking "Subaccount".

   <br>![](/exercises/ex0/images/subaccount_button.png)

1. The Region should be `US East (VA)`

1. The name and description are up to you, but we chose:
   > Display Name: `cicdTrial`
   >
   > Description: `Subaccount for TechEd 2022 session XP280: Combining SAP Continuous Integration and Delivery with Cloud Transport Management System to easily deploy to a productive system.`

   <br>![](/exercises/ex0/images/subaccount_settings.png)

1. Click "Create"

1. Open the subaccount by clicking on its name

## Set up SAP Continous Integration and Delivery Service

### Subscribe to the SAP Continuous Integration and Delivery Service

1. Go to the Service Marketplace menu, seen on the left. Search for "continuous" and then click on
   the 3 dots above the SAP Continuous Integration and Delivery service. Click "Create".

   <br>![](/exercises/ex0/images/create_subscription.png)

   > If you don't see the SAP Continuous Integration and Delivery service when you search for it, please add the correct entitlements by skipping to the next section and then coming back.

1.Leave the default settings and click "Create".

<br>![](/exercises/ex0/images/subscribe_to_service.png)

### (Optional) Add Correct Entitlements

If you didn't see the SAP Continuous Integration and Delivery Service in the Service Marketplace,
follow these steps to make it available there.

1. Open the Entitlements menu, seen on the left. Click on the blue "Configure Entitlements"
   button.

   <br>![](/exercises/ex0/images/configure_entitlements.png)

1. That button should now say "Add Service Plans". Click that button.

1. Search for "continous" and then click on the SAP Continous Integration and Delivery service.
   Check the box next to "trial (Application)" and click "Add 1 Service Plan".

   <br>![](/exercises/ex0/images/add_service_plan.png)

1. Back in the Entitlements menu, click "Save".

   <br>![](/exercises/ex0/images/save_entitlements.png)

You can now go back to the previous section to subscribe to the SAP Continuous Integration and
Delivery service.

### Add Required Permissions

1. If you see a window pop up that says "Creation in Progress", you can close it.

1. Click on Users, which is under the Security section on the left side menu. Then click on the
   arrow on the far right side of your user entry.

   <br>![](/exercises/ex0/images/click_on_user.png)

1. After scrolling to the bottom of the new menu that opened, click on the 3 dots, and then click
   on "Assign Role Collection".

   <br>![](/exercises/ex0/images/assign_role.png)

1. Check the boxes for "CICD Service Administrator" and "CICD Service Developer". Click "Assign Role
   Collection".

   <br>![](/exercises/ex0/images/assign_cicd_roles.png)

## Set up SAP Cloud Transport Management Service

### Subscribe to the SAP Cloud Transport Management Service

1. Go to the Service Marketplace menu, seen on the left. Search for "transport" and then click on
   the 3 dots above the SAP Cloud Transport Management service. Click "Create".

   <br>![](/exercises/ex0/images/create_tms_subscription.png)

   > If you don't see the SAP Cloud Transport Management service when you search for it, please add the correct entitlements by skipping to the next section and then coming back.

1. Choose "lite" for the Plan and click "Create".

<br>![](/exercises/ex0/images/create_tms_lite.png)

### (Optional) Add Correct Entitlements

If you didn't see the SAP Cloud Transport Management service in the Service Marketplace, follow
these steps to make it available there.

1. Open the Entitlements menu, seen on the left. Click on the blue "Configure Entitlements"
   button.

   <br>![](/exercises/ex0/images/configure_entitlements.png)

1. That button should now say "Add Service Plans". Click that button.

1. Search for "transport" and then click on the SAP Cloud Transport Management service. Check the
   box next to "lite (Application)" and also the box next to "standard" and click "Add 2 Service
   Plans".

   <br>![](/exercises/ex0/images/add_tms_service_plan.png)

1. Back in the Entitlements menu, click "Save".

   <br>![](/exercises/ex0/images/save_entitlements.png)

You can now go back to the previous section to subscribe to the SAP Cloud Transport Management
service.

### Add Required Permissions

1. If you see a window pop up that says "Creation in Progress", you can close it.

1. Click on Users, which is under the Security section on the left side menu. Then click on the
   arrow on the far right side of your user entry.

   <br>![](/exercises/ex0/images/click_on_user.png)

1. After scrolling to the bottom of the new menu that opened, click on the 3 dots, and then click
   on "Assign Role Collection".

   <br>![](/exercises/ex0/images/assign_role_2.png)

1. Search for "tms" and then check the boxes for "TMS_LandscapeOperator_RC" and "TMS_Viewer_RC".
   Click "Assign Role Collection".

   <br>![](/exercises/ex0/images/assign_tms_roles.png)

### Create a Cloud Foundry space

1. Click on the Overview button in the left menu, and then click Cloud Foundry Environment. Click on
   the "Create Space" button seen on the right side.

   <br>![](/exercises/ex0/images/create_space.png)

   > If you don't see the "Create Space" button, but instead see a "Enable Cloud Foundry" button, you can enable Cloud Foundry by skipping to the next section and then coming back.

1. As this space will be used for SAP Cloud Transport Management service, let's name the space
   "tms", keep the roles as they were set by default, and then click "Create".

   <br>![](/exercises/ex0/images/name_space.png)

### (Optional) Enable Cloud Foundry

If Cloud Foundry is not yet enabled in your subaccount, follow these steps to enable it.

1. Click on the Overview button in the left menu, and then click Cloud Foundry Environment. Click on
   the blue button titled "Enable Cloud Foundry".

   <br>![](/exercises/ex0/images/enable_cloud_foundry.png)

1. Rename the instance and org, or keep them as the default values and click "Create". I renamed my
   instance to the name of my subaccount with "cf-instance", and I renamed my org to be the name of
   the global account with "cf-org". Here's what that ended up looking like:

   <br>![](/exercises/ex0/images/create_cf_org.png)

You can now go back to the previous section to create a Cloud Foundry space.

### Create an Instance of SAP Cloud Transport Management Service

1. Go to the Service Marketplace menu, seen on the left. Search for "transport" and then click on
   the 3 dots above the SAP Cloud Transport Management service. Click "Create".

   <br>![](/exercises/ex0/images/create_tms_instance.png)

1. Select "standard" for the Plan. Cloud Foundry Runtime should be selected as the Runtime
   Environment, and if you have more than one Cloud Foundry space in your subaccount, make sure to
   select the "tms" space that we just created as the "Space". You can name your instance whatever
   you want. I chose "tms-instance". Click "Create".

   <br>![](/exercises/ex0/images/create_tms_instance_name.png)

### Create a Service Key

1. Go to the Instances and Subscriptions menu on the left side. Click on "Instances". You should see
   the instance you just created. On that entry, click on the 3 dots on the right side. Then click
   "Create Service Key".

   <br>![](/exercises/ex0/images/go_to_instance.png)

1. Name your service key and then click "Create". I named mine "tms-service-key". Don't worry about
   adding anything to the JSON format section- we don't need to add any additional parameters for
   our service key.

   <br>![](/exercises/ex0/images/go_to_instance.png)

## Summary

Now you have everything you need to successfully go through this TechEd session:

- Your own GitHub repository
- A subscription and correct permissions to access the SAP Continuous Integration and Delivery
  service
- A subscription and correct permissions to access the SAP Cloud Transport Management service
- A service key for using the SAP Cloud Transport Management service within the SAP Continuous
  Integration and Delivery service

you can continue to

- [Exercise 1 - Creating a Job in the SAP Continuous Integration and Delivery service](../ex1/README.md)
