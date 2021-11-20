import React from "react";
import classes from "../Styles/Body.module.scss";
import mockupScreen from "../images/screen-mockups.svg";
import iconCommunities from "../images/icon-communities.svg";
import iconMessages from "../images/icon-messages.svg";
import flowingConversation from "../images/illustration-flowing-conversation.svg";
import growTogether from "../images/illustration-grow-together.svg";
import yourUsers from "../images/illustration-your-users.svg";
import bgSectionTopDesktop1 from "../images/bg-section-top-desktop-1.svg";
import bgSectionTopMobile1 from "../images/bg-section-top-desktop-1.svg";
import bgSectionBottomDesktop1 from "../images/bg-section-bottom-desktop-1.svg";
import bgSectionBottomMobile1 from "../images/bg-section-bottom-mobile-1.svg";
import bgSectionTopDesktop2 from "../images/bg-section-top-desktop-2.svg";
import bgSectionTopMobile2 from "../images/bg-section-top-desktop-2.svg";
import bgSectionBottomDesktop2 from "../images/bg-section-bottom-desktop-2.svg";
import bgSectionBottomMobile2 from "../images/bg-section-bottom-mobile-2.svg";

function Body() {
  return (
    <div className={classes.body}>
      <div className={classes.topSection}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </div>
      <div className={classes.mainSection}>
        <img src={mockupScreen} alt="mockupScreen" />
        <div className={classes.diagram}>
          <p>
            <img src={iconCommunities} alt="iconCommunities" />
            <span>1.4k+</span>Communities Formed
          </p>
          <p>
            <img src={iconMessages} alt="iconMessages" />
            <span>2.7m+</span>Messages Sent
          </p>
        </div>
      </div>
      <section className={classes.articles}>
        <article className={classes.growTogether}>
          <img
            src={bgSectionTopDesktop1}
            alt=""
            className={classes.bgSectionTopDesktop}
          />
          <img
            src={bgSectionTopMobile1}
            alt=""
            className={classes.bgSectionTopMobile}
          />
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <img src={growTogether} alt="growTogether" />
            </div>
            <div className={classes.textContainer}>
              <h1>Grow Together</h1>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>
          <img
            src={bgSectionBottomDesktop1}
            alt=""
            className={classes.bgSectionBottomDesktop}
          />
          <img
            src={bgSectionBottomMobile1}
            alt=""
            className={classes.bgSectionBottomMobile}
          />
        </article>
        <article className={classes.flowingConversation}>
          <div className={classes.flowingConversationContainer}>
            <div className={classes.imageContainer}>
              <img src={flowingConversation} alt="flowingConversation" />
            </div>
            <div className={classes.textContainer}>
              <h1>Flowing Conversations</h1>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </div>
        </article>
        <article className={classes.yourUsers}>
          <img
            src={bgSectionTopDesktop2}
            alt=""
            className={classes.bgSectionTopDesktop}
          />
          <img
            src={bgSectionTopMobile2}
            alt=""
            className={classes.bgSectionTopMobile}
          />
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <img src={yourUsers} alt="yourUsers" />
            </div>
            <div className={classes.textContainer}>
              <h1>Your Users</h1>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </div>
          <img
            src={bgSectionBottomDesktop2}
            alt=""
            className={classes.bgSectionBottomDesktop}
          />
          <img
            src={bgSectionBottomMobile2}
            alt=""
            className={classes.bgSectionBottomMobile}
          />
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
