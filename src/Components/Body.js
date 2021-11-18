import React from "react";
import classes from "../Styles/Body.module.scss";
import mockupScreen from "../images/screen-mockups.svg";
import iconCommunities from "../images/icon-communities.svg";
import iconMessages from "../images/icon-messages.svg";
import flowingConversation from "../images/illustration-flowing-conversation.svg";
import growTogether from "../images/illustration-grow-together.svg";
import yourUsers from "../images/illustration-your-users.svg";

function Body() {
  return (
    <div className={classes.body}>
      <div className={classes.topSection}>
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </div>
      <div className={classes.mainSection}>
        <img src={mockupScreen} alt="mockupScreen" />
        <p>
          <img src={iconCommunities} alt="iconCommunities" />
          <span>1.4k+</span>Communities Formed
        </p>
        <p>
          <img src={iconMessages} alt="iconMessages" />
          <span>2.7m+</span>Messages Sent
        </p>
      </div>
      <section className={classes.articles}>
        <article className={classes.growTogether}>
          <div className={classes.container}>
            <img src={growTogether} alt="growTogether" />
            <h1>Grow Together</h1>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </article>
        <article className={classes.flowingConversation}>
          <img src={flowingConversation} alt="flowingConversation" />
          <h1>Flowing Conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </article>
        <article className={classes.yourUsers}>
          <div className={classes.container}>
            <img src={yourUsers} alt="yourUsers" />
            <h1>Your Users</h1>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </article>
        <div className={classes.buildCommunity}>
          <h1>Ready To Build Your Community?</h1>
          <button>Get Started For Free</button>
        </div>
      </section>
    </div>
  );
}

export default Body;
