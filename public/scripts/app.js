/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//$( document ).ready(function () {
$(function() {

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

  function renderTweets(tweets) {
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
            <span class="date-added">${tweetData.created_at}</span>
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
renderTweets(data);

});

// var tweet = createTweetElement(tweetData);

// //});
// //createTweetElement();
// // Test / driver code (temporary)
// console.log(tweet); // to see what it looks like
// $('#posted-tweets').append(tweet);


//   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
// }

// function createTweetElement(tweet) {
//   var $tweet = $('<article>').addClass('tweet');
//   // ...
//   return $tweet;
// }












