import "./ImageListItem.css"

export function ImageListItem({ img }) {
  return <img src={img.download_url} className={"img"} />
}
