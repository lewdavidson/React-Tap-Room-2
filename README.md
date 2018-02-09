## Pierre's General Store in React
##### Lew Davidson

 * Description:

 ...A re-creation of an existing Angular App using React to build out the component tree and styling. This is intended to be a dynamic App after next friday, with functionality for adding and editing inventory and the ability to "sell" or decrement stock levels.

 * Differences in development process between Angular and React:

 ...Right off the bat there are a few that come to mind. React needs more separate components to achieve the styling and structure that you want in the view. Angular has little pieces that fit together whereas React seems to have different pieces that need to overlap and sit on top of each other. The planning process is really vital in React due to the need for everything to hold hands and have a specific purpose. CSS is also quite a bit different in React, much more collaboration between parent and child components is needed for the CSS to function correctly.   

 * Component Structure:
 [I drew it out on a whiteboard](https://imgur.com/a/kqzS4)
 ...I used this week's coursework to determine the most logical component path.

* Notes:

* Originally had my router in App which made the Body component useless! I created the body component for styling purposes originally and wanted to keep it, so I ended up having to move my router into body instead.

* I tried to keep all of my inventory data in a separate component and import it into any component that needed it (which I still think is the way to go) but it wasn't working correctly and I couldn't get them to talk to each other, so I moved my data into the Display component and it works fine.
