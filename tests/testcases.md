# High-Risk Feature Testing

## Test case 1: Adding provider while not logged in
<p>Expected Output: Toast message saying “Login to add a provider”</p>

## Test case 2: Login with incorrect username 
<p>Expected Output: Toast message saying “Incorrect username or password”</p> 

## Test Case 3: User tries to sign up with existing username
<p>Expected Output: Toast message saying “Invalid [information field]”</p>
Actual Output: Toast message saying “Invalid [information field]”

## Test Case 4: User tries to sign up with “weak” password
<p>Expected output: Toast message appears telling user the requirements for a secure password.</p>

## Test case 5: User tries to sign up but passwords do not match
<p>Expected Output: A toast message appears informing the user that passwords do not match</p>

# User Acceptance Testing
	Many of the user acceptance testing from the previous sprint is also included.

## Test case 1: New user signup with unique username
<p>User submits a login with a unique username and password</p>
<p>Expected Output:  User is successfully added</p>

## Test case 2: Login with correct username and password
<p>User logs in with previously created username and password</p>
<p>Expected Output: Toast message saying “Welcome back {username}! :)”</p>

## Test Case 3: Mistype address for provider
<p>During the addition of a provider, an address is mistyped in the add a provider prompt page.</p>
<p>Drove is entered instead of drive</p>
<p>Expected Output: Address is validated and standardized</p>
<p>Actual Output: 
Drove is entered</p>

Fixed to drive

## Test Case 4: Input valid information into Add Provider
<p>User inputs all information in the add provider prompt page in a valid format.</p>
<p>Expected Output: Provider added successfully</p>

## Test Case 5: Send Email on User Signup
<p>User creates an account and is notified that an account has been made with their email</p>
<p>Expected Output: New Caregiver Connect User Made
caregiver-connect-test@outlook.com sends via sendgrid.net
Your email is successfully registered with Caregiver Connect!</p>

## Test Case 6: Selecting county that does not correspond with address when adding provider
<p>A user enters an address in which the county and street do not match a valid pair.</p>
<p>Expected Output: County is changed to county where address is located</p>
Actual Output: 
County information entered

Corrected county information displayed

## Test Case 7: Entering input into search bar on provider search page
User enters a search query into the provider lookup page.

Expected Output: Filter provider table based on input

Actual Output:

What is displayed before search filter

What is displayed after Super is put into the search filter

## Test case 8: Logging out while signed in
User completes a session and logs out of the webpage

Expected Output: Cookie in browser storing JWT is removed 

## Test Case 9: Send Account Verification Email on User Signup
User creates an account and receives an email to verify their email address to their created account.

Expected Output: Verify Your New Caregiver Connect Account
caregiver-connect-test@outlook.com sends via sendgrid.net
To verify your new Cargiver Connect account, please follow the verification link below:
Click the following link to verify your email: [INSERT LINK]

## Test Case 10: Account Verification Page
User clicks the account verification link that was sent via email, and successfully clicks the button to verify their email.

Expected Output: Account verified successfully prompt

## Test Case 11: Account Password Reset Page
User enters the password reset page from the link provided in their email. Upon entering a password and confirming it, their password is successfully changed.

Expected Output: Password Reset Successfully

## Test Case 12: Account Password Reset Email
User requests a password reset email by inputting their username and email. The email should have a link to the reset password page in order to reset the user password.

Expected Output: Reset your Caregiver Connect Password
caregiver-connect-test@outlook.com sends via sendgrid.net
To reset your Cargiver Connect account password, please follow the reset link below:
Click the following link to reset your password: [Link]

## Test Case 13: Account Password Reset Prompt Page
User has successfully clicked the link to reset their password and is prompted to input their email and username in order to receive the email link to change their password.

Expected Output: Prompts user for username and email and verifies email for reset has been sent