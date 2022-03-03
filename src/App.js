import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useMemo } from "react";
import Video from "./components/Video";
import db from "./firebase";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
        setVideos(querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const red = db.collection("videos");
  console.log(red);
  return (
    <div
      id="focus"
      tabIndex="1"
      className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden"
    >
      {videos.map((video) => (
        <Video data={video} />
      ))}
    </div>
  );
}
export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default App;
