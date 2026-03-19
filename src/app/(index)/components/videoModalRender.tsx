'use client';

import { VideoModal } from '@/app/detail/components/Videomodal';
import { useVideoModal } from '@/providers/VideoModalProvider';

const ModalRenderer = () => {
  const { src, isOpen, closeModal } = useVideoModal();

  if (!src) return null;

  return <VideoModal src={src} isOpen={isOpen} onClose={closeModal} />;
};

const VideoModalRender = () => {
  return <ModalRenderer />;
};

export default VideoModalRender;
