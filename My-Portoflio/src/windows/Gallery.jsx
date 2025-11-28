import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { photosLinks, gallery } from "#constants";
import { clsx } from "clsx";

function Gallery() {
  const { openWindow } = useWindowStore();
  const [activeCategory, setActiveCategory] = useState(1); // Default to "Library"

  const handleImageClick = (image) => {
    openWindow("imgfile", {
      name: `Gallery Image ${image.id}`,
      imageUrl: image.img,
    });
  };

  // Gallery widths to create masonry-like layout
  const widths = ["w-48", "w-64", "w-56", "w-52"];

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>
      <div className="flex h-full bg-white">
        {/* Sidebar */}
        <div className="sidebar bg-gray-50 border-r border-gray-200 p-4 w-32">
          <ul className="space-y-2">
            {photosLinks.map((category) => (
              <li
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  "flex items-center gap-2 p-2 rounded cursor-pointer transition-colors",
                  activeCategory === category.id
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100 text-gray-700"
                )}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-4 h-4"
                />
                <span className="text-xs font-medium">{category.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeCategory === 1 && (
            <div className="flex flex-wrap gap-4">
              {gallery.map((image, index) => (
                <div
                  key={image.id}
                  className={clsx(
                    widths[index % widths.length],
                    "h-48 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow transform hover:scale-105"
                  )}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.img}
                    alt={`Gallery ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Placeholder for other categories */}
          {activeCategory !== 1 && (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-400">
                {photosLinks.find((cat) => cat.id === activeCategory)?.title}{" "}
                coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
