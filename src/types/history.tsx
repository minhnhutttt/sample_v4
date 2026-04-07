export type History = {
  id: string;
  title: string;
  content: [
    {
      year: string;
      item: [
        {
          month: string;
          text: string;
        },
      ];
    },
  ];
};
