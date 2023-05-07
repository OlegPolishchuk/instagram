import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { MdOutlineClose } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';

import animationStyles from './animation.module.css';
import cls from './ModalLayout.module.css';

import { Button } from '@/shared/ui';

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
  title?: string;
}

export const ModalLayout = ({ onClose, children, opened, title }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

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
    <div className={cls.container}>
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
        <div ref={contentRef} className={cls.content}>
          <header className={cls.modal_header}>
            <h2>{title}</h2>

            <MdOutlineClose className={cls.modal_btn_close} onClick={onClose} />
          </header>

          <div className={cls.modal_content}>{children}</div>

          <footer className={cls.modal_footer}>
            <Button onClick={onClose}>OK</Button>
          </footer>
        </div>
      </CSSTransition>
    </div>
  );
};
