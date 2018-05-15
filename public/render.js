class ActivitiesRender {
   constructor() {
       this.$posts = $(".posts");
       this.$postTemplate = $('#post-template').html();
       this.$commentTemplate = $('#comment-template').html();
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
