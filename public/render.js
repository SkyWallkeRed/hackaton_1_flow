class ActivitiesRender {
   constructor() {
       this.$activities = $(".activities");                       // Edit with David's html class
       this.$postTemplate = $('#activities-template').html();     // Edit with David's html id
   }

   renderActivities(activities) {
      this.$posts.empty();
      let template = Handlebars.compile(this.$postTemplate);
      for (let i = 0; i < posts.length; i++) {
        let newHTML = template(posts[i]);
        console.log(newHTML);
        this.$posts.append(newHTML);
        this.renderComments(posts, i);
      }
   }
}

export default PostsRenderer
