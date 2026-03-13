'use client';

import useScrollAnimations from '@/app/hooks/useScrollAnimations';

const HomeCan = () => {
  const ref = useScrollAnimations();
  return (
    <div
      ref={ref}
      className="bg-[url(/assets/images/can-bg.png)] bg-cover px-5 py-20 md:py-50"
    >
      <div className="mx-auto w-full max-w-[880px]">
        <div className="fade-up flex items-center justify-center">
          <span className="font-inter text-[38px] font-bold md:text-[64px]">
            PALで<span className="u-text-gradient">できること</span>
          </span>
        </div>
        <div className="fade-up mt-10 overflow-hidden rounded-[30px] border border-[#666666] md:rounded-[50px]">
          <table className="font-inter w-full border-collapse bg-white text-center font-bold [&_td]:text-[14px] md:[&_td]:text-[20px] [&_td:nth-of-type(1)]:text-left [&_th]:bg-[#96D5F2] [&_th]:text-center [&_th]:text-[20px] [&_th]:font-bold md:[&_th]:text-[32px] [&_th+th,&_td+td]:border-l [&_th,&_td]:h-[90px] [&_th,&_td]:border-[#666] [&_th,&_td]:px-3 md:[&_th,&_td]:h-[110px] md:[&_th,&_td]:px-10 [&_tr+tr]:border-t">
            <thead>
              <tr>
                <th></th>
                <th>無料体験</th>
                <th>月額プラン</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>広告文・キーワード生成</td>
                <td>プレビューのみ</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>Google広告アカウント連携</td>
                <td>-</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>設定内容の自動更新</td>
                <td>-</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>広告の方向性指示</td>
                <td>-</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>改善内容の報告</td>
                <td>-</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td>設定内容の手動修正</td>
                <td>-</td>
                <td>
                  <p className="flex justify-center">
                    <img
                      src="/assets/images/ic-check.svg"
                      className="max-md:w-7"
                      alt=""
                    />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-36 md:mt-50">
          <div className="fade-up flex items-center justify-center">
            <span className="font-inter text-center text-[38px] font-bold md:text-[64px]">
              月額プラン/年額プラン
            </span>
          </div>
          <p className="fade-up py-8 text-center text-[14px] md:py-[50px] md:text-[18px]">
            ご利用料料金は広告予算規模により変化します。
          </p>
          <div className="fade-up">
            <table className="w-full border-collapse text-center font-bold [&_td]:border [&_td]:border-[#666666] [&_th,&_td]:h-[90px] md:[&_th,&_td]:h-[107px] [&_th:nth-of-type(2),&_td:nth-of-type(2)]:border-[2px] [&_th:nth-of-type(2),&_td:nth-of-type(2)]:border-[#39BBF8] [&_th:nth-of-type(2),&_td:nth-of-type(2)]:bg-[#96D5F2]">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-[20px] md:border-[3px] md:text-[32px]">
                    プレミアム
                  </th>
                  <th className="border border-[#666666] bg-[#F2F2F2] text-[20px] md:text-[32px]">
                    ライト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-[20px] font-bold md:text-[32px]">
                      月額費用
                    </p>
                    <p className="text-[16px] font-medium md:text-[20px]">
                      （税抜）
                    </p>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">85,000</span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">30,000</span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-[20px] font-bold md:text-[32px]">
                      年間費用
                    </p>
                    <p className="text-[16px] font-medium md:text-[20px]">
                      （税抜）
                    </p>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">
                      1,020,000
                    </span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">360,000</span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-[20px] font-bold md:text-[32px]">
                      導入費
                    </p>
                    <p className="text-[16px] font-medium md:text-[20px]">
                      （税抜）
                    </p>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">200,000</span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                  <td>
                    <span className="text-[20px] md:text-[36px]">0</span>
                    <span className="text-[14px] md:text-[24px]">円</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-[20px] font-bold md:text-[32px]">
                      導入補助
                    </p>
                    <p className="text-[16px] font-medium md:text-[20px]">
                      （税抜）
                    </p>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <svg
                        className="w-8 md:w-12.5"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="25"
                          cy="25"
                          r="22.5"
                          stroke="#333333"
                          strokeWidth="5"
                        />
                      </svg>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <svg
                        className="w-9 md:w-13.5"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.76782 1.76953L51.7678 51.7695"
                          stroke="#333333"
                          strokeWidth="5"
                        />
                        <path
                          d="M51.7678 1.76953L1.76783 51.7695"
                          stroke="#333333"
                          strokeWidth="5"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCan;
