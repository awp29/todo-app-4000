# TODO APP 4000

This is a very basic todo app you can check it out here https://todo-app-4000.vercel.app/

https://user-images.githubusercontent.com/99478348/212176034-1b9cea64-65cf-414b-bfd4-cb5b40c8ef6b.mov

## Features
- Add todos
- Mark Todos as complete
- Complete all todos
- Uses local storage to persist todos

## Still Todo
- Deleting todos, this is a priority. I feel it's not a fully functional app until deleting todos is added
- Responsive design, making it look good on small screens and general tiding up of the UI
- Testing, using React-Testing-Library to provide trust that the applcation is working after updates to the code
- Backend Restful API to manage/persist Todos

## Trade offs
- I think the biggest trade off is not having any tests. In real world production I would never produce something without out test but for this I feel having something function and working is better than having something half done with a few nice tests
- Design I'm not the greatest designer, it would be great to have a figma file to work from

# Web App Philosophy

My philosophy for building web apps is all about shipping features at a consistent pace its not about shipping as fast as possible its about shipping features consistently. Every decision I make is always seen through the lens of “Is this going to slow down shipping features”. So how do we ship features consistently? I believe there are a few key areas you need to keep on top of to achieve this

## Component Architecture

This is one of the most important things to get right because if your components become a mess and bloated it slows down everything. Creating new features become a grind. With my components I try to keep them as small as possible and declarative as possible. I feel like with this approach your components are always open and adaptable. You can never predict what is coming down the line from designers and there’s always an obscure button or card that comes along that you could never predict. Components need to be in a position that they can adapt to all the weird edge cases that come along. Having components that are massive, have tons of props and are full of if statements are not adaptable and cannot change to handle these edge cases. 

This is hard to explain quick but please take a look at this tech talk on the subject I gave at a local tech meet up

[https://www.youtube.com/watch?v=cIHVjjtYLRU&ab_channel=DevHubNorth](https://www.youtube.com/watch?v=cIHVjjtYLRU&ab_channel=DevHubNorth)

## Minimal Libraries

I like to keep my code as close to HTML, CSS, React, and Typescript as possible. I don’t like to through libraries at a problem because sometimes libraries muddy the water too much and it becomes hard to onboard new developers. Jobs that should be easy take longer because you have to go obscure library way of doing things. I had a bad experience with a library call `Styled-Components` that was good at first but over time made building components take way longer that it should have

## Styling Components

I used `Emotion-css` simply because it makes overriding styles super simple. I like to easily be able to override styles because there is always unique bit of UI that comes along, something always need to be spaced slightly different, theres always a unique button that only gets used in one scenario. Being to easily override existing styles makes it super easy to accommodate those weird edge cases.

## State Management Redux

I use Redux for state management but only in specific scenarios. If a feature is super state heavy and involves a lot of user interaction that mutates that state then I use Redux to manage that. I find it’s a nightmare managing that sort of state locally. But if its a dropdown is open then I use local state

## Test Coverage

Should be good enough to allow you to trust your application is working. The priority is shipping features not making the most perfect test suite. I don’t want the test suite to be a burden on the developers, I don’t want to find a dev has spent hours fixing a bunch of tests because the test suite is so massive and includes unit tests, snapshot test, integration test, end to end test, it uses React-Testing-Library and Cypress. I want just enough tests that gives developers trust in the applications and so that they don’t get in the way of shipping features.

I like the Kent C Dodds idea of just enough tests and to focus on integrations test using React-Testing-Library. This gives you confidence in you application and you don’t end up with this massive test suite that slows you down. Everyone at the company wants to ship features, they don’t want the most perfect test suite in the world
