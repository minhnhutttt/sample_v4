type StoryStepRingProps = {
  className?: string;
};

const StoryStepRing = ({ className = '' }: StoryStepRingProps) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute aspect-square w-full rounded-full border-2 border-white ${className}`}
  />
);

export default StoryStepRing;
