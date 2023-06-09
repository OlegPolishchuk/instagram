import React, { ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { CSSTransition } from 'react-transition-group';

import animationStyles from './animation.module.css';
import cls from './ModalLayout.module.css';

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

export const ANIMATION_TIME = 300;

interface Props {
  onClose: () => void;
  children: ReactNode;
  opened: boolean;
  status?: 'error' | 'success';
}

const inter = Inter({ subsets: ['latin'] });

export const ModalLayout = ({ onClose, children, opened, status }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

  let statusClassName = '';

  if (status) {
    statusClassName = status === 'success' ? cls.success : cls.error;
  }

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={clsx(cls.container, inter.className)}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div
          role="presentation"
          ref={overlayRef}
          className={cls.overlay}
          onClick={onClose}
        />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={clsx(statusClassName, cls.content)}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
