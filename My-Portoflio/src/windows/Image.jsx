import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Image() {
  const { windows, focusWindow } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) {
    return null;
  }

  const handleImageClick = () => {
    focusWindow("imgfile");
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>
      <div
        className="image-content p-8 h-full overflow-auto flex flex-col items-center justify-center cursor-pointer"
        onClick={handleImageClick}
      >
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="image-display max-w-full max-h-full object-contain rounded-lg"
          />
        )}
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
