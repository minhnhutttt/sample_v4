import Image from 'next/image';
import Link from 'next/link';

export default function SignUpButton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`section-7__btn-wrapper ${className}`}>
      <div className="section-5__btn-icon">
        <Image
          src="/images/promo-arrow.svg"
          alt=""
          width={40}
          height={40}
          className="icon-shake-reverse img-full"
          aria-hidden="true"
        />
      </div>
      <div className="fixed-sign-up-button-stub h-[60px] md:h-[80px]">
        <Link
          href="/signup"
          className="btn btn--primary btn--block pointer-events-none block h-full w-full opacity-0!"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
