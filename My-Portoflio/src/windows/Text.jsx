import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Text() {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) {
    return null;
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="text-content p-8 h-full overflow-y-auto">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="text-image w-full rounded-lg mb-8"
          />
        )}
        {data.subtitle && (
          <h3 className="text-subtitle text-2xl font-semibold mb-6">
            {data.subtitle}
          </h3>
        )}
        {data.description && Array.isArray(data.description) && (
          <div className="description-paragraphs space-y-6">
            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className="description-paragraph text-base leading-relaxed text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
