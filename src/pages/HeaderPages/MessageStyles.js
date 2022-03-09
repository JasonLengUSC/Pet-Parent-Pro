import styled from "styled-components";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const TitleDiv = styled.div`
  background-color: #fff;
  height: 60px;
  & h3 {
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    color: gray;
  }
`;

const UnfoldIcon = styled(MenuUnfoldOutlined)`
  font-size: 20px;
  cursor: pointer;
  color: gray;
  margin-top: 25px;
  margin-left: 30px;
`;
const FoldIcon = styled(MenuFoldOutlined)`
  font-size: 20px;
  cursor: pointer;
  color: gray;
  float: right;
  margin-top: 25px;
  margin-right: 10px;
`;

const MessageTab = styled(Menu.Item)`
  background-color: none;
  border: none;
  &.ant-menu-item:hover,
  &.ant-menu-item:active,
  &.ant-menu-item-selected {
    background-color: #877283 !important;
    color: white;
  }
  &:after {
    border-right: #877283 !important;
  }
`;

const LayoutStyled = styled(Layout)`
  background-color: white;
  & Header {
    background-color: white;
  }
  /* & Content {
    background-color: white;
    color: white;
    margin: 24px 16px;
    padding: 24;
    min-height: 280;
  } */
`;

export { TitleDiv, UnfoldIcon, FoldIcon, MessageTab, LayoutStyled };
