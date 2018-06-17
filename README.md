# Canvas
A mini CMS Template built with Gatsby and Strapi. The main purpose to develop this is to provide designers to have a platform showcase and share their designs, like [sketchrepo](https://sketchrepo.com/). For now, it just provides a platform with basic functionalities to kickstart your own design blog.

This template is still under active development and below is the roadmap for next one month to make it a CMS with minimal functionality.

## Planned Features
- [x] Basic Blog Template
- [x] Tracking individual file Downloads
- [ ] Implementing Google analytics
- [ ] Adding site-wide search
- [ ] Implementing MailChimp to handle subscriptions
- [ ] Migrating away from graphql (Gatsby must be built every time to reflect the changes in the blog, which adds a limitation from hosting it with GitHub pages. This is to overcome this limitation)
- [ ] Options to add custom menu and pages
- [ ] File Upload Functionality
- [ ] Add functionality to change the theme
- [ ] Option to run advertisements

## Page structure
Currently template have 5 page templates, 
1. All
2. Popular
3. Recent
4. About us page
5. Individual file page

## Installation

Though it is built in with designers in mind, it needs to have a basic idea on Strapi as you will be posting blogs from logging into your strapi admin panel, similar to a Wordpress blog. So it is good to have a basic idea on both Strapi and Gatsby.

### Requirements

1. Install  and **START** MongoDB Community edition [Installation Docs](https://docs.mongodb.com/manual/installation/)
2. Install NodeJs Version 9 or above [Installation Docs](https://nodejs.org/en/download/) 
2. Install Strapi [`npm i -g strapi`]
3. Install Gatsby [`npm i -g gatsby-cli`]
5. Install git [Installation Link](https://git-scm.com/)

Above packages should be installed perfectly on your local machine. If you have any issue while setting up the blog, you can use *stack overflow* the issue or raise an issue in this repo for me to assist you.

Alright, You are ready to Set things up now!!

## Steps

1. Open your terminal/command prompt and navigate to a location you want to set it up, eg., 'cd Desktop'.
2. Next type `git clone https://github.com/SarathSantoshDamaraju/canvas` and `cd canvas`.
3. Now you see two folders `/frontend` and `/backend` -- go into `/backend` and type `npm i`, this will install required packages to run your backend server. 

<img width="661" alt="screen shot 2018-06-17 at 12 10 51 pm" src="https://user-images.githubusercontent.com/10527102/41505475-c6254af0-7227-11e8-9aba-af6d84cf6d87.png">

4. Good, next Setup up **Backend** and try running the server (This needs mongodb to be running, if you havent started it please refer these [docs](https://www.tutorialspoint.com/mongodb/mongodb_environment.htm)) type `strapi start` and you should see the messages like the below,

```
[2018-06-17T05:21:22.873Z info Server started in /Users/Desktop/canvas/backend
[2018-06-17T05:21:22.873Z] info Your server is running at http://localhost:8080
[2018-06-17T05:21:22.873Z] debug Time: Sun Jun 17 2018 10:51:22 GMT+0530 (IST)
[2018-06-17T05:21:22.873Z] debug Launched in: 2558 ms
[2018-06-17T05:21:22.873Z] debug Environment: development
[2018-06-17T05:21:22.873Z] debug Process PID: 3511
[2018-06-17T05:21:22.873Z] debug Version: 3.0.0-alpha.12.3 (node v9.11.1)
[2018-06-17T05:21:22.874Z] info To shut down your server, press <CTRL> + C at any time
```
Open your browser and type `http://localhost:8080` to see the strapi Page. Like below,

<img width="1440" alt="screen shot 2018-06-17 at 11 08 22 am" src="https://user-images.githubusercontent.com/10527102/41505134-6af9a656-721f-11e8-8eb6-9740ffd510be.png">

4.1. Click on `/admin` to see the registration page.

<img width="1440" alt="screen shot 2018-06-17 at 11 09 39 am" src="https://user-images.githubusercontent.com/10527102/41505132-6a779468-721f-11e8-81c8-150fbf6d021b.png">

4.2. You should see this page after registration. You are the `admin` and you have full access.

<img width="1440" alt="screen shot 2018-06-17 at 11 10 04 am" src="https://user-images.githubusercontent.com/10527102/41505131-6a3ada82-721f-11e8-82de-ac6000a9ea8a.png">


4.3. I have set up a structure for files already, so let us add a new file, click `Files` under `Content Types` on the left menu, you will see the below page.

<img width="1440" alt="screen shot 2018-06-17 at 11 23 57 am" src="https://user-images.githubusercontent.com/10527102/41505195-fc0dc87e-7220-11e8-8130-03611bb5d648.png">

4.4. Click on **Add new Files**. Set downloads to 0 if you don't see any default value and click **Save**

<img width="1440" alt="screen shot 2018-06-17 at 11 35 53 am" src="https://user-images.githubusercontent.com/10527102/41505264-a0b38e6c-7222-11e8-9b02-9714b92bb8f7.png">

4.5. See, this is how you add files even after hosting your blog, no coding required, Simple right!! Now set permissions to access your files. For now, let's go with public permissions and we can change it while integrating it with `/frontend`. On left Panel click **Roles & Permissions** and click **Public**. Now scroll down to **Permissions** tab and click **Application** and check **find** and **find one** and **save** on the top right of the page. Now your files are available to the public, go to `http://localhost:8080/files` to see the JSON data.

<img width="1440" alt="screen shot 2018-06-17 at 11 46 45 am" src="https://user-images.githubusercontent.com/10527102/41505326-2099a624-7224-11e8-92ad-18a8b6919040.png">

Server Setting up is Done!! Hardest Part of setting up is over and setting up frontend can be done in a jiffy.

<img width="661" alt="screen shot 2018-06-17 at 12 15 11 pm" src="https://user-images.githubusercontent.com/10527102/41505501-283beaa0-7228-11e8-804f-aa6ef7d9cb20.png">

5. Goto `/frontend` and run `npm i` to install the dependencies.
5.1 Run Gatsby (Gatsby need __backend__ running) with `gatsby develop` and open `http://localhost:8000` to see the UI.

![app](https://user-images.githubusercontent.com/10527102/41505350-cf8b3daa-7224-11e8-9174-28bc11d42deb.jpeg)
![files](https://user-images.githubusercontent.com/10527102/41505349-cf473bd2-7224-11e8-818b-e587effd704d.jpeg)
![contactus](https://user-images.githubusercontent.com/10527102/41505348-cef7dd8a-7224-11e8-96be-4f6bc67ebcdd.jpeg)

That's it. You have set up youw own design Blog in your system. Now Lets discuss how to host it in GCP (Google Cloud Platform)

