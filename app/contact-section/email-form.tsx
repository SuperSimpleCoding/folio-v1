import React from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

interface EmailFormProps {
  darkMode: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({ darkMode }) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const data = {
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      contactType: (target.elements.namedItem("contactType") as HTMLSelectElement).value,
      message: (target.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await emailjs.send(
        "service_rjgvkum", // Replace with your EmailJS Service ID
        "template_t6kj12h", // Replace with your EmailJS Template ID
        data,
        "HZifWYNGM80eWoML-" // Replace with your EmailJS User ID
      );
      if (response.status === 200) {
        alert("Message sent successfully!");
        target.reset(); // Clear the form after successful submission
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center py-10 bg-transparent overflow-y-auto custom-scrollbar">
      <div
        className={`relative flex mx-[2vw] flex-wrap items-center justify-center shadow-4xl rounded-lg overflow-hidden max-w-5xl w-full md:mx-auto h-[70vh] ${
          darkMode ? "bg-green-900" : "bg-orange-200"
        }`}
      >
        <div
          className={`w-full lg:w-2/3 p-8 overflow-y-auto custom-scrollbar ${
            darkMode
              ? "text-white bg-[#014421]"
              : "text-gray-800 bg-[#FAD5A5] rounded-full"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s{" "}
            <span className={`${darkMode ? "text-[#FFD580]" : "text-[#E97451]"}`}>
              Talk
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className={`w-full px-3 py-2 text-black rounded-lg ${
                  darkMode
                    ? "bg-[#355E3B] text-white"
                    : "bg-[#FAC898] text-black"
                } shadow-md focus:outline-none focus:ring-2 focus:ring-white`}
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
                className={`w-full px-3 py-2 text-black rounded-lg ${
                  darkMode
                    ? "bg-[#355E3B] text-white"
                    : "bg-[#FAC898] text-black"
                } shadow-md focus:outline-none focus:ring-2 focus:ring-white`}
              />
            </div>
            <div>
              <label htmlFor="contactType" className="block text-sm font-medium mb-1">
                Who is contacting?
              </label>
              <select
                id="contactType"
                className={`w-full px-3 py-2 text-black rounded-lg ${
                  darkMode
                    ? "bg-[#355E3B] text-white"
                    : "bg-[#FAC898] text-black"
                } shadow-md focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <option value="recruiter">Recruiter</option>
                <option value="student">Student</option>
                <option value="visitor">Visitor</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              {/* Remove the incorrect line here */}
              <textarea
                id="message"
                required
                rows={3}
                placeholder="Write your message here..."
                className={`w-full px-3 py-2 rounded-lg ${
                  darkMode ? "bg-[#355E3B]" : "bg-[#FAC898]"
                } shadow-md focus:outline-none focus:ring-2 focus:ring-white`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`md:w-[30%] w-full flex items-center justify-center ${
                darkMode
                  ? "bg-[#DFFF00] hover:bg-[#DFFF11]"
                  : "bg-[#E3735E] hover:bg-[#E3735E]"
              } text-[#264E5B] font-bold text-md px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Send Message
            </button>
          </form>
          <button
            onClick={() => router.back()}
            className={`mt-4 md:w-[30%] w-full flex items-center justify-center ${
              darkMode
                ? "bg-[#DFFF00] hover:bg-[#DFFF11]"
                : "bg-[#E3735E] hover:bg-[#E3735E]"
            } text-[#264E5B] font-bold text-md px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
