import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
`;

const SSearch = styled(Search)`
  margin-top: 20px;
  width: 500px;
`;

const Logo = styled.div`
  text-align: center;
  color: white;
  background-color: #5383e8;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Logo>OPGC LOGO</Logo>
      <SSearch
        placeholder="input github account"
        onSearch={(value) => console.log(value)}
        size="large"
        enterButton
      />
    </Container>
  );
}
