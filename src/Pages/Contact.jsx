import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaShareAlt,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: "My Address",
    details: ["Lucknow, Uttar Pradesh, India"],
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["pt5602238@gmail.com", "2300521520009@ietlucknow.ac.in"],
  },
  {
    icon: FaPhoneAlt,
    title: "Contact",
    details: ["+91-7607107616"],
  },
];

const socialIcons = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/aniket-tiwari-51040a294/",
  },
  {
    icon: FaGithub,
    link: "https://github.com/Anikettiw-at",
  },
  {
    icon: FaGoogle,
    link: "mailto:pt5602238@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section className="text-white px-6 py-10">
      <h2 className="text-xl tracking-widest font-semibold mb-6 border-b border-white/20 w-fit">
        CONTACT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-zinc-700 p-6 rounded-md flex gap-4 items-start hover:scale-105 transition-transform duration-300"
            >
              <div className="text-green-400 p-3 rounded-full text-2xl">
                <Icon />
              </div>

              <div>
                <h3 className="text-orange-400 text-lg font-semibold">
                  {item.title}
                </h3>
                <div className="mt-1 text-md">
                  {item.details.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Social Profiles */}
        <div className="bg-zinc-700 p-6 rounded-md flex gap-4 items-start hover:scale-105 transition-transform duration-300">
          <div className="text-green-400 p-3 rounded-full text-2xl">
            <FaShareAlt />
          </div>

          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-3">
              Social Profiles
            </h3>
            <div className="flex gap-4">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-xl hover:text-cyan-400 transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
