import { Drawer } from "antd";

const SitterFilter = (props) => {
  return (
    <>
      <Drawer
        title="Filter"
        placement="right"
        onClose={props.onClose}
        visible={props.visible}
      >
        <p>Sitter Filter will be here</p>
      </Drawer>
    </>
  );
};

export default SitterFilter;

