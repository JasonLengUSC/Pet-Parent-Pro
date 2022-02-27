import { DUUMY_PARENT_CONTACT_INFO } from "../../datas/mockDatas/DummyContactInfo";

import { Popover } from "antd";

import { ContactIcon } from "./ContactInfoStyles";

const DogContactInfo = (props) => {
  const parentContact = DUUMY_PARENT_CONTACT_INFO.find(
    (dogParent) => dogParent.parentId === props.parentId
  );
  const contactContent = (
    <div>
      <p>Username:{parentContact.parentId}</p>
      <p>Email:{parentContact.email}</p>
      <p>Phone Number:{parentContact.phoneNum}</p>
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

export default DogContactInfo;
