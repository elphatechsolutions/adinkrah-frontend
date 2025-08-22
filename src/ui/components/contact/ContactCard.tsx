import type { Contact } from "../../../../lib/definition";

const ContactCard = ({
  contact,
  side,
}: {
  contact: Contact;
  side: "left" | "right";
}) => {
  const { label, address } = contact;
  const Icon = contact.contactIcon;

  const skewClass = side === "left" ? "skew-y-3" : "-skew-y-3";

  return (
    <div
      className={`bg-[#d9d9d9] rounded-2xl flex w-[45%] gap-y-5 grow flex-col justify-between p-5 transform ${skewClass}`}
    >
      <div className="w-20 h-20 bg-white flex justify-center items-center text-2xl rounded-full">
        <Icon />
      </div>
      <h2>{label}</h2>
      <p>{address}</p>
    </div>
  );
};

export default ContactCard;
