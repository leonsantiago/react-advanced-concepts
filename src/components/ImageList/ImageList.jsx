import { ImageListItem } from "../ImageListItem/ImageListItem"

export function ImageList({ imageList }) {
  return imageList.map(img => {
    return (
      <div key={img.id}>
        <ImageListItem img={img} />;
      </div>
    );
  });
}
