# Stage 1

## Approach

This application fetches the notifications from the Notification API those were in protected condition using the Bearer token authentication that I got.


In the following order the notifications are prioritized

1. Placement
2. Result
3. Event

and along with that they are sorted on the basis of the 1. priority 
                                                        2. latest timestamp


Output of this is : The top 10 notifications are displayed in the frontend.

## Logging Middleware
A logging middleware was implemented that is reusable and it was implemented by using :

Log(stack, level, package, message)

The middleware sends logs to the logging server API.

Logs are being generated for hte foloowing :
- API fetching
- notification sorting
- rendering notifications
- error handling

## Scalability

The system dynamically handles new notifications by:
- fetches the updated notifications if any 
- calculate the priorities
- it will maintain the top 10 notifications perfectly and efficiently

The design is scalable for large notification volumes.
