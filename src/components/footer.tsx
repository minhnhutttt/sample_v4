'use client';

import Link from 'next/link';

import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

import Button from './button';

const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <footer className="relative overflow-hidden bg-[#424242] text-[#FFF6F6]">
      <div className="site-max">
        <div className="flex justify-center py-[7.5rem] md:py-[12rem]">
          <svg
            width="1194"
            height="147"
            viewBox="0 0 1194 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-9.95696e-05 144.539V2.43905H27.8109V119.164H90.3349V144.539H-9.95696e-05ZM384.368 146.975C370.022 146.975 357.301 143.862 346.204 137.637C335.242 131.276 326.648 122.615 320.423 111.653C314.197 100.556 311.085 87.9021 311.085 73.6921C311.085 59.2114 314.197 46.4901 320.423 35.5281C326.648 24.4307 335.174 15.7694 346.001 9.54406C356.963 3.31872 369.549 0.206057 383.759 0.206057C398.104 0.206057 410.69 3.38639 421.517 9.74706C432.479 15.9724 441.072 24.6337 447.298 35.7311C453.523 46.6931 456.636 59.3467 456.636 73.6921C456.636 87.9021 453.523 100.556 447.298 111.653C441.208 122.615 432.682 131.276 421.72 137.637C410.893 143.862 398.442 146.975 384.368 146.975ZM384.368 121.6C393.029 121.6 400.608 119.57 407.104 115.51C413.735 111.315 418.878 105.631 422.532 98.4581C426.321 91.2854 428.216 83.0301 428.216 73.6921C428.216 64.2187 426.321 55.8957 422.532 48.7231C418.742 41.5504 413.532 35.9341 406.901 31.8741C400.269 27.6787 392.555 25.5811 383.759 25.5811C375.233 25.5811 367.586 27.6787 360.82 31.8741C354.188 35.9341 348.978 41.5504 345.189 48.7231C341.399 55.8957 339.505 64.2187 339.505 73.6921C339.505 83.0301 341.399 91.2854 345.189 98.4581C348.978 105.631 354.256 111.315 361.023 115.51C367.789 119.57 375.571 121.6 384.368 121.6ZM758.316 146.975C743.835 146.975 730.979 143.862 719.746 137.637C708.649 131.276 699.92 122.615 693.559 111.653C687.198 100.556 684.018 87.8344 684.018 73.4891C684.018 59.1437 687.198 46.4901 693.559 35.5281C699.92 24.4307 708.649 15.7694 719.746 9.54406C730.979 3.18339 743.835 0.00305998 758.316 0.00305998C766.977 0.00305998 774.962 1.28873 782.27 3.86006C789.578 6.43139 796.006 10.0177 801.555 14.6191C807.239 19.0851 811.976 24.2277 815.765 30.0471L793.029 44.2571C790.728 40.6031 787.683 37.3551 783.894 34.5131C780.24 31.6711 776.18 29.4381 771.714 27.8141C767.248 26.1901 762.782 25.3781 758.316 25.3781C749.384 25.3781 741.467 27.4757 734.565 31.6711C727.663 35.7311 722.25 41.3474 718.325 48.5201C714.4 55.6927 712.438 64.0157 712.438 73.4891C712.438 82.8271 714.333 91.1501 718.122 98.4581C722.047 105.766 727.528 111.518 734.565 115.713C741.602 119.773 749.722 121.803 758.925 121.803C766.098 121.803 772.458 120.382 778.007 117.54C783.691 114.698 788.157 110.706 791.405 105.563C794.653 100.42 796.277 94.4657 796.277 87.6991L822.667 83.6391C822.667 97.0371 819.893 108.473 814.344 117.946C808.931 127.419 801.352 134.66 791.608 139.667C781.999 144.539 770.902 146.975 758.316 146.975ZM762.985 90.1351V68.4141H822.667V85.6691L807.645 90.1351H762.985ZM1121.31 146.975C1106.97 146.975 1094.25 143.862 1083.15 137.637C1072.19 131.276 1063.59 122.615 1057.37 111.653C1051.14 100.556 1048.03 87.9021 1048.03 73.6921C1048.03 59.2114 1051.14 46.4901 1057.37 35.5281C1063.59 24.4307 1072.12 15.7694 1082.95 9.54406C1093.91 3.31872 1106.49 0.206057 1120.7 0.206057C1135.05 0.206057 1147.64 3.38639 1158.46 9.74706C1169.42 15.9724 1178.02 24.6337 1184.24 35.7311C1190.47 46.6931 1193.58 59.3467 1193.58 73.6921C1193.58 87.9021 1190.47 100.556 1184.24 111.653C1178.15 122.615 1169.63 131.276 1158.67 137.637C1147.84 143.862 1135.39 146.975 1121.31 146.975ZM1121.31 121.6C1129.97 121.6 1137.55 119.57 1144.05 115.51C1150.68 111.315 1155.82 105.631 1159.48 98.4581C1163.27 91.2854 1165.16 83.0301 1165.16 73.6921C1165.16 64.2187 1163.27 55.8957 1159.48 48.7231C1155.69 41.5504 1150.48 35.9341 1143.85 31.8741C1137.21 27.6787 1129.5 25.5811 1120.7 25.5811C1112.18 25.5811 1104.53 27.6787 1097.77 31.8741C1091.13 35.9341 1085.92 41.5504 1082.13 48.7231C1078.34 55.8957 1076.45 64.2187 1076.45 73.6921C1076.45 83.0301 1078.34 91.2854 1082.13 98.4581C1085.92 105.631 1091.2 111.315 1097.97 115.51C1104.73 119.57 1112.52 121.6 1121.31 121.6Z"
              fill="#FFF6F6"
            />
          </svg>
        </div>
      </div>
      <div className="relative flex">
        <hr className="z-1 w-full border-[#808080]" />
      </div>
      <div className="site-max flex flex-col items-center py-[8rem]">
        <p className="mb-[2rem] text-center text-[2.9em]">
          私たちと事業の可能性を広げていきませんか？
        </p>
        <Button
          text="お問い合わせ"
          en="CONTACT US"
          onClick={() => dispatch(openModal({ name: 'contact' }))}
        />
        <div id="company" className="mx-auto w-full max-w-[57rem]">
          <div className="py-[10rem]">
            <p className="text-[1.8rem] font-medium text-[#85F4E2]">
              Company Profile
            </p>
            <div className="mt-[3.6rem] flex gap-[2rem] max-md:flex-col md:items-end">
              <figure>
                <img src="/assets/images/map.png" alt="" />
              </figure>
              <div className="flex flex-1 md:items-end md:justify-end">
                <div className="space-y-[1.2rem] text-[1.6rem]">
                  <p>Global OEM Solutions Inc. </p>
                  <p>東京都千代田区1-1-1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-[#85F4E2]">
                Index
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="/#products" className="block">
                    <p className="text-[1.4rem]">製品一覧</p>
                    <p className="text-[1rem] text-[#FFF6F6]/50">PRODUCTS</p>
                  </Link>
                </li>
                <li>
                  <Link href="#company" className="block">
                    <p className="text-[1.4rem]">会社概要</p>
                    <p className="text-[1rem] text-[#FFF6F6]/50">COMPANY</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-[#85F4E2]">
                Let’s social
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Linkedln</p>
                  </Link>
                </li>
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Facebook</p>
                  </Link>
                </li>
                <li>
                  <Link href="" className="block">
                    <p className="text-[1.4rem]">Instagram</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-[2.8rem] text-[1.4rem] font-bold text-[#85F4E2]">
                Case studies
              </p>
              <ul className="space-y-[2rem]">
                <li>
                  <Link href="/steproof" className="block">
                    <p className="text-[1.4rem]">Steproof</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex justify-between py-[14rem] text-[1.05rem] text-[#FFF6F6]/50">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
