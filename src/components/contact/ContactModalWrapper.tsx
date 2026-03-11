'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal } from '@/store/slices/modalSlice';

import ContactModal from './ContactModal';

export const ContactModalWrapper = () => {
  const dispatch = useAppDispatch();
  const { isOpen, name } = useAppSelector((state) => state.modal);
  return (
    <ContactModal
      isOpen={isOpen && name === 'contact'}
      onClose={() => dispatch(closeModal())}
    />
  );
};
