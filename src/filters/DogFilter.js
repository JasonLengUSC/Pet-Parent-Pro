import { Drawer } from "antd";

const DogFilter = (props) => {
  return (
    <>
      <Drawer
        title="Filter"
        placement="right"
        onClose={props.onClose}
        visible={props.visible}
      >
        <p>Dog Filter will be here</p>
      </Drawer>
    </>
  );
};

export default DogFilter;

