import { getConfigs } from '@/services/microcms';

import TopicsSlider, { TopicItem } from './topicsSlider';

const Topics = async () => {
  const configs = await getConfigs();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: TopicItem[] = configs.topic_buttons.map((item: any) => ({
    link: item.link,
    text: item.text,
    image: item.image.url,
  }));

  return <TopicsSlider items={items} />;
};

export default Topics;
