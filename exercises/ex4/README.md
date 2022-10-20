# Exercise 4 - Perform imports with SAP Cloud Transport Management

In this exercise we will trigger the import of a transport request which has been created by the job from the Continuous Integration and Delivery service. We will check the outcome of the import and the automatic forwarding of the transport request to the next node on your transport route.

## Start import into Development Subaccount

1. Access the UI of SAP Cloud Transport Management service by opening the **Instances and Subscriptions** tab and clicking on the **Cloud Transport Management** link.
2. Navigate to **Transport Nodes**.
3. Click on the row with the first node in your transport route. It should be called **DEV** if you followed our proposed naming convention.
4. You see the import queue of the transport node *DEV* that contains the new transport request with a description starting with *Git CommitI:*.
5. To start the import into this node select the checkbox at the beginning of the row and choose **Import Selected**.
6. Confirm the **Approve** window by clicking **OK**.
7. The import starts and will run for a few minutes.
8. The import **Status** for the transport request should change to **Succeeded**.

## Check the Transport Log

1. Click on the icon at the end of the row with the transport request showing a paper with a magnifying glass.
2. A detailed log of the import process is displayed.
3. Click on **Close** to close the log display.

## Verify Automatic Forwarding to Next Transport Node

1. Navigate to the **Landscape Visualization**.
2. The **DEV** node shows one transport in status **Succeeded**.
3. The **TEST** node shows one transport in status **Initial/Repeatable**.
4. Select the **TEST** node by clicking on it once.
5. Click on **Go to this node's import queue** in the pane on the right side.
6. You find the same transport request in the queue. You can now optionally trigger the import into your test subaccount. This will additionally forward the transport request to the **PROD** node's import queue.

This concludes the exercises of this hands-on workshop.

**Congratulations!**
