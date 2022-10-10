# Create target subaccounts for transport

1. Go to the BTP Cockpit of your SAP BTP Trial global account to the tab 'Account Explorer'.
2. You should see (at least) one subaccount called 'trial', which was created when your Trial global account was set up.
3. You will now create two additional subaccounts which will be used as targets for transporting with SAP Cloud Transport Management.
4. Choose **'Create -> Subaccount'**.
5. Enter a **Display Name** of your choice, for example 'Test'
6. Enter a **Subdomain** name. Please note that this name must be unique in your region, so you might want to include something specific to your trial account. The input screen provides you with a proposal when you start typing in the Display Name field.
7. For **Region** choose the same region as your Trail global account is in.
8. Click on **Create**
9. The creation of the subaccount takes a few seconds.
10. Click on the newly created tile.
11. On the 'Overview' tab click on **Enable Cloud Foundry**.
12. Leave the **Plan** set to **standard**.
13. You can leave the **Instance Name** as it is.
14. The **Org Name** becomes part of the URL to be used in the destination to deploy content to this subaccount. So you might want to make it a little shorter as the proposal which is created from global account name and the subdomain name. It must be be unique, though. As the subdomain name has to be unique as well you could use it as Org Name as well (remove the global account name part).
15. Click on **Create**.
16. After a few seconds the Cloud Foundry Environment is set up.
17. Click on **Create Space**.
18. Choose a **Space Name**, for example 'Test'
19. Make sure that your user gets the roles 'Space Manager' and 'Space Developer' assigned. This is the default.
20. Click on **Create**.
21. Go back to the Account Explorer view of your Trail global account by clicking on its name in the breadcrumps on the top of the screen (besides the globe icon).


Repeat the above steps for your second addtional subaccount. Call it for example 'Prod'.

22. Choose **'Create -> Subaccount'**.
23. 25. Enter a **Display Name** of your choice, for example 'Prod'
26. Enter a **Subdomain** name. Please note that this name must be unique in your region, so you might want to include something specific to your trial account. The input screen provides you with a proposal when you start typing in the Display Name field.
27. For **Region** choose the same region as your Trail global account is in.
28. Click on **Create**
29. The creation of the subaccount takes a few seconds.
30. Click on the newly created tile.
31. On the 'Overview' tab click on **Enable Cloud Foundry**.
32. Leave the **Plan** set to **standard**.
33. You can leave the **Instance Name** as it is.
34. The **Org Name** becomes part of the URL to be used in the destination to deploy content to this subaccount. So you might want to make it a little shorter as the proposal which is created from global account name and the subdomain name. It must be be unique, though. As the subdomain name has to be unique as well you could use it as Org Name as well (remove the global account name part).
35. Click on **Create**.
36. After a few seconds the Cloud Foundry Environment is set up.
37. Click on **Create Space**.
38. Choose a **Space Name**, for example 'Prod'
39. Make sure that your user gets the roles 'Space Manager' and 'Space Developer' assigned. This is the default.
40. Click on **Create**.

You now have (at least) three subaccounts inside your Trail global account. 

This concludes this exercise.
