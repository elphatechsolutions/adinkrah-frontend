import type { Contact } from "../../../../lib/definition";

const ContactCard = ({
  contact,
}: // side,
{
  contact: Contact;
  // side: "left" | "right";
}) => {
  const { label, address } = contact;
  const Icon = contact.contactIcon;

  // const skewClass = side === "left" ? "skew-y-3" : "-skew-y-3 ${skewClass}";

  return (
    <div className="bg-[#d9d9d9] rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col h-full">
        <span className="w-12 h-12 bg-white flex justify-center items-center text-xl rounded-full mb-4">
          <Icon className="text-gray-700" />
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{label}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {address.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < address.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
