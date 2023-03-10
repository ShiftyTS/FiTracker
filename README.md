# Welcome to FiTracker!

FiTracker is a modern workout tracking tool to help users save and organize their past workouts.

## How To Use

![Register](https://cdn.discordapp.com/attachments/1075512442437771355/1076006604731854848/Register.png)
After registering and logging in on the website, users are directed to a dashboard where they can immediately begin filling in workout forms to add to their list of workouts completed. This form consists of four entries: the title, number of sets, number of reps, and load. Each of these fields are required and if left empty the user will be presented with an error. After filling in each entry, simply hit the submit button and the workout will be added!

![Dashboard](https://cdn.discordapp.com/attachments/1075512442437771355/1076006605008683078/Landing.png)

For each of the added workouts, there is a **delete** and **edit** button. When clicked, the delete button removes the workout from the list and discards it from the database. The edit button is currently incomplete but when finished it will allow users to edit the workout information (title, sets, reps, load).

![Mobile](https://cdn.discordapp.com/attachments/1075512442437771355/1076006605361008691/Mobile.png)
![MobileLogin](https://cdn.discordapp.com/attachments/1075512442437771355/1076006605734297711/Mobile_Login.png)

## How It Works

This web application was built using the **MERN** Stack. The frontend is designed using **TailwindCSS** and **ReactJS**. The **Express** server acts as a backend and uses **Mongoose** to model users and workouts for communicating with the **MongoDB Atlas** database.

Account passwords are encrypted with **bcryptJS** and authentication is handled securely using **JSON Web Tokens**.
