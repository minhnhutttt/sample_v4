type ImagePlaceholderProps = {
  className?: string;
};

const ImagePlaceholder = ({ className }: ImagePlaceholderProps) => (
  <div
    className={`flex items-center justify-center bg-[#d9d9d9]${
      className ? ` ${className}` : ''
    }`}
  >
    <span className="text-ink text-[16px] leading-[2] font-medium tracking-[0.64px]">
      フリー素材or生成画像
    </span>
  </div>
);

export default ImagePlaceholder;
