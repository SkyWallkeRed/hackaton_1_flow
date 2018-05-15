class ActivitiesData {
   constructor() {
       this.activities = [];
   }

   getActivities() {
      return $.get('/activities')     // Get in sync with Chaim's server route
      .then(  (data) => {
          this.activities =  data;
          
      })
   }

   addActivity() {
      return $.post('/activities', {text: activityText})
      .then(  (data) => {
          if (data.text == "Saved")
             this.activities.push({ text: activityText, comments: [], _id: data.id });
          
      })
   }

   removeActivity() {
      return $.ajax({
         type: 'Delete',
         url: '/delete/'+this.activities[index]._id
       })
       
     .then(  (data) => {
         if (data == "Deleted")
           this.activities.splice(index, 1);
          
     })
   }
}

export default ActivitiesData