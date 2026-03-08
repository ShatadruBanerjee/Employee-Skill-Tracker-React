import PlainCSSComponent from "./PlainCssComponent";
import CSSModuleComponent from "./CssModuleComponent";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <div>
      <PlainCSSComponent/>
      <hr/>

      <CSSModuleComponent/>
      <hr/>

      <StyledComponent/>
    </div>
  );
}

export default App;