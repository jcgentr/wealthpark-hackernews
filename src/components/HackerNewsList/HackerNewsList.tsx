import { useEffect, useState } from "react";

import { HackerNewsCard } from "../HackerNewsCard/HackerNewsCard";
import { Spinner } from "../Spinner/Spinner";

import styles from "./HackerNewsList.module.css";

const INITIAL_STORY_COUNT = 100;

export const HackerNewsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topStories, setTopStories] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then((data) => setTopStories(data.slice(0, INITIAL_STORY_COUNT)))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {topStories.map((storyId, index) => (
            <HackerNewsCard rank={index + 1} key={storyId} storyId={storyId} />
          ))}
          <div>
            <button
              className={styles.button}
              onClick={() => window.scrollTo(0, 0)}
            >
              Return to top
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
