# RULES: Figma → Code Pixel-Perfect (Next.js + Tailwind CSS v4 + TypeScript)

> Rule bắt buộc khi chuyển design từ Figma sang code trong dự án này. Mục tiêu: sản phẩm code phải khớp 1:1 (pixel-perfect) với thiết kế Figma.

---

## 0. Nguyên tắc tối thượng

1. **Không đoán số liệu.** Mọi giá trị (spacing, size, radius, font-size, line-height, color…) phải lấy trực tiếp từ Figma (qua Figma MCP / Dev Mode / Inspect panel), tuyệt đối không ước lượng bằng mắt.
2. **1 Figma frame = 1 component/section rõ ràng.** Không gộp nhiều frame thành 1 component nếu Figma không group chúng lại.
3. **Không tự "tối ưu hoá" bố cục** (đổi flex thành grid, gộp spacing, bỏ wrapper div...) nếu điều đó làm sai lệch cấu trúc gốc của Figma, trừ khi được yêu cầu.
4. Khi có mâu thuẫn giữa "code đẹp" và "đúng pixel design" → **ưu tiên đúng design trước**, sau đó mới refactor cho sạch.

---

## 1. Quy trình bắt buộc trước khi code

1. Lấy dữ liệu từ Figma bằng công cụ (Figma Dev Mode MCP: `get_code`, `get_image`, `get_variable_defs`...):
   - Kích thước frame (width/height), auto-layout (direction, gap, padding, alignment).
   - Design tokens: color, typography (font-family, size, weight, line-height, letter-spacing), spacing, radius, shadow, opacity.
   - Assets: icon/SVG export riêng, ảnh export đúng định dạng (SVG cho icon/logo, PNG/WebP cho ảnh raster).
2. Đối chiếu breakpoints: kiểm tra Figma có frame riêng cho Desktop / Tablet / Mobile không. Nếu có, code phải responsive đúng theo từng frame đó, không tự suy diễn breakpoint.
3. Liệt kê danh sách component cần tạo theo cấu trúc layer của Figma (tên layer → tên component, giữ nguyên ngữ nghĩa).
4. Chỉ sau khi có đủ token/số liệu mới bắt đầu viết code.

---

## 2. Thiết lập Design Tokens (bắt buộc, không hardcode bừa)

Dự án dùng **Tailwind CSS v4 (CSS-first config)** — token khai báo trong `@theme` tại [src/app/globals.css](src/app/globals.css), **không dùng** `tailwind.config.ts`.

### 2.1 Khai báo trong `@theme` (globals.css)

```css
@theme {
  /* map đúng tên biến Figma (Figma variable/style name) */
  --color-brand-primary: #0f62fe;
  --color-neutral-900: #111318;

  --font-jp: var(--font-noto-sans-jp), 'Hiragino Sans', 'Yu Gothic', sans-serif;

  --spacing-section-y: 96px; /* chỉ thêm nếu Figma dùng giá trị lẻ ngoài scale mặc định */
  --radius-card: 12px;
  --shadow-card: 0px 4px 12px rgba(16, 24, 40, 0.08);
}
```

- Mọi token mới lấy từ Figma → thêm vào `@theme` trong `globals.css`, không khai báo rải rác/hardcode trong từng component.
- **Không** dùng arbitrary value (`w-[123px]`) tràn lan khi giá trị lặp lại nhiều lần → phải đưa vào token trong `@theme`.
- Arbitrary value (`px-[13px]`, `top-[7px]`...) **được phép** cho giá trị đặc thù chỉ xuất hiện 1 lần, miễn là đúng số Figma.
- Font-size/line-height/letter-spacing/font-weight của mỗi text style trong Figma nên map thành 1 token/utility riêng, không tách rời rồi tự ước lượng line-height.

---

## 3. Quy tắc Layout (Auto Layout Figma → Flex/Grid)

| Figma Auto Layout        | Tailwind/CSS tương ứng                                        |
| ------------------------ | ------------------------------------------------------------- |
| Direction: Horizontal    | `flex flex-row`                                               |
| Direction: Vertical      | `flex flex-col`                                               |
| Gap                      | `gap-[Npx]` (đúng số Figma)                                   |
| Padding                  | đúng từng cạnh, dùng `pt-`, `pr-`, `pb-`, `pl-` nếu không đều |
| Align items              | `items-start/center/end/stretch`                              |
| Justify content          | `justify-start/center/end/between/around`                     |
| Resizing: Fill container | `flex-1` / `w-full`                                           |
| Resizing: Hug contents   | `w-fit` (không set width cứng)                                |
| Fixed size               | width/height cụ thể theo px của Figma                         |

- Nếu layer trong Figma **không** dùng Auto Layout (vị trí tuyệt đối/free-form) → dùng `absolute` + `top/left` đúng toạ độ, đặt trong container `relative`. Không cưỡng ép thành flex nếu Figma không thiết kế theo flow.
- Giữ đúng **z-index / thứ tự layer** như trong Figma.

---

## 4. Typography

1. Mỗi Text Style trong Figma → 1 class/token riêng, không dùng `text-[16px]` rời rạc lặp lại nhiều nơi.
2. Bắt buộc khai báo đủ 4 thuộc tính khi có: `font-size`, `line-height`, `font-weight`, `letter-spacing`. Thiếu 1 trong 4 là sai pixel.
3. Font phải đúng font-family trong Figma, load qua `next/font` (Google Fonts hoặc local font file), khai báo `variable` và gán vào biến `--font-*` trong `@theme`.
4. Không dùng `font-normal`, `font-bold` chung chung nếu Figma quy định weight cụ thể (300/500/600...) → dùng đúng utility tương ứng.

### 4.1 Quy tắc đơn vị & làm tròn (bắt buộc)

| Thuộc tính       | Đơn vị                                                          | Quy tắc làm tròn                                                                                                                               |
| ---------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `font-size`      | **px** (không dùng `rem`/`em`)                                  | Làm tròn về **số nguyên** gần nhất (VD: Figma báo `15.98px` → dùng `16px`)                                                                     |
| `line-height`    | **px** (không để `normal`/unitless nếu Figma có giá trị cụ thể) | Làm tròn về **số nguyên** gần nhất (VD: `23.5px` → `24px`)                                                                                     |
| `letter-spacing` | **em** (không dùng `px`)                                        | Quy đổi từ giá trị Figma (thường tính theo %) sang `em`, làm tròn tối đa **3 chữ số thập phân** (VD: Figma `-2%` ở font-size 16px → `-0.02em`) |

- Công thức quy đổi letter-spacing từ % (Figma) sang em: `em = %/100`. Nếu Figma hiển thị theo px: `em = px / font-size(px)`.
- Nếu letter-spacing = 0 hoặc không set trong Figma → không cần khai báo (dùng mặc định `normal`), không tự thêm `0em`.

---

## 5. Assets (icon, ảnh, illustration)

1. Icon/logo/vector → export **SVG**, inline component hoặc file `.svg`, không dùng ảnh raster để tránh vỡ nét.
2. Ảnh chụp/illustration phức tạp → export **PNG/WebP** đúng scale (@1x/@2x nếu cần), dùng `next/image` với `width`/`height` đúng tỉ lệ gốc để tránh layout shift.
3. Không tự vẽ lại icon bằng code nếu Figma đã export sẵn SVG → dùng đúng file gốc để đảm bảo hình dạng chính xác.
4. Giữ đúng màu, opacity, blend-mode của asset như trong Figma.

---

## 6. Responsive

1. Chỉ tạo breakpoint tương ứng với các frame mà Figma thực sự có (VD: Desktop 1440, Tablet 768, Mobile 375). Không tự bịa breakpoint trung gian nếu không có thiết kế cho nó.
2. Dùng Tailwind breakpoint chuẩn (`sm/md/lg/xl/2xl`) hoặc custom breakpoint khớp đúng width frame Figma (khai báo qua `@theme` với biến `--breakpoint-*`).
3. Với phần tử không có thiết kế riêng cho mobile, áp dụng nguyên tắc responsive hợp lý (fluid, `flex-wrap`, `%`), nhưng phải nói rõ với người dùng đây là phần tự suy luận, không phải pixel-perfect theo Figma.

---

## 7. Cấu trúc code Next.js + TypeScript

1. Mỗi section/component từ Figma → 1 file component riêng trong `src/components/` (hoặc `src/app/(index)/components/` cho section thuộc trang chủ), đặt tên theo tên layer Figma, giữ convention kebab-case của repo (VD: layer `Hero Section` → `hero.tsx`).
2. Props phải có type rõ ràng (`interface` hoặc `type`), không dùng `any`.
3. Component thuần UI (không fetch data) nên là **Server Component** mặc định trong Next.js App Router; chỉ thêm `"use client"` khi thực sự cần state/interaction/hook.
4. Tách nhỏ theo đúng cấu trúc layer group của Figma (không dồn hết vào 1 file `page.tsx` nếu Figma có group rõ ràng theo section).
5. Text nội dung tĩnh nên đưa vào constants/props thay vì hardcode sâu trong JSX, để dễ đối chiếu lại với Figma khi review.

---

## 8. Checklist QA "Pixel-Perfect" (bắt buộc chạy trước khi báo hoàn thành)

- [ ] So sánh side-by-side: chụp screenshot trang code vs. export ảnh Figma ở cùng viewport width.
- [ ] Kiểm tra spacing bằng DevTools (Inspect → khoảng cách giữa các phần tử) đối chiếu số đo Figma.
- [ ] Kiểm tra font: đúng family, size, weight, line-height, letter-spacing (dùng DevTools Computed style).
- [ ] Kiểm tra màu sắc bằng color picker trên cả 2 bên, không lệch mã hex/opacity.
- [ ] Kiểm tra border-radius, shadow, border width/color.
- [ ] Kiểm tra trạng thái hover/focus/active/disabled nếu Figma có variant cho các state này.
- [ ] Kiểm tra responsive ở đúng các breakpoint có trong Figma.
- [ ] Không còn console warning/error, không có `TODO` số liệu còn bỏ ngỏ.

---

## 9. Việc KHÔNG được làm

- Không tự chế thêm spacing/margin "cho đẹp mắt" nếu Figma không có.
- Không đổi font-family/màu sắc "gần giống" khi không tìm được đúng font/màu → phải hỏi lại người dùng hoặc dùng đúng giá trị export từ Figma.
- Không bỏ qua breakpoint mobile nếu Figma có thiết kế cho mobile.
- Không nén/thay đổi tỉ lệ ảnh làm méo hình so với gốc.
- Không dùng giá trị `rem` tự quy đổi sai (mặc định `1rem = 16px`, phải giữ đúng tỉ lệ khi Figma dùng px).

---

## 10. Khi thiếu thông tin

Nếu không lấy được số liệu chính xác từ Figma (không có quyền truy cập, thiếu MCP, ảnh export mờ...), Claude phải:

1. Nêu rõ giá trị nào đang là ước lượng (không được ngầm coi là chính xác).
2. Đề xuất người dùng cung cấp thêm: link Figma (Dev Mode), export ảnh @2x, hoặc token JSON từ Figma Variables.
3. Không tự tin báo cáo "pixel-perfect" nếu chưa verify được bằng số liệu thật.
