import { Popover } from "antd";
import SingleQRcode from "./singleQRcode";

const PopoverQRcode = () => {
  const imgsrc ="https://github.githubassets.com/images/modules/site/home/globe.jpg";

  return (
    <div className="App">
      <Popover overlayInnerStyle={{ padding: 0 }} content={<SingleQRcode />}>
        <img src={imgsrc} alt="icon" width={100} height={100} />
      </Popover>
    </div>
  );
}

export default PopoverQRcode;
