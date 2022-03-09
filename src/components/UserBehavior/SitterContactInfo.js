import { DUUMY_SITTER_CONTACT_INFO } from "../../datas/mockDatas/DummyContactInfo";

import { Popover } from "antd";

import { ContactIcon } from "./ContactInfoStyles";

const SitterContactInfo = (props) => {
  const sitterContact = DUUMY_SITTER_CONTACT_INFO.find(
    (sitter) => sitter.sitterId === props.sitterId
  );
  const contactContent = (
    <div>
      <p>Username:{sitterContact.sitterId}</p>
      <p>Email:{sitterContact.email}</p>
      <p>Phone Number:{sitterContact.phoneNum}</p>
    </div>
  );

  return (
    <>
      <Popover
        placement="rightTop"
        content={contactContent}
        title="Contact Info"
        overlayInnerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          color: "white",
        }}
        trigger="click"
      >
        <ContactIcon />
      </Popover>
    </>
  );
};

export default SitterContactInfo;
