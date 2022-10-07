# Session ID - Session Title

## Description

This repository contains the material for the SAP TechEd 2022 session called Session ID - Session Title.  

## Overview

This session introduces attendees to...

## Requirements

The requirements to follow the exercises in this repository are...

 * Trial-Account
 * GH user + fork of repository

We bring:
* sample-app (fiori, target runtime CF, launchpad) by Harald
* https://github.com/harry22ndstreet/TechEd2021/tree/TechEdDemo (needs renaming and maybe a better org -- idea: put it into our session repo (license), see mayur's session)

## Exercises

Provide the exercise content here directly in README.md using [markdown](https://guides.github.com/features/mastering-markdown/) and linking to the specific exercise pages, below is an example.

- [Getting Started](exercises/ex0/)
- [Exercise 1 - First Exercise Description](exercises/ex1/)
    - [Exercise 1.1 - Exercise 1 Sub Exercise 1 Description](exercises/ex1#exercise-11-sub-exercise-1-description)
    - [Exercise 1.2 - Exercise 1 Sub Exercise 2 Description](exercises/ex1#exercise-12-sub-exercise-2-description)
- [Exercise 2 - Second Exercise Description](exercises/ex2/)
    - [Exercise 2.1 - Exercise 2 Sub Exercise 1 Description](exercises/ex2#exercise-21-sub-exercise-1-description)
    - [Exercise 2.2 - Exercise 2 Sub Exercise 2 Description](exercises/ex2#exercise-22-sub-exercise-2-description)

- Preparations
    - [Get a free account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
    - Remove: [Set Up SAP Business Application Studio for Development](https://developers.sap.com/tutorials/appstudio-onboarding.html)
    - Get GitHub user
    - Fork Example coding
    - [Set Up SAP Launchpad Service Using a Trial Account](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html)
    - [Create a Dev Space for SAP Fiori Apps](https://developers.sap.com/tutorials/appstudio-devspace-fiori-create.html)
    
- Getting Started
    - Forking _this_ repository (we'll make https://github.com/harry22ndstreet/TechEd2021/tree/TechEdDemo into this repository - need to talk Harald)
    - [subscribing to CICD service  and assign role collections]()
    - subscribing to CTMS

- Setting Up Cloud Transport
    - create route etc to be used later in cicd setup

- Setup CICD pipeline
    - [Access the service and create a repository]()
    - create job with build only (run manually)
    - edit the job with enable "additional unit tests to fail) with tms support (get service key, transport route exists already, see above)
    - create webhook while job is running (manually)
    - code change fix
    
- Exercise n+1 Setup CI/CD Pipeline
  - build
  - add unit tests (if we want to fail during test)
  - release with TMS

  
**OR** Link to the Tutorial Navigator for example...

Start the exercises [here](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html).

**IMPORTANT**

Your repo must contain the .reuse and LICENSES folder and the License section below. DO NOT REMOVE the section or folders/files. Also, remove all unused template assets(images, folders, etc) from the exercises folder. 

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
