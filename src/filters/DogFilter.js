import { WrapDiv } from "./DogFilterStyles";
import { FilterOutlined } from "@ant-design/icons";

const DogFilter = (props) => {
  return (
    <WrapDiv>
       <FilterOutlined
        style={{ marginLeft: "15px", float:"left", fontSize: "20px", color: "white" }}
      />
      <h3>Demo Filter: </h3>
      <h3>Show purose only</h3>
      <p>Breed</p>
      <p>Location</p>
      <p>Date Range:</p>
    </WrapDiv>
  );
};

export default DogFilter;
