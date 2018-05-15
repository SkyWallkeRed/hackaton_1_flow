import ActivitiesData from './data.js';
import ActivitiesRender from './render.js';
import EventsHandler from './events-handler.js';  //Edit info from David's Event Handler file

let activitiesData = new ActivitiesData();
let activitiesRender = new ActivitiesRender();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);  //Add info from David's Event Handler file

eventsHandler.registerAddPost();  //Edit info from David's Event Handler file
eventsHandler.registerRemovePost();  //Edit info from David's Event Handler file
eventsHandler.registerToggleComments();  //Edit info from David's Event Handler file
eventsHandler.registerAddComment();  //Edit info from David's Event Handler file
eventsHandler.registerRemoveComment();  //Edit info from David's Event Handler file

// On load get & render data
let getActivities = activitiesData.getActivities();
getActivities.then( () => {
    
   activitiesRender.renderActivities(activitiesData.activities)});