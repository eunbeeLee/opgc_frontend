import MainLayout from "../layouts/MainLayout";
import "antd/dist/antd.css";

function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
