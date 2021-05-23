import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRouter } from "./pages";
//import { Button } from "./components/common";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />

      {/* <Button>Test</Button>
      <Button disabled>Disabled button</Button>
      <Button secondary>Secondary</Button>
      <Button large>Large</Button> */}
    </>
  );
};
