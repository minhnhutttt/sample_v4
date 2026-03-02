export type TeamProps = {
  id: string;
  name: string;
  number: string;
  team: string;
  date: string;
  hw: string;
  image: {
    url: string;
  };
  birthday: string;
  place: string;
  career: [
    {
      time: string;
      club: string;
    },
  ];
};

export type TeamList = {
  contents: TeamProps[];
};
