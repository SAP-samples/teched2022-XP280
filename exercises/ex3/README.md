# Exercise 3 

In this exercise we will further extend usability of SAP Continuous Integration and Delivery for CAP using pipeline.

- [Exercise 3](#exercise-3)
  - [Exercise 3.1 - Enable Additional Unit Tests](#exercise-31---enable-additional-unit-tests)
  - [Exercise 3.2 - Create Service Key for TMS in Credentials](#exercise-32---create-service-key-for-tms-in-credentials)
  - [Exercise 3.3 - Activate Release Stage and configure TMS](#exercise-33---activate-release-stage-and-configure-tms)
  - [Exercise 3.4 - Run the Pipeline manually (Test stage fails)](#exercise-34---run-the-pipeline-manually-test-stage-fails)
  - [Exercise 3.5 - Fix the test and commit](#exercise-35---fix-the-test-and-commit)
  - [Exercise 3.6 - Check the Pipeline for success](#exercise-36---check-the-pipeline-for-success)

## Exercise 3.1 - Enable Additional Unit Tests

In this exercise we will turn on additional unit tests for the pipeline.
Please turn on additional unit tests as depicted via the image below using the toogle button.
<br>![](/exercises/ex3/images/03_01_0010.png)

## Exercise 3.2 - Create Service Key for TMS in Credentials

In this exercise we will create credentials for cloud transport management service. 
Please copy&paste the json file from btp and go to credentails section.
Please click on credentials section within continous integration and delivery application as shown in the picture below. Press + button to create credentials and enter a valid name and description. Here we have to choose the type - Service Key.

<br>![](/exercises/ex3/images/03_02_0010.png)

## Exercise 3.3 - Activate Release Stage and configure TMS

In this exercise we will turn on release stage and run them. Here we are required to turn on Release and Upload to Cloud Transport Management. Please use the toogle button to turn both of them on as shown below. The parameters marked with red asterisk are mandatory and must be provided.
Use the service key that you created in previous exercise here for cloud management system.

<br>![](/exercises/ex3/images/03_03_0010.png).

## Exercise 3.4 - Run the Pipeline manually (Test stage fails)

Run the pipeline with additional unit test stage and release stage.
Here the test stage is bound to fail.

## Exercise 3.5 - Fix the test and commit

Do sth here to fix the test !!!

## Exercise 3.6 - Check the Pipeline for success

Run the pipeline after the fix of additional unit test.

