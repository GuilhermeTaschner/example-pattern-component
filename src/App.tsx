import { EighthInputExample } from "./components/input/examples/eighth-input.example";
import { FifthInputExample } from "./components/input/examples/fifth-input.example";
import { FirstInputExample } from "./components/input/examples/first-input.example";
import { FourthInputExample } from "./components/input/examples/fourth-input.example";
import { SecondInputExample } from "./components/input/examples/second-input.example";
import { SeventhInputExample } from "./components/input/examples/seventh-input.example";
import { SixthInputExample } from "./components/input/examples/sixth-input.example";
import { ThirdInputExample } from "./components/input/examples/third-input.example";

function App() {
  return (
    <div className="flex gap-20 p-2">
      <div className="max-w-sm flex flex-col gap-10">
        <FirstInputExample />
        <SecondInputExample />
        <ThirdInputExample />
        <FourthInputExample />
      </div>
      <div className="max-w-sm flex flex-col gap-10">
        <FifthInputExample />
        <SixthInputExample />
        <SeventhInputExample />
        <EighthInputExample />
      </div>
    </div>
  );
}

export default App;
