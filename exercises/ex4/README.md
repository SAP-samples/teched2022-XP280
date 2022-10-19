# Exercise 4 - Perform imports with SAP Cloud Transport Management

In this exercise we will trigger the import of a transport request which has been created by the job from the CI&D service. We will check the outcome of the import and the automatic forwarding of the transport request to the next node on your transport route.

## Start import into development subaccount

1. Access the cTMS UI by opening the 'Instances and Subscriptions' tab and clicking on the link to 'Cloud Transport Management'.
2. Navigate to **Transport Nodes**.
3. Click on the row with the first node in your transport route (should be called **DEV** if you followed the proposed naming convention).
4. You now see the import queue of the transport node DEV with the newly created transport request with a description starting with 'Git CommitI:'.
5. Select the checkbox in the beginning of the row and click on **Import Selected**.
6. Confirm the **Approve** window by clicking on **OK**.
7. The import starts and will run for a few minutes.
8. The **Status** of the transport request should change to **Succeeded**.

## Check transport log

1. Click on the icon at the end of the row with the transport request showing a paper with a magnifying glass.
2. A detailed log of the import process is displayed.
3. Click on **Close** to close log display.

## Verify automatic forwarding to next transport node

1. Navigate to the **Landscape Visualization**.
2. The **DEV** node shows one transport in status **Succeeded**.
3. The **TEST** node shows one transport in status **Initial/Repeatable**.
4. Select the **TEST** node by clicking on it once.
5. Click on **Go to this node's import queue** in the pane on the right side.
6. You find the same transport request in the queue. You can now optionally trigger the import into your test subaccount. This will additionally forward the transport request to the **PROD** node's import queue.

This concludes the exercises of this hands-on workshop.

**Congratulations!**
