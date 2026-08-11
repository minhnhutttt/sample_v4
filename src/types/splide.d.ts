// react-splide chưa khai báo điều kiện "types" trong package.json "exports",
// nên moduleResolution "bundler" không tìm thấy declaration file của nó.
// Trỏ thẳng vào file types bằng đường dẫn tương đối để bỏ qua "exports"
// (không dùng tsconfig "paths" vì Turbopack cũng đọc paths khi resolve runtime).
declare module '@splidejs/react-splide' {
  export { Splide } from '../../node_modules/@splidejs/react-splide/dist/types/components/Splide/Splide';
  export { SplideTrack } from '../../node_modules/@splidejs/react-splide/dist/types/components/SplideTrack/SplideTrack';
  export { SplideSlide } from '../../node_modules/@splidejs/react-splide/dist/types/components/SplideSlide/SplideSlide';
}

// Các subpath CSS trỏ tới file .css thật nhưng "exports" không có điều kiện
// "types", nên TS strip đuôi .css rồi đi tìm splide-core.min.d.css.ts và fail.
// Khai báo rỗng là đủ: import CSS chỉ có side effect, không cần kiểu.
declare module '@splidejs/react-splide/css/core';
declare module '@splidejs/react-splide/css';
