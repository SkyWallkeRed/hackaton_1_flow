import ActivitiesData from './data.js';
import ActivitiesRender from './render.js';
//import EventsHandler from './events-handler.js';
//Add info from David's Event Handler file

let activitiesData = new ActivitiesData();
let activitiesRender = new ActivitiesRender();
//let eventsHandler = new EventsHandler(postsRepository, postsRenderer);
//Add info from David's Event Handler file

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();

let getPosts = postsRepository.getPosts();
getPosts.then( () => {
    
    postsRenderer.renderPosts(postsRepository.posts)});