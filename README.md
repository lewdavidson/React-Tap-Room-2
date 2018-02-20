## Pierre's General Store in React
##### Lew Davidson


* Description:

 >A re-creation of an existing Angular App using React to build out the component tree and styling. This is intended to be a dynamic App after next Friday, with functionality for adding and editing inventory and the ability to "sell" or decrement stock levels.

* Differences in development process between Angular and React:

Right off the bat there are a few that come to mind. React needs more separate components to achieve the styling and structure that you want in the view. Angular has little pieces that fit together whereas React seems to have different pieces that need to overlap and sit on top of each other. The planning process is really vital in React due to the need for everything to hold hands and have a specific purpose. CSS is also quite a bit different in React, much more collaboration between parent and child components is needed for the CSS to function correctly.   

 * Component Structure:

 [Original Whiteboard drawing](https://imgur.com/a/kqzS4)

 [Week Two Whiteboard Drawing](https://imgur.com/a/kmplJ)

 I don't think I will have to re-structure my components in order to lift state.

 ___
```
 Notes:
```

* Originally had my router in App which made the Body component useless! I created the body component for styling purposes originally and wanted to keep it, so I ended up having to move my router into body instead.

* I tried to keep all of my inventory data in a separate component and import it into any component that needed it (which I still think is the way to go) but it wasn't working correctly and I couldn't get them to talk to each other, so I moved my data into the Display component and it works fine.
 EDIT: I ended up figuring out how to store my inventory object in another separate data file!

* I struggled a bit with conceptualizing how to change a button depending on which area of the page you are on, but ended up messing with the props to get them to behave!

```
 Notes Week 2:
```

* I am thinking about lifting state to my "body" component because it is the closest parent to the other two components that need access to the information.

* After successfully lifting state into the "body" component, I realized that the "data" component was no longer needed to make the app function, so I removed it and moved its contents into the "body" component where it can be used in the entire app.

* Halfway through the day, I am having some trouble with creating a callback function that removed items from the admin route. By the time the function is fired, the selected item is undefined.

* I had a lot of trouble with data flow today, would like to come back to this with fresh eyes to follow the many threads running through the app.

* Figured out how to convert my array of objects to an object of objects so that I could assign an id to each item and target it in order to delete it. I also realized that I was both affecting employee display component and inventory display component in order to produce and display inventory items.

* I played around with my new object and figured out how to "sell" an item and remove it from my store once it has been sold out! 

```
 To-Do:
```

[x] Potentially re-factor component tree before lifting state

[x] Lift state to add the ability to add, display, and manage new inventory

[x] Add functionality to pass refs into APP to display new items

 Go Further:

 [x] Add functionality to delete items from admin

 [ ] Add functionality to edit items from admin

 [x] Add functionality to 'sell' an item and decrease its inventory

 [x] Add unique IDs to items, instead of looking up by index
