import React from "react";

function FAQ() {
  return (
    <section className="bg-black dark:bg-black text-white dark:text-white" id="FAQ">
      <div className="container flex flex-col justify-center">
        <div className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </div>
        <p className="mt-4 mb-8 text-white dark:text-white">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="p-3 focus:outline-none focus-visible:ring-coral focus-visible:dark:ring-coral">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="p-3  ml-4 -mt-4 text-white dark:text-white">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="p-3 focus:outline-none focus-visible:ring-coral focus-visible:dark:ring-coral">
              Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?
            </summary>
            <p className="p-3  ml-4 -mt-4 text-white dark:text-white">
              Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
              porttitor egestas tincidunt neque vehicula potenti.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="p-3 focus:outline-none focus-visible:ring-coral focus-visible:dark:ring-coral">
              Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit
              erat?
            </summary>
            <p className="p-3  ml-4 -mt-4 text-white dark:text-white">
              Justo libero tellus integer tincidunt justo semper consequat
              venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
              pretium sodales vel magna et massa euismod vulputate sed.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
