import React from "react";
import { Mail, Github, Linkedin, User } from "lucide-react";
import useState from "react";
import { motion } from "framer-motion";

function ConnectMe() {
    const [result, setResult] = React.useState("");

    const handleSubmit = () => {
        alert("Message submitted Succesfully");
    };

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98b6d4ab-b9a5-4778-be64-00a385bfa83c");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
};

return (
    <div
        id="connectme"
        className="min-h-screen flex items-center justify-center  px-6 py-16"
    >
    <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Column - Form */}
        <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border p-3 rounded-lg focus:outline-none focus:border-2 focus:border-gray-600 "
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border p-3 rounded-lg focus:outline-none focus:border-2 focus:border-gray-600"
            />
            <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="border p-3 rounded-lg focus:outline-none focus:border-2 focus:border-gray-600"
            />
            <button
                onClick={handleSubmit}
                type="submit"
                className="font-semibold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-600
            text-white px-6 py-3 rounded-lg  transition duration-200 cursor-pointer hover:scale-102"
            >
                Send Message
            </button>
            </form>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2     backdrop-blur-lg p-8 md:p-12 flex flex-col items-center justify-center gap-6">
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-gray-700 text-center mb-6">
                    I’m open to collaborations, projects, and opportunities. Reach out
                    to me through any of these platforms:
                </p>

        <div className="flex gap-8 text-3xl">
            {/* whatsapp */}
            <motion.a
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}

                href="https://wa.me/8484905853"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 object-contain mb-2 transition hover:scale-110">

                <img src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"/>

            </motion.a>

            {/* gmail */}
            <motion.a

                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pvtomkarhole05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 object-contain mb-2 transition hover:scale-110">

                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"/>

            </motion.a>

            {/* Github */}
            <motion.a
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}

                href="https://github.com/omkarhole05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 object-contain mb-2 transition hover:scale-110">
            
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        
            </motion.a>

            {/* linkedin */}
            <motion.a
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                href="https://www.linkedin.com/in/omkar-hole/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 object-contain mb-2 transition hover:scale-110">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />

            </motion.a>

            </div>
        </div>
        </div>
    </div>
  );
}

export default ConnectMe;
