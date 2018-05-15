class ActivitiesData {
   constructor() {
      this.activities = [];
   }

   getActivities() {
      return $.get('/activities')   //Edit info from Chaim's server routes
         .then((data) => {
            this.activities = data;
         }) 
   }

   addActivity() {
      return $.post('/activities', {    //Edit info from Chaim's server routes
            text: activityText
         })
         .then((data) => {
            if (data.text == "Saved")
               this.activities.push({
                  text: activityText,
                  comments: [],
                  _id: data.id
               });

         })
   }

   removeActivity() {
      return $.ajax({
            type: 'Delete',
            url: '/delete/' + this.activities[index]._id    //Edit info from Chaim's server routes
         })

         .then((data) => {
            if (data == "Deleted")
               this.activities.splice(index, 1);

         })
   }
}

export default ActivitiesData