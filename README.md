# Welcome to FiTracker!

FiTracker is a modern workout tracking tool to help users save and organize their past workouts.

## How To Use

<p float="left">
   <img src="/client/public/Register.png" />
   <img src="/client/public/Login.png" />
</p>

After registering and logging in on the website, users are directed to a dashboard where they can immediately begin filling in workout forms to add to their list of workouts completed. This form consists of four entries: the title, number of sets, number of reps, and load. Each of these fields are required and if left empty the user will be presented with an error. After filling in each entry, simply hit the submit button and the workout will be added!

<p float="left">
   <img src="/client/public/Landing.png" />
</p>


For each of the added workouts, there is a **delete** and **edit** button. When clicked, the delete button removes the workout from the list and discards it from the database, and the edit button allow users to edit the workout information (title, sets, reps, load).

<p float="left">
   <img src="/client/public/Mobile.png" />
   <img src="/client/public/Mobile_Login.png" />
</p>


## How It Works

This web application was built using the **MERN** Stack. The frontend is designed using **TailwindCSS** and **ReactJS**. The **Express** server acts as a backend and uses **Mongoose** to model users and workouts for communicating with the **MongoDB Atlas** database.

Account passwords are encrypted with **bcryptJS** and authentication is handled securely using **JSON Web Tokens**.
