---
title: "Agile Mobile Development"
date: "June 9th, 2020"
author: "Devin Bandara"
twitter: "@cbandara1010"
summary: "Building agile apps quick and cheap!"
---

![Agile Development](./../assets/agile.png)

Agile Development is a team philosophy where you build things as needed. This doesn't mean you don't plan for the future but consider all the options and pick the easiest way to hit your goals.

This type of thinking can be seen at many startups since you're dealing with a high pressure to deliver and not much funding at first. The enemy of Agile Development is scope creep. Scope creep is when a project drags on due to the addition of extra features or constantly pivoting the core business model. The best way to prevent scope creep in agile development is to figure out product requirements and goals in the beginning and keep them concrete throughout the process. The other key to agile is keeping track of tasks and issues. My favorite way to do this is to utilize [Asana](https://app.asana.com/) or [Jira](https://www.atlassian.com/software/jira), which are both excellent task management tools for teams. They both contain different organizational models such as [SCRUM](https://www.atlassian.com/agile/scrum) or [Kanban](https://www.atlassian.com/agile/kanban). Scrum and Kanban are sometimes placed in a separate group outside of agile. But I think both these processes can be implemented in agile development.

Let's get into how to implement Agile when it comes to developing mobile apps. The first concern when building mobile apps is you must build two separate products. One for iOS and one for Android. You either have to hire someone who has both skills and overload them with work to hit deadlines or you have to have two separate teams. This is where Hybrid Apps come in. Hybrid can be written in a different language and then transformed to work on iOS and Android.

## Not all hybrid frameworks are created equal

### Flutter
Built by Google, it utilizes their Dart multi-platform language. Dart is powerful but more complicated than React or Angular. Flutter is the newest player on the block so it'll be harder finding experienced Flutter developers, tutorials and courses. The best about Flutter is its performance, reusable widgets and connection with platform specific SDK's.

### Ionic
Ionic is by far my least favorite option here. Not only does it use the hellish syntax of Angular, it is doesn't actually compile javascipt code into Swift and Java. Ionic uses cordova as a wrapper which runs around you javascript code to display it inside a container on your phone. This limits you GREATLY. You have to depend on cordova and capacitor to give you access to native features and SDK's. For example, if you want to use AR Kit in you app, well good luck because capacitor doesn't support it yet. Ionic is great for building simple mobile apps for developers who already have a strong Angular background. Ionic also allows you to build once and deploy everywhere. No building separate UI components for Android and iOS

### React Native
As you can probably tell by now React Native is my favorite. Coming from a React background, I truly believe in the "Learn Once. Write Everywhere." philosophy. React Native is performant and gives you the choice to build a truly hybrid app or a hybrid native app. The first method uses Expo, when using Expo there's no ios and android folders that you would usually get in your React Native project but this limits you to features supported by Expo. The good thing is, you can always start building in expo and when your app requires more complexity, you can just unlink Expo. If your app requires even more complexity that isn't supported by the react native CLI then you can add native modules written Java or Swift to your React Native app. This makes React Native very versatile and powerful yet easy to get started and well documented.


### Which Should I Use?
In my opinion. React Native will get almost any job done but has the capabilities of supporting a complex app in the longterm. React Native was built by Facebook and is used by Instagram, Tesla, Uber, Walmart and many more name brand applications. React Native does involve a little more work to launch for both iOS and Android but the work is minimal compared to the benefits that you gain so that you can scale efficiently. 


### API & Data Layer
You can always go the route of building a traditional API using Node.js, Express.js and MongoDB and that will work great but require some extra work getting started and planning the database architecture. If you really want to get things moving fast, use Firebase. Firebase allows you to quickly scaffold a data layer with user authentication that just works out of the box. Why build you own wheel when you can just borrow Google's? Firebase itself is pretty scalable but at a very large scale you will want to move to something more performant and cheaper on server costs.

### Features First, UX Later
This should be a no brainer but it can be easy to lose track of what's more important. This can crucial when you're trying to catch the interest of investors or hit deadlines fast. An investor can always picture a button in a different place or an alternate user flow but it's harder for them to imagine a feature that doesn't exist. So work on making sure you have robust, bug free features and then you can make the app look nice and pretty. 

### Go Build Something
You can plan all you want but all those Jira tasks aren't going to finish themselves. Organize your team around their individual strengths and weaknesses and then get to building. The longer you take brainstorming with the rest of the company is time taken away fom hitting deadlines. Figure out a plan that'll help you get underway right away but has the appropriate scope for a seriously powerfull app.