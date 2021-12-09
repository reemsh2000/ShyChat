# ShyChat

## Live demo :tv:  [link](https://shychatapp.herokuapp.com/)

## Problem :memo: 
A lot of people are afraid of someone seeing their private messages on social media.

--------
## Solution :bulb:

We came up with the idea of creating a simple chat app that enables the user to communicate with anyone who has his/her mobile number, without anyone being able to see their conversation.

---------------
## User Story  :books: 

> User
* As a user, you can sign up.
* As a user, you can log in.
* As a user, you can add your information to your profile.
* As a user, you can add edit your profile.
* As a user, you can contact with anyone with his number.
--------------------------
## User journey  :open_book:
The user will enter the site and will login or signup,Hi/She will be able to chat with anyone who owns his/her number and no one is informed of their own messages, In addition to that he/she can create his/her profile and edit it .

-----

## Database schema: 

![shyChatschema](https://user-images.githubusercontent.com/71079908/145465787-c2d58b85-ec63-4592-94d1-16dad9ba4dbb.png)

------
## Technologies 💻:-
**BackEnd**: Node JS & Express JS ,WebSocket .

**FrontEnd**: React JS,WebSocket,typescript,tailwind,css.

**Database**: PostgreSQL.

-----------
## How to Launch App Locally
 * clone this repo by typing this command in the terminal:
 ```https://github.com/GSG-G10/ShyChat.git```
* Run `npm i` to install the packages for the app as general.
* Run `cd client` and `npm i` to install the packages for the client- React Js.
* Run `cd server` and `npm i` to install the packages for the server- Node Js.
### Database Setup 📋
* Make sure you have installed PostgreSQL and pgcli
```
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
* Test DB:
 Do the same as before but make sure to change the names.
* Run the following command in the database pgcli terminal
`\i server/database/config/build.sql` .


### Start the App :-
To start the App Locally you can start the server First then start client-side or vice versa!

To run Server, In your terminal Type:

* `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
 To run client-side, In your terminal Type:
* `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 
Now you can view the app live in the Browser!
------------------
## Team Members :busts_in_silhouette:
* [Reem Shamia](https://github.com/reemsh2000)
* [Nizar Zaqout](https://github.com/Nizar7zak)
* [Muhammad Haroun](https://github.com/muhammadharoun)
