export const AnnouncementsItem = ({
  image,
  tags,
  date,
  title,
}: {
  image: string;
  tags: string[];
  date: string;
  title: string;
}) => (
  <div className="group">
    <figure>
      <img
        src={image}
        alt=""
        className="aspect-video rounded-xl object-cover"
      />
    </figure>
    <div className="">
      <div className="mt-3 flex items-center gap-3 md:mt-5">
        {tags.map((tag) => (
          <p
            className="flex h-[30px] items-center justify-center rounded-2xl border border-black px-2 text-[14px] md:h-[34px] md:px-3"
            key={tag}
          >
            {tag}
          </p>
        ))}
        <p className="text-[14px]">{date}</p>
      </div>
      <h4 className="mt-2.5 pr-5 text-[18px] md:mt-[15px] lg:text-[24px]">
        <span className="bg-[linear-gradient(#000,#000),linear-gradient(#f78629,#f78629)] bg-[size:0_.05em,0_1em] bg-[position:0_95%,0_90%] bg-no-repeat [transition:background-size_.75s_cubic-bezier(.19,1,.22,1)] group-hover:[background-size:100%_.05em,100%_1em]">
          {title}
        </span>
      </h4>
    </div>
  </div>
);

const AnnouncementsItems = () => {
  const data = [
    {
      image: '/assets/images/announcements-01.png',
      tags: ['使い方'],
      date: '2026年3月23日',
      title: 'Channelの始め方：チャンネル開設とはじめての投稿',
    },
    {
      image: '/assets/images/announcements-02.png',
      tags: ['使い方'],
      date: '2026年3月22日',
      title: 'Dropの作り方：単品コンテンツを販売するまでの手順',
    },
    {
      image: '/assets/images/announcements-03.png',
      tags: ['アップデート'],
      date: '2026年3月20日',
      title: 'Drop機能の開発が完了：TestFlight版で提供開始',
    },
    {
      image: '/assets/images/announcements-01.png',
      tags: ['アップデート'],
      date: '2026年3月20日',
      title: 'Discover機能の開発が完了：TestFlight版で提供開始',
    },
    {
      image: '/assets/images/announcements-02.png',
      tags: ['コーポレート'],
      date: '2026年3月5日',
      title: 'KIVOが招待制を採用した理由',
    },
    {
      image: '/assets/images/announcements-03.png',
      tags: ['アップデート'],
      date: '2026年2月18日',
      title: 'スクリーンショット制御機能の開発が完了：TestFlight版で提供開始',
    },
    {
      image: '/assets/images/announcements-01.png',
      tags: ['コーポレート'],
      date: '2026年2月3日',
      title: '契約型経済とは何か——KIVOが目指す世界',
    },
    {
      image: '/assets/images/announcements-02.png',
      tags: ['プレスリリース'],
      date: '2026年1月15日',
      title: 'TestFlight版の提供開始',
    },
  ];
  return (
    <div className="">
      <div className="grid gap-10 md:grid-cols-3 lg:gap-20">
        {data.map((item, i) => (
          <AnnouncementsItem
            image={item.image}
            tags={item.tags}
            date={item.date}
            title={item.title}
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-between gap-4 py-20">
        <button
          type="button"
          className="relative scale-x-[-1] text-black"
          aria-label="Previous"
        >
          <svg
            className="h-5 w-auto"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0671 2L17.8984 10.1014L10.0671 17.6626"
              className="stroke-current"
              strokeWidth="4"
            ></path>
            <path
              d="M0 9.8313H16.7814"
              className="stroke-current"
              strokeWidth="4"
            ></path>
          </svg>
        </button>
        <ul className="flex items-end gap-1 font-bold">
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
        </ul>
        <button
          type="button"
          className="relative text-black"
          aria-label="Previous"
        >
          <svg
            className="h-5 w-auto"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0671 2L17.8984 10.1014L10.0671 17.6626"
              className="stroke-current"
              strokeWidth="4"
            ></path>
            <path
              d="M0 9.8313H16.7814"
              className="stroke-current"
              strokeWidth="4"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementsItems;
