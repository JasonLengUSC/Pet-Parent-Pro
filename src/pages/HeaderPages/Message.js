import { useState } from "react";

import HeaderPlain from "../../components/UI/HeaderPlain";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  TitleDiv,
  UnfoldIcon,
  FoldIcon,
  MessageTab,
  LayoutStyled,
} from "./MessageStyles";

const { Sider, Content } = Layout;

const Message = () => {
  const [showSider, setShowSider] = useState(false);

  const showSiderHandler = () => {
    setShowSider(!showSider);
  };
  return (
    <>
      <HeaderPlain />
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={showSider}
          style={{ background: "white" }}
        >
          <TitleDiv>
            {showSider ? (
              <UnfoldIcon onClick={showSiderHandler} />
            ) : (
              <>
                <h3>Message Center</h3>
                <FoldIcon onClick={showSiderHandler} />
              </>
            )}
          </TitleDiv>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <MessageTab key="1" icon={<UserOutlined />}>
              Tom
            </MessageTab>
            <MessageTab key="2" icon={<UserOutlined />}>
              John
            </MessageTab>
            <MessageTab key="3" icon={<UserOutlined />}>
              Jimmy
            </MessageTab>
          </Menu>
        </Sider>
        <LayoutStyled>
          <Content>Message Content will be here</Content>
        </LayoutStyled>
      </Layout>
    </>
  );
};

export default Message;
