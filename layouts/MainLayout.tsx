import { MENU_LIST } from "../constants";
import styled from "styled-components";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const height = {
  header: 65,
  footer: 65,
};

const SLayout = styled(Layout)`
  background-color: white;
`;

const SHeader = styled(Header)`
  padding: 0 20px;
`;

const SContent = styled(Content)`
  width: 1080px;
  margin: 0 auto;
  min-height: calc(100vh - ${height.header + height.footer}px);
`;

const SFooter = styled(Footer)`
  background-color: #f0f2f5;
  text-align: center;
`;

const Logo = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0 15px;
  float: left;
`;

function DefaultLayout({ children }) {
  return (
    <SLayout className="layout">
      <SHeader>
        <Logo>OPGG Logo</Logo>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {MENU_LIST.map((menu) => (
            <Menu.Item key={menu.title}>{menu.title}</Menu.Item>
          ))}
        </Menu>
      </SHeader>
      <SContent>{children}</SContent>
      <SFooter>OPGC ©2020 Created by DirtyBoyz</SFooter>
    </SLayout>
  );
}

export default DefaultLayout;
