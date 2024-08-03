import React from "react";

const Faq = () => {
  return (
    <div className="font-abc  mb-20">
      <div>
        <h1 className="text-center text-6xl font-bold p-5">FAQ</h1>
        <p className="text-center text-2xl font-semibold pb-10">
          Frequently Asked Questions
        </p>
      </div>
      <div className="">
        <div className="collapse collapse-arrow rounded-none">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is a URL shortener?
          </div>
          <div className="collapse-content">
            <p>
              A URL shortener is a service that takes a long URL and converts it
              into a shorter, more manageable one.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-arrow   rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do i use your URL shortener?
          </div>
          <div className="collapse-content">
            <p>
              You enter a long URL, and the application generates a shorter
              version of it. You can use this short URL to redirect to the
              original long URL.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-arrow rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is it free to use?
          </div>
          <div className="collapse-content">
            <p>Yes, our URL shortening service is completely free to use.</p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-arrow  rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is there a limit to the number of links i can shorten?
          </div>
          <div className="collapse-content">
            <p>
              No, there are no limit to the number of URL you want to shorten
            </p>
          </div>
        </div>
        <hr />
        <div className="collapse collapse-arrow rounded-none">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How long are the short links generated by your platform?
          </div>
          <div className="collapse-content">
            <p>
              The length of the short links generated by our platform typically
              consists of a fixed base URL and a unique identifier. The unique
              identifier is usually a string of characters (e.g., 7-10
              characters) that ensures the short link remains unique. The exact
              length can vary depending on the implementation, but it is
              designed to be significantly shorter than the original URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
