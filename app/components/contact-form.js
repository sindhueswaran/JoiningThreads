import Button from "./button";

export default function ContactForm() {
  return (
    <>
      <form
        className="my-20 w-full md:w-2/3 lg:w-1/2 mx-auto"
        name="contact"
        method="POST"
        action="/thankyou/#contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input name="bot-field" type="hidden" value="contact" />
        {/* <div className="row">
          <div className="col mb-3">
            <input
              type="text"
              name="name"
              className=" mt-1
              block
              w-full
              rounded-md
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col mb-3">
            <input
              type="email"
              name="email"
              className="form-control text-center border border-1 rounded-0"
              placeholder="Your Email"
              required
            />
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <input
              type="text"
              className="
                    placeholder:text-center
                    mb-5
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="Your Name"
              required
            />
          </label>
          <label className="block">
            <input
              type="email"
              className="
                    placeholder:text-center
                    mb-5
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="Your Email"
              required
            />
          </label>
        </div>

        {/* <div className="mb-3 ">
          <textarea
            name="message"
            className="form-control text-center border border-1 rounded-0"
            rows="3"
            placeholder="Your Message"
            required
          ></textarea>
        </div> */}

        <label className="block">
          <textarea
            className="
                    placeholder:text-center
                    placeholder:my-auto
                    mb-5
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  resize-none"
            placeholder="Your Message"
            required
            rows="5"
          ></textarea>
        </label>
        <div className="text-center">
          <Button
            type="submit"
            className="uppercase font-semibold text-jt-primary hover:text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
