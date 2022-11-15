# Exercise 0 - Getting Started

In this exercise, you will create your own copy of this repository and optionally, set up a subaccount on your
[SAP Business Technology Platform (SAP BTP) Trial account](https://account.hanatrial.ondemand.com/trial/#/home/trial).

## Exercise 0.0 - Create a Copy of This Repository

1. On the [main page of this repository](https://github.com/SAP-samples/teched2022-XP280), choose **Fork** on the top right.

1. Make sure that the **Owner** matches the GitHub account that you want to use for this session. All the other information can remain the same.

   <br>![](/exercises/ex0/images/fork_details.png)

1. Choose **Create Fork**. You are now brought to a copy of the repository in your GitHub account.

## Exercise 0.1 - (Optional) Set Up a Subaccount on Your SAP BTP Trial Account

Please complete the following steps, if
* you don't have the automatically created subaccount named "trial" [in your SAP BTP trial account](https://account.hanatrial.ondemand.com/), or
* your "trial" subaccount is in a region other than "US East (VA)".

1. In your SAP BTP trial account, choose **Create**, and from the drop-down list, choose **Subaccount**.

1. For **Region**, choose `US East (VA)`.

1. Enter a **Display Name** and a **Description**. We chose the following:
   > Display Name: `cicdTrial`
   >
   > Description: `Subaccount for TechEd 2022 session XP280: Combining SAP Continuous Integration and Delivery with SAP Cloud Transport Management to easily deploy to a productive system.`

1. Choose **Create**.

1. To open your newly created subaccount, click on its name. The next exercises will all be completed within this
   subaccount.

### (Optional) Add the Required Entitlements

If in the **Service Marketplace** in your subaccount, you didn't see the **Continuous Integration & Delivery** tile, execute the following steps.

1. In your subaccount in the SAP BTP cockpit, choose **Entitlements**.

2. In the **Entitlements** overview of your subaccount, choose **Configure Entitlements**.

   <br>![](/exercises/ex1/images/configure_entitlements.png)

3. Choose **Add Service Plans**.

4. In the text box, enter and search for `continuous` and choose **Continuous Integration & Delivery**.

5. In the **Service Details: Continuous Integration & Delivery** pane, check the box next to **trial (Application)** and choose **Add 1 Service Plan**.

   <br>![](/exercises/ex1/images/add_service_plan.png)

6. Back in the **Entitlements** overview of your subaccount, choose **Save**.

Your new subaccount `cicdTrial` has now all the prerequisites to run this session.

## Summary

You now have everything you need to successfully go through this TechEd session:

- Your own fork of the session's GitHub repository
- A subaccount in the correct region in your SAP BTP trial
  account

Please continue to the next exercise, [Exercise 1 - Create a Job in the SAP Continuous Integration and Delivery service](../ex1/README.md).
