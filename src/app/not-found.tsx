import { TransitionLink } from '@/components/navigation/TransitionLink';

const NotFoundPage = () => {
  return (
    <>
      <div className="mx-auto flex h-[40vh] max-w-[800px] flex-col items-center justify-center">
        <h1 className="text-center text-[64px] font-black">404</h1>
        <div className="mt-4">
          <TransitionLink
            href="/"
            className="inline-block rounded-full bg-[#2A5297] px-6 py-2 text-white"
          >
            トップページへ
          </TransitionLink>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
