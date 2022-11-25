import React, { useState } from "react";
import Button from "../ui/Button";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as Notion } from "../assets/Notion2.svg";
import { ReactComponent as Outlook } from "../assets/Outlook2.svg";
import { ReactComponent as Trello } from "../assets/Trello.svg";
import { ReactComponent as Calendar } from "../assets/CalendarN.svg";
import { ReactComponent as SetEvents } from "../assets/SetEvents.svg";
import { ReactComponent as EmailLink } from "../assets/EmailLink.svg";
import { ReactComponent as OptimalSecurity } from "../assets/OptimalSecurity.svg";
import { ReactComponent as ShowTimer } from "../assets/ShowTimer.svg";
import { ReactComponent as FastPageLoads } from "../assets/FastPageLoads.svg";
import { ReactComponent as CalendarView } from "../assets/CalendarView.svg";
import { ReactComponent as FAQOpen } from "../assets/FAQOpen.svg";
import Footer from "../layout/Footer";
import styled from "styled-components";

import Modal from "../components/Modal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <main
        style={{
          minHeight: "calc(100vh - 103px)",
        }}
        className="
     flex justify-center items-center bg-white max-[500px]:pb-12"
      >
        <div className="max-w-screen-xl m-auto text-center flex flex-col items-center p-5">
          <h1
            className="text-6xl  text-center leading-normal mb-3
          max-[768px]:text-5xl max-w-[768px]:leading-relaxed
        "
          >
            Never lose track of your important dates with our{" "}
            <span className="text-secondary">countdown timer.</span>
          </h1>
          <p className="text-center text-lg">
            County is a free countdown app that allows you to keep track of
            important events and count down to a date with your own unique
            countdown timer via an easily accessible link.
          </p>
          <div
            className="p-4 flex gap-4 items-center justify-center mt-10 max-[508px]:grid grid-cols-2
        "
          >
            <Timer title="Days" value={8} />
            <Timer value=":" className="max-[508px]:hidden" />
            <Timer title="Hours" value={12} />
            <Timer value=":" className="max-[508px]:hidden" />
            <Timer title="Minutes" value={44} />
            <Timer value=":" className="max-[508px]:hidden" />
            <Timer title="Seconds" value={28} />
          </div>
          <div>
            <Button
              className="bg-secondary flex gap-[10px] hover:bg-backgroundHover text-white py-[17px] px-8 rounded-[64px]"
              onClick={() => setOpenModal(!openModal)}
            >
              Create a countdown link <ArrowRight />
            </Button>
          </div>
        </div>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </main>
      {/* Trusted by */}
      <section className="bg-white pt-20 ">
        <div className="max-w-screen-xl m-auto text-center pb-20">
          <h2 className="font-semibold mb-16 text-2xl text-accent ">
            Trusted by professionals
          </h2>
          <div className="flex flex-col gap-16">
            <div
              className="flex items-center justify-center  gap-16 
              max-md:grid
              max-md:grid-cols-2 text-center max-[508px]:grid-cols-1 max-[508px]:gap-0 max-[508px]:border-none
              "
            >
              <div className="max-md:text-center max-md:flex justify-center">
                {" "}
                <Notion
                  // set a width and height to the svg
                  className="w-[150px]"
                />
              </div>
              <div className="max-md:text-center max-md:flex justify-center">
                <Trello className="  max-w-[150px] max-h-[150px] object-cover w-full" />
              </div>
              <div className="max-md:text-center max-md:flex justify-center">
                {" "}
                <Outlook className="w-[150px] h-[150px]" />
              </div>
              <div className="max-md:text-center max-md:flex justify-center">
                {" "}
                <Calendar className="w-[150px] h-[150px]" />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>

      {/*  Country used for */}
      <section className="bg-white pb-20 max-md:p-5">
        <div className="max-w-screen-xl m-auto text-center ">
          <div className="flex flex-col gap-6 justify-center items-center">
            <H3 title="Use case" />
            <h4 className="font-semibold  text-4xl text-primary">
              What is County used for?
            </h4>
            <p>
              With County, you will never miss an event because you lost track
              of
              <br className="max-[592px]:hidden" />
              the date. You can easily organize your calender, track your events{" "}
              <br className="max-[592px]:hidden" />
              and never be left behind.
            </p>
          </div>
          <CardStyledContainer>
            <Card
              title="Set Events"
              icon={<SetEvents className="w-[150px] h-[150px]" />}
              description="If you have an event and that you do not want to miss. Set the date and we’ll do the countdown for you. Do not lose track of events anymore."
            />

            <Card
              title="Email Link"
              icon={<EmailLink className="w-[150px] h-[150px]" />}
              description="Get the link to your countdown sent directly to your email for easy access and later retrieval."
            />

            <Card
              title="Show Timer"
              icon={<ShowTimer className="w-[150px] h-[150px]" />}
              description="Get a view of our beautifully themed coundown timers that can be adjusted to your preference of size, color, and font."
            />
            <Card
              title="Optimum Security"
              icon={<OptimalSecurity className="w-[150px] h-[150px]" />}
              description="You wouldn't put just any code into your website. Invalid or incompatible code can break the layout of your web page or display error messages to your visitors."
            />
            <Card
              title="Calendar overview"
              icon={<CalendarView className="w-[150px] h-[150px]" />}
              description="If you have an event and that you do not want to miss. Set the date and we’ll do the countdown for you. Do not lose track of events anymore."
            />
            <Card
              title="Fast Page Loads"
              icon={<FastPageLoads className="w-[150px] h-[150px]" />}
              description="Page load time is an important factor in visitor satisfaction as well as in search engine ranking algorithms."
            />
          </CardStyledContainer>
          <div className="flex flex-col gap-6 justify-center items-center mt-20">
            <Button
              className="bg-secondary hover:bg-backgroundHover flex gap-[10px] text-white py-[17px] px-8 rounded-[64px]"
              onClick={() => setOpenModal(!openModal)}
            >
              Start your countdown <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Monitor Upcoming Events*/}
      <section className="bg-white pt-20 pb-20">
        <div className="max-w-screen-xl m-auto text-center p-5">
          <div className="flex flex-col gap-6 justify-center items-center">
            <H3 title="Goal Module" />
            <h4 className="font-semibold  text-4xl text-primary">
              Monitor upcoming events
            </h4>
          </div>
          <MonitorCardStyledContainer>
            <div className="card">
              <h4
                className="
              font-semibold text-[22px] text-primary mt-3
            "
              >
                Stay organized
              </h4>
              <p className="text-accent leading-7">
                Organize your schedule at a healthy pace, with better results
                without burning out.
              </p>
            </div>
            <div className="card">
              <h4
                className="
              font-semibold text-[22px] text-primary mt-3
            "
              >
                Stay organized
              </h4>
              <p className="text-accent leading-7">
                Organize your schedule at a healthy pace, with better results
                without burning out.
              </p>
            </div>
          </MonitorCardStyledContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white pb-20">
        <div className="max-w-screen-xl m-auto text-center p-5">
          <div className="max-w-screen-xl m-auto text-center ">
            <div className="flex flex-col gap-6 justify-center items-center">
              <H3 title="FAQs" />
              <h4 className="font-semibold  text-4xl text-primary">
                Frequently Asked Questions
              </h4>
            </div>
          </div>
          {/* Faq cardcontainer */}
          <FaqCardStyledContainer>
            <FaqCard
              title="Can I use use the timer in different zones?"
              description="click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
            <FaqCard
              title="Can I use use the timer in different zones?"
              description="To create a countdown, you need to sign up for an account. Once you have signed up, you can create a countdown by clicking on the “Create Countdown” button on the dashboard. You will be asked to enter the title of the countdown, the date and time of the event, and the description of the countdown. You can also choose to add a background image to the countdown. Once you have entered all the details, click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
            <FaqCard
              title="Can I pick my theme for the timer?"
              description="click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
            <FaqCard
              title="Can I use use the timer in different time zones?"
              description="click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
            <FaqCard
              title="How do I get my countdown link?"
              description="click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
            <FaqCard
              title="Can I use use the timer in different zones?"
              description="click on the “Create Countdown” button to create the countdown."
              className="hidden"
              icon={<FAQOpen />}
            />
          </FaqCardStyledContainer>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
const CardStyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(346px, 1fr));
  grid-gap: 80px;
  padding: 1rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const CardStyled = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  padding: 48px 32px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  height: 100%;
  text-align: left;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.15);
  .icon svg {
    width: 86.13px;
    height: 86.13px;
  }

  :hover {
    box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.25);
    transform: translateY(-5px);
  }
`;

const MonitorCardStyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(346px, 1fr));
  grid-gap: 80px;
  padding: 1rem;
  margin-top: 4rem;

  .card {
    background: #fff;
    border-radius: 20px;
    padding: 48px 32px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    height: 100%;
    text-align: left;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.15);

    :hover {
      box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.25);
      transform: translateY(-5px);
    }
  }
`;

const FaqCardStyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
  padding: 1rem;
  margin-top: 4rem;
`;

const FAQCardStyle = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;
  height: 100%;
  text-align: left;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.15);

  :hover {
    box-shadow: 0px 4px 12px rgba(148, 148, 148, 0.25);
    transform: translateY(-5px);
  }
`;

const Timer = ({ title, value, className }) => {
  return (
    <div className={`item ${className} text-center`}>
      <h3 className="text-7xl font-normal leading-relaxed ">
        <span className="block text-sm"> {title} </span>
        <span> {value} </span>
      </h3>
    </div>
  );
};

const FaqCard = ({ title, description, icon, className }) => {
  return (
    <FAQCardStyle className="card">
      <div className="flex gap-6 items-start">
        <div className="icon">{icon}</div>
        <h4 className="text-2xl font-bold text-primary">{title}</h4>
      </div>
      <p className={`text-accent leading-7 ${className}`}>{description}</p>
    </FAQCardStyle>
  );
};

const Card = ({ title, description, icon, className }) => {
  return (
    <CardStyled className="card-container">
      {/* // add the icon */}
      <div className="icon">{icon}</div>
      <h4 className="font-semibold text-2xl text-primary">{title}</h4>
      <p className="text-accent leading-7">{description}</p>
    </CardStyled>
  );
};

const H3 = ({ title }) => {
  return (
    <h3 className="px-6 py-4 text-base font-semibold text-secondary bg-backgroundAccent inline rounded-full">
      {title}
    </h3>
  );
};
