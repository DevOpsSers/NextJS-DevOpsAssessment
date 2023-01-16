# Devops AE1

## Group: DevOpsEngineers
## Team Members:

- William Hayward
- David Agbolade
- Guillermo Caballero Massa
- Jonathan Ortiz

<br></br>

## Github Repo:

- https://github.com/DevOpsSers/NextJS-DevOpsAssessment

<br></br>

## Deployed Version of The Project:

- https://next-js-dev-ops-assessment.vercel.app/

<div style="page-break-after: always;"></div>

# Introduction:

In this project, we set out in a group to create Nextjs web application with the aid of DevOps techniques to serve the ending goal of being a recipe-sharing platform. Users would be able to share different recipes on the application and interact with existing additions through the means of features such as comments and likes. 


<div style="page-break-after: always;"></div>

# Project Management:

Using a document within a group project can be an effective way to help manage workload (see link below).

- https://docs.google.com/spreadsheets/d/1FQ0ekRTF4RLf-8U093kBhbL5bMUhq2mWuNYTkxVZoLc/edit#gid=0


By making use of this Google sheet, all members of the group could access and make changes in real-time, allowing for easy collaboration and communication. This document was used to track the progress of the project as a whole and to assign tasks to different members. By the utilization of this document, group members could easily stay on top of their responsibilities and ensure that everyone is working together towards completing the project successfully.

<br>
Another way we used to manage the workload of the project was to use a discord project group chat since this easy and simple tool can be a way to keep everyone informed and on task. group chats allow for real-time communication as well as the ability to share information and updates between group members. It was useful for coordinating tasks due to group members being able to easily ask for assistance from one another. Additionally, the group chat provided an easy way for everyone to stay knowledgeable with what everyone else was working on. The use of the group chat also enabled us to facilitate a more fluent and dynamic collaboration scheme for the project.

<br>

Version control is a key process that we would use to develop our project. Using this process in an application made up of multiple developers allowed us to monitor changes made to the application, identifying any problems that may exist with merging different pieces of code together. We used GitHub to facilitate this, allowing us to collaborate on a single application as seamlessly as possible. 


In order to make the continuos integration easy for each team member we all agreed as a group on following the same protocol every time we needed to add any important feature to the app.

1. The first Step consists in RAISING A NEW ISSUE, giving it a explanatory name and description.

2. Then, assigning ourselves to it and create a new development branch that will be assigned to the issue.

3. Once the feature is done, the commit is pushed into this new branch and the owner will open a pull request to staging, which will be merged by the owner if that´s the only improvement going on or revised and merged by the group leader (Guillermo Caballero) in case there are multiple feature implementation simultaneously.

4. The group leader is the only person that can merge code into main in order to avoid deployment errors.

The protocol mentioned above is mentioned here:
- https://docs.google.com/document/d/1pHNf9qZS0DJVGCtwTkSRk8tgElsnMYV5aSbC-M_9tKI/edit


This method is very helpful because if the wort case scenario, we would just need to cherry pick the lines of code for each feature as the branches where this code has been merged to have been assign to a well named issue.  


<div style="page-break-after: always;"></div>

# DevOps Workflow:

DevOps is a set of practices and tools that aims to improve collaboration between software developers and IT operations teams. The goal of DevOps is to automate and streamline the software development and deployment process, allowing for faster and more frequent releases of new features and bug fixes. By breaking down silos between development and operations teams, DevOps helps organizations to deliver software more efficiently and with higher quality.

DevOps practices include continuous integration and continuous delivery (CI/CD), infrastructure as code, and monitoring and logging. These practices are supported by a wide range of tools such as Ansible, Jenkins, and Kubernetes, which automate various aspects of the software development and deployment process. By implementing DevOps practices and tools, organizations can reduce the time it takes to go from code to production, increase the reliability and stability of their software, and improve collaboration between teams.
<br></br>
## Eslint and Prettier:
In this project, we decided to use software such as ESlint and Prettier to help improve the quality, consistency and maintainability of the code throughout the course of the project. ESlint allowed us to see potential errors in our code reflecting the set of rules in which we configured. Prettier was used to format our code to ensure that it was kept in a consistent manner between all files. Using these pieces of software allowed us to make sure that our code kept to a consistent format making it easier for people to understand and work on the code. Additionally, ESLint allowed us to identify potential errors in our code at an early stage reducing the time used for debugging.
<br>

## Cypress:
Another practise that we used within this project was the addition of Cypress. Cypress is a module which allows developers to write tests which mimic how a user would interact with the site. This allowed us to test our design and implementation to check for potential errors within our code.
<br>

<div style="page-break-after: always;"></div>

## Storybook:
For testing the UI of the webpage and improving the development workflow, Storybook was used. Stories were created for each component (recipeshow, login, sign-in and alerts). Storybook isolates different components within an application which makes for an improved design stage as it allows for testing components in different configurations and states. This tool also helps with the documentation of a project as well as allowing components to be reused which in turn reduces the amount of duplicated code present in the project. 


### Recipe-Show story:
In the recipe-show story, the code is using the Storybook library to create a visual test environment for the "Recipe-Show" component in a React application. The code is creating a default story for the Recipe-Show component and passing in several props such as recipe, categories, ingredients and steps, which will be used to render the component and display the information on the storybook for testing.

### Sign-in story:
The code is using the Storybook library to create a visual test environment for the "Sing-in Form" component in a React application. The title property is being used to set the title for the story, and the component property is being used to specify which component the story is for. The parameters property is being used to set additional options for the story, in this case, it's set to fullscreen layout.<br>

The code also creates a template component that takes in an object with different props (email, firstName, last_name, password and Accept_terms) and it returns the SinginForm component with these props.<br>

Finally, the code exports a default object containing the title, component and parameters properties and an export named Default which is using the bind method on the template component and passing in an empty object as the argument, Default.args is used to set the value of the props that the template component takes. The text and boolean function from the @storybook/addon-knobs library are used to set the values of the props from the template component.

<div style="page-break-after: always;"></div>

## Unit Tests:
Unit tests were also used within our development by using the JavaScript framework Jest. This framework is beneficial to the development as it allowed us to test isolated code blocks as well as React components. It is an easy-to-use solution when it comes to testing for finding bugs earlier within the process of development therefore improving the overall quality of code produced.


### Login Form Testing:
The login test code is using Jest and the React Testing Library to test a "Login Form" component. It has 3 test cases that test the following:
-	The form correctly renders the three input fields for email, password and accept terms.
-	Email input field is updating when the user types in it.
-	Password input field is updating when the user types in it.

It is checking that the component displays the inputs correctly and can handle the change event of these inputs.

### Recipe Testing:
The "Recipe List" component is tested by the recipe code using Jest and the React Testing Library. The data retrieval is likewise taken care of by the React Query library.

The code builds a fresh instance of Query Client and encases the Recipe List component in QueryClientProvider. Following that, it generates an example recipe object and a list of recipes, which it then gives as a prop to the Recipe List component.

After rendering the component, the test case employs the getByText method from the React Testing Library to determine whether the recipe name and author have been rendered correctly in the DOM. The component's display of the recipe name and author that were provided to it as props is being examined.

### Recipe Show Testing:
The "Recipe Show" component is being tested by the recipe show code using Jest and the React Testing Library. It provides a number of variables to pass as props to the Recipe Show component, representing the recipe, categories, ingredients, and steps. The test case renders the component, tests to see if the step title and content are appropriately presented in the DOM, and simulates clicking the "Next" and "Back" buttons while rendering the component. It verifies how the component handles the next and back buttons as well as how the step title and content are displayed.


<div style="page-break-after: always;"></div>

## Deployment:
The app´s deployment is done In Vercel, which installs it own dependency bot in the repository and runs tests for every merge that is done in the repository.
(https://docs.google.com/document/d/1Nt82pGSAaJBw_ZObjf1cbFPSxKbfSDs_tZ4IM0zmbSU/edit?usp=sharing)<br>
Note Vercel provides multiple domains and we are using https://next-js-dev-ops-assessment.vercel.app/ so it means the Vercel bot approved the changes and merging this branch won´t lead to a deployment error.
 


<div style="page-break-after: always;"></div>

# Reflection And Future Work:

On reflection of our work as a whole, we have created a smooth and efficient user experience for the application of our recipe-sharing platform using many different DevOps practices and a successful collaboration scheme by using tools such as Git.

However, due to time contraints we were not able to add every feature we had planned for this application. These features consist of:
- Search filters (categories, number of people etc.)
- Interactions with comments
- A user page
- A favourite recipes page
- A way to edit published recipes
- An dashboard for admins
- A seeder file
- Reccomendations

The implementation of features such as these would bring our application to an even further level and would allow us to further develop on using different DevOps development styles, increasing our knowledge and capabilities. 

In future projects, as we would be familiarised with the practises used, we would be able to implement features such as the ones mentioned above. Along with that, we would be able to look into the implementation of more advanced processes which would aid in further increasing our capabilities as developers. 