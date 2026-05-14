import QuestionBtn from '@/components/QuestionBtn';

const HomeQuestions = () => {
  return (
    <div className="bg-[#242424] px-5 py-25 md:py-[184px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-wrap justify-center gap-7 md:gap-10">
        <QuestionBtn
          href="https://www.kivo.talk/download"
          title="KIVO TALKにユーザー登録するには？"
        />
        <QuestionBtn
          href="https://www.kivo.talk/features"
          title="KIVO TALKの仕組みとは？"
        />
        <QuestionBtn
          href="https://www.kivo.talk/compare"
          title="なぜKIVO TALKが選ばれるのか？"
        />
      </div>
    </div>
  );
};

export default HomeQuestions;
