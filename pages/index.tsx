import Head from "next/head";
import styled from "styled-components";
import { Button } from 'antd';

const Container = styled.div`
  background: yellow;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>OPGC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Over Powered Good Coding!</h1>
      <Button>gg</Button>
      <h2>Made By DirtyBoyz</h2>
    </Container>
  );
}
