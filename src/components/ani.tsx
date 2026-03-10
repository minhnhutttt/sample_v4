import { ReactNode } from 'react';

const Ani = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <div className="titl origin-bottom-left">{children}</div>
    </div>
  );
};

export default Ani;
