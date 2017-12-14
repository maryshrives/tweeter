/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//$( document ).ready(function () {
$(document).ready(function() {
  $( "textarea").focus();

$( ".compose-button" ).click(function() {
  $( ".new-tweet" ).slideToggle( "slow" );
  $( "textarea").focus();
});

  function renderTweets(data) {
    data.forEach(function(tweetData) {
      $("#posted-tweets").append(createTweetElement(tweetData));
  })
};

function createTweetElement(tweetData) {  //takes a tweet object, returns an <article> entire HTML structure of tweet
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
    }
    return `
    <section id="posted-tweets">
        <article class="tweet">
        <header>

              <img class="avatars" src="${tweetData.user.avatars.small}">
              <h2 class="name">${tweetData.user.name}</h2>

            <span class="handle">${tweetData.user.handle}</span>
        </header>
        <div class="tweet-text">
            <p>${escape(tweetData.content.text)}</p>
        </div>
        <footer>
            <span class="date-added">${moment(tweetData.created_at).fromNow()}</span>
            <div class="icons">
              <i class="fa fa-flag" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
        </footer>
        </article>
    </section>
  `;
}
  function loadTweets() {
          $.ajax({
            url: "/tweets",
            method: "GET",
            dataType: "json",
          })
          .done(function(tweets){
            renderTweets(tweets)
          })
      }
      loadTweets();
//submit tweet -error handling included
  $(".tweets").on("submit", function(event) {
    const tweetForm = $(".tweets");
    const finishedTweet = $("textarea").val();
      event.preventDefault();
      if (finishedTweet.length === 0) {
        alert("Tweet can't be empty, what's on your mind?");
      } else if (finishedTweet.length > 140) {
        alert("Tweet has too many characters");
      } else {

        $.ajax({
          url: "/tweets",
          method: "POST",
          data: $(this).serialize(),

      })
        .done(function(){
          tweetForm[0].reset();
          $('.counter').html('140');
          location.reload();
        loadTweets();
        })
      }
    });
});