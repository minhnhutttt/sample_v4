'use client';

const mainFont = { fontFamily: 'var(--font-family-main, Inter)' };

const WorldviewValueSection = () => {
  return (
    <>
      <section className="relative z-30 hidden h-[2105px] overflow-hidden bg-[#242424] lg:block">
        <div className="relative mx-auto h-full w-full max-w-[1280px]">
          <div className="absolute top-[300px] left-0 h-[956px] w-[1280px]">
            <div className="absolute top-0 left-[60px] w-[580px] py-[80px] text-white">
              <p
                className="text-[64px] leading-[123%] font-bold tracking-[0.64px] max-md:text-[34px]"
                style={mainFont}
              >
                <span className="block">
                  <span>100いいねより</span>
                  <span className="tracking-[-18.56px]">、</span>
                </span>
                <span className="block">1購入。</span>
              </p>
              <p
                className="mt-[60px] w-[520px] text-[24px] leading-[167%] font-normal tracking-[0.72px] text-white max-md:text-[17px]"
                style={mainFont}
              >
                1人が買ったという事実は、需要の在処です。
                <br />
                その人が感じた価値を、同じように感じている
                <br />
                人が必ずほかにもいます。
              </p>
            </div>

            <img
              src="/assets/images/app/image-03.png"
              alt=""
              className="absolute top-0 left-[640px] h-[498px] w-[640px] object-cover"
            />

            <img
              src="/assets/images/app/image-04.png"
              alt=""
              className="absolute top-[498px] left-0 h-[458px] w-[640px] object-cover"
            />

            <div className="absolute top-[498px] left-[700px] w-[520px] py-[80px] text-white">
              <p
                className="text-[64px] leading-[123%] font-bold tracking-[0.64px] max-md:text-[34px]"
                style={mainFont}
              >
                <span className="block whitespace-nowrap">
                  1人は、多くの人の
                </span>
                <span className="block">代表です。</span>
              </p>
              <p
                className="mt-[60px] text-[24px] leading-[167%] font-normal tracking-[0.72px] text-white max-md:text-[17px]"
                style={mainFont}
              >
                その1人から始まるファンとの関係が、
                <br />
                やがてあなただけの経済圏になっていきます。
              </p>
            </div>
          </div>

          <div className="absolute top-[1496px] left-1/2 h-[449px] w-screen -translate-x-1/2 bg-[#F98528]">
            <div className="absolute top-1/2 left-1/2 flex h-[220px] w-[1161px] -translate-x-1/2 -translate-y-1/2 items-center justify-center px-[40px]">
              <svg
                className="absolute top-0 left-0 h-[40px] w-[45px]"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0271191 23.9502C0.0181749 19.2414 0.0263735 11.2772 0.0274915 10.175C0.036063 1.78034 -0.0203963 1.78071 0.00811318 1.05119C0.0125853 0.936707 0.0464983 0.0651528 0.999798 0.0171261C1.32216 0.000744861 39.898 -0.00502614 41.9918 0.00483981C44.5883 0.0171257 44.6736 -0.032204 44.8778 0.252978C45.0931 0.553424 44.9593 3.96891 44.9552 6.82482C44.954 7.48193 44.6444 7.44302 44.2275 7.46369C43.0663 7.52102 43.0665 7.51339 29.6938 7.4877C19.5897 7.46834 12.6738 7.51469 9.01005 7.50594C8.33308 7.50445 7.81339 7.3788 7.69916 7.75259C7.65109 7.90951 7.6632 7.91007 7.66004 9.80285C7.65519 12.7183 7.65668 12.7142 7.65575 12.9672C7.63041 20.2723 7.6619 37.8004 7.66171 38.47C7.66171 39.6282 7.78786 40.0077 6.95903 39.9955C5.20579 39.9694 3.96032 40.0105 1.92943 39.9973C0.383022 39.9873 0.0658766 40.1083 0.038485 39.402C0.017988 38.8724 0.0263737 25.1865 0.0271191 23.9502Z"
                  fill="#242424"
                />
              </svg>
              <svg
                className="absolute top-0 right-0 h-[40px] w-[45px]"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.9729 23.9502C44.9818 19.2414 44.9736 11.2772 44.9725 10.175C44.9639 1.78034 45.0204 1.78071 44.9919 1.05119C44.9874 0.936707 44.9535 0.0651528 44.0002 0.0171261C43.6778 0.000744861 5.10202 -0.00502614 3.00815 0.00483981C0.411736 0.0171257 0.326393 -0.032204 0.122166 0.252978C-0.0930519 0.553424 0.0407372 3.96891 0.0448341 6.82482C0.0459518 7.48193 0.355644 7.44302 0.77248 7.46369C1.93373 7.52102 1.93355 7.51339 15.3062 7.4877C25.4103 7.46834 32.3262 7.51469 35.99 7.50594C36.6669 7.50445 37.1866 7.3788 37.3008 7.75259C37.3489 7.90951 37.3368 7.91007 37.34 9.80285C37.3448 12.7183 37.3433 12.7142 37.3443 12.9672C37.3696 20.2723 37.3381 37.8004 37.3383 38.47C37.3383 39.6282 37.2121 40.0077 38.041 39.9955C39.7942 39.9694 41.0397 40.0105 43.0706 39.9973C44.617 39.9873 44.9341 40.1083 44.9615 39.402C44.982 38.8724 44.9736 25.1865 44.9729 23.9502Z"
                  fill="#242424"
                />
              </svg>
              <svg
                className="absolute bottom-0 left-0 h-[40px] w-[45px]"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0271191 16.0498C0.0181749 20.7586 0.0263735 28.7228 0.0274915 29.825C0.036063 38.2197 -0.0203963 38.2193 0.00811318 38.9488C0.0125853 39.0633 0.0464983 39.9348 0.999798 39.9829C1.32216 39.9993 39.898 40.005 41.9918 39.9952C44.5883 39.9829 44.6736 40.0322 44.8778 39.747C45.0931 39.4466 44.9593 36.0311 44.9552 33.1752C44.954 32.5181 44.6444 32.557 44.2275 32.5363C43.0663 32.479 43.0665 32.4866 29.6938 32.5123C19.5897 32.5317 12.6738 32.4853 9.01005 32.4941C8.33308 32.4955 7.81339 32.6212 7.69916 32.2474C7.65109 32.0905 7.6632 32.0899 7.66004 30.1972C7.65519 27.2817 7.65668 27.2858 7.65575 27.0328C7.63041 19.7277 7.6619 2.19963 7.66171 1.53005C7.66171 0.371822 7.78786 -0.00773621 6.95903 0.00454712C5.20579 0.0306091 3.96032 -0.0105247 1.92943 0.00268936C0.383022 0.0127449 0.0658766 -0.108253 0.038485 0.598C0.017988 1.12759 0.0263737 14.8135 0.0271191 16.0498Z"
                  fill="#242424"
                />
              </svg>
              <svg
                className="absolute right-0 bottom-0 h-[40px] w-[45px]"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.9729 16.0498C44.9818 20.7586 44.9736 28.7228 44.9725 29.825C44.9639 38.2197 45.0204 38.2193 44.9919 38.9488C44.9874 39.0633 44.9535 39.9348 44.0002 39.9829C43.6778 39.9993 5.10202 40.005 3.00815 39.9952C0.411736 39.9829 0.326393 40.0322 0.122166 39.747C-0.0930519 39.4466 0.0407372 36.0311 0.0448341 33.1752C0.0459518 32.5181 0.355644 32.557 0.77248 32.5363C1.93373 32.479 1.93355 32.4866 15.3062 32.5123C25.4103 32.5317 32.3262 32.4853 35.99 32.4941C36.6669 32.4955 37.1866 32.6212 37.3008 32.2474C37.3489 32.0905 37.3368 32.0899 37.34 30.1972C37.3448 27.2817 37.3433 27.2858 37.3443 27.0328C37.3696 19.7277 37.3381 2.19963 37.3383 1.53005C37.3383 0.371822 37.2121 -0.00773621 38.041 0.00454712C39.7942 0.0306091 41.0397 -0.0105247 43.0706 0.00268936C44.617 0.0127449 44.9341 -0.108253 44.9615 0.598C44.982 1.12759 44.9736 14.8135 44.9729 16.0498Z"
                  fill="#242424"
                />
              </svg>

              <p
                className="text-center text-[72px] leading-[123%] font-black tracking-[0.72px] whitespace-nowrap text-[#242424] max-md:text-[34px]"
                style={mainFont}
              >
                KIVOは、そういう世界です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden bg-[#242424] px-[16px] py-[120px] max-lg:block">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="space-y-[56px]">
            <div>
              <p
                className="text-[44px] leading-[1.2] font-bold tracking-[0.5px] text-white max-md:text-[32px]"
                style={mainFont}
              >
                <span className="block">100いいねより、</span>
                <span className="block">1購入。</span>
              </p>
              <p
                className="mt-[24px] text-[18px] leading-[1.8] font-normal tracking-[0.5px] text-white"
                style={mainFont}
              >
                1人が買ったという事実は、需要の在処です。その人が感じた価値を、同じように感じている人が必ずほかにもいます。
              </p>
            </div>
            <img
              src="/assets/images/app/image-03.png"
              alt=""
              className="h-auto w-full rounded-[16px] object-cover"
            />
            <img
              src="/assets/images/app/image-04.png"
              alt=""
              className="h-auto w-full rounded-[16px] object-cover"
            />
            <div>
              <p
                className="text-[44px] leading-[1.2] font-bold tracking-[0.5px] text-white max-md:text-[32px]"
                style={mainFont}
              >
                <span className="block">1人は、多くの人の</span>
                <span className="block">代表です。</span>
              </p>
              <p
                className="mt-[24px] text-[18px] leading-[1.8] font-normal tracking-[0.5px] text-white"
                style={mainFont}
              >
                その1人から始まるファンとの関係が、やがてあなただけの経済圏になっていきます。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[96px] bg-[#F98528] py-[56px]">
          <div className="mx-auto w-full max-w-[720px] px-[16px] text-center">
            <p
              className="text-[42px] leading-[1.2] font-black tracking-[0.5px] text-[#242424] max-md:text-[30px]"
              style={mainFont}
            >
              KIVOは、そういう世界です。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldviewValueSection;
