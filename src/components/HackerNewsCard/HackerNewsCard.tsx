import { useEffect, useState } from "react";

import styles from "./HackerNewsCard.module.css";
import { ReactComponent as Logo } from "../../images/external-link.svg";

interface HackerNewsCardProps {
  storyId: number;
  rank: number;
}

interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export const HackerNewsCard = (props: HackerNewsCardProps) => {
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${props.storyId}.json`)
      .then((response) => response.json())
      .then((data) => setStory(data));
  }, [props.storyId]);

  return (
    <>
      {story && (
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            {props.rank}. {story.title}
          </h3>
          <div className={styles.cardFlex}>
            <h4 className={styles.cardAuthor}>{story.by}</h4>
            <a
              className={styles.cardLink}
              href={story.url}
              target="_blank"
              rel="noreferrer"
            >
              <Logo />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
