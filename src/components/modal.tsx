'use client';

import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal } from '@/store/slices/modalSlice';

const Modal = ({
  children,
  modalName,
}: {
  children: ReactNode;
  modalName: string;
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, name } = useAppSelector((state) => state.modal);

  const shouldRender = isOpen && modalName === name;
  const isClient = typeof window !== 'undefined';

  const handleBackgroundClick = () => dispatch(closeModal());
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  if (!isClient || !shouldRender) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/40 md:items-center"
        onClick={handleBackgroundClick}
      />
      <div className="fixed top-1/2 left-1/2 z-[9999] max-w-[90vw] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative overflow-hidden rounded-2xl bg-white"
          onClick={handleContentClick}
        >
          <button
            className="absolute top-2 right-2 cursor-pointer"
            type="button"
            onClick={() => dispatch(closeModal())}
          >
            ×
          </button>
          <div className="max-h-[80vh] overflow-auto">{children}</div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
