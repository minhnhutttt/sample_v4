'use client';

import { useState } from 'react';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[30000px]">
      <div className={`group relative z-99 ${isOpen && 'active'}`}>
        <div className="pointer-events-auto invisible absolute top-0 left-0 h-full w-full opacity-0" />
        <div className="absolute top-0 left-0 flex h-[var(--nav-bar-height)] w-full justify-center">
          <div className="flex w-full max-w-[var(--size-container)] flex-none items-center gap-x-[.375em] gap-y-[.375em] p-[1.25em] [flex-flow:column]">
            <div className="pointer-events-auto relative w-full max-w-[var(--nav-bar-max-width-small)] rounded-[.25em] [transition:max-width_var(--animation-default-onehalf)_0.2s] group-[.active]:max-w-full">
              <div className="absolute inset-0 [transition:all_var(--animation-default)]">
                <div className="pointer-events-none absolute rounded-[.4375em] opacity-[.1] opacity-[0.08] [transition:opacity_var(--animation-ease)]"></div>
                <div className="pointer-events-none absolute top-0 left-0 h-full w-full rounded-[.375em] bg-[var(--color-neutral-800)] [transition:background-color_var(--animation-ease)]"></div>
              </div>
              <div className="relative flex h-[3.375em] items-center justify-center border-b border-white/10 p-[.4375em] px-4">
                <div className="flex-1">
                  <div className="h-[2em]">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex h-full cursor-pointer items-center gap-x-[.625em] gap-y-[.625em] rounded-[.125em] pr-[1em] pl-[.625em]"
                    >
                      <div className="relative flex h-[.4375em] w-[1.375em] items-center justify-center [flex-flow:column]">
                        <span className="absolute h-[1px] w-full translate-y-[0.1875em] scale-x-100 rotate-[0.001deg] bg-current bg-white [transition:transform_var(--animation-default)]"></span>
                        <span className="absolute h-[1px] w-full -translate-y-[0.1875em] scale-x-100 rotate-[0.001deg] bg-current bg-white [transition:transform_var(--animation-default)]"></span>
                      </div>
                      <div className="text-white">Menu</div>
                    </button>
                  </div>
                </div>
                <div className="text-center text-white">Logo</div>
                <div className="flex flex-1 justify-end text-white">Login</div>
              </div>
              <div className="relative grid w-full grid-rows-[0fr] overflow-hidden bg-[var(--color-neutral-800)] [transition:grid-template-rows_var(--animation-default)_0s] group-[.active]:grid-rows-[1fr] group-[.active]:[transition:grid-template-rows_var(--animation-default-onehalf)_0.3s]">
                <div className="relative flex h-[10000%] items-center overflow-hidden text-[80px] font-bold text-white [flex-flow:column]">
                  <div className="h-[500px]">Menu Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-50">
        <p className="text-center text-[100px]">Dev Toolkit Built to Flex</p>
        <div className="h-[2000px] py-25">
          <div className="pointer-events-none relative flex aspect-5/1 w-full justify-center">
            <div className="absolute flex w-[193em] items-start justify-center">
              <img
                src="/images/radial-marquee-circle-deco.svg"
                alt=""
                className="aspect-ratio:2120_/_1060.31 absolute bottom-0 w-[90%]"
              />
              <div className="pt-[50%]"></div>
              <div className="absolute flex aspect-2/1 w-full items-center justify-center overflow-hidden [mask-image:linear-gradient(#000_75%,_#0000_100%)] [flex-flow:column]">
                <div className="absolute top-0 aspect-square w-full -rotate-90 [will-change:transform]">
                  <div className="absolute top-0 left-0 h-full w-full [will-change:transform]">
                    <div className="absolute top-0 flex h-full w-full origin-[center_center] animate-[rotateMarquee_90s_linear_infinite] items-center justify-center [will-change:transform]">
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radial-marquee__item">
                        <div className="flex rounded-[.3125em] pt-[3.375em] pr-[.375em] pl-[.375em] [flex-flow:column]">
                          <div className="flex aspect-video">
                            <img
                              className="w-full"
                              src="/images/img.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
