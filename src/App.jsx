import { useEffect, useState } from "react";
import { ImageList } from "./components/ImageList/ImageList";
import style from "./App.module.css"
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();

  // 1- Store the page to fetch
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // 3- Listen to pageToFetch updates amd request new images
  useEffect(() => {
    fetchImagesByPage(pageToFetch)
  }, [pageToFetch])

  // 5- Increate the page to fetch when reach bottom
  useEffect(() => {
    if (isBottom) {
      console.log('increase page')
      increasePage();
    }
  }, [isBottom]);

  // 2- Create a function to request to fetch 5 others images
  async function fetchImagesByPage(page) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  // 4- Create a function to increase the page to fetch number
  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }



  return (
    <div className={style.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading &&
        <div className="spinner-border" role="status" />
      }
    </div>
  );
}
