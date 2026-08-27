import { WHY_BLOCKS } from '@/data/lp';

import FadeIn from '../ui/fade-in';
import ImagePlaceholder from '../ui/image-placeholder';
import SectionTitle from '../ui/section-title';

const WhyAlona = () => (
  <section
    data-section="why"
    className="flex flex-col gap-[50px] bg-white px-[32px] pt-[103px]"
  >
    <SectionTitle id="why" en="WHY ALONA" jp="ALONAが選ばれる理由" />

    {WHY_BLOCKS.map((block) => (
      <FadeIn key={block.body} className="flex flex-col gap-[20px]">
        <div className="flex flex-col justify-center gap-[4px]">
          <h3 className="text-ink text-center text-[20px] leading-[1.4] font-bold">
            {block.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <span className="block h-px w-[310px] bg-[#a1a1a1]" />
        </div>

        <p className="text-body text-[16px] leading-[1.7] tracking-[0.32px]">
          {block.body}
        </p>

        <ImagePlaceholder className="h-[188px] w-full rounded-tl-[30px] rounded-br-[30px]" />
      </FadeIn>
    ))}
  </section>
);

export default WhyAlona;
