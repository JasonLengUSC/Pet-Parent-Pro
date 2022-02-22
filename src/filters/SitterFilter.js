import { WrapDiv } from "./SitterFilterStyles";
import { FilterOutlined } from "@ant-design/icons";

const SitterFilter = (props) => {
  return (
    <WrapDiv>
      <FilterOutlined
        style={{
          marginLeft: "15px",
          float: "left",
          fontSize: "20px",
          color: "white",
        }}
      />
      <h3>Demo Filter: </h3>
      <h3>Show purose only</h3>
      <p>Rating</p>
      <p>Location</p>
      <p>Date Range:</p>
      <p>Prefered Size:</p>
    </WrapDiv>
  );
};

export default SitterFilter;
