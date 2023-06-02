import React, { ReactNode, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { Inter } from 'next/font/google';
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
  onClose?: () => void;
  onConfirm: () => void;
  children: ReactNode;
  confirmBtnTitle?: string;
  opened: boolean;
  title?: string;
  status?: 'error' | 'success';
  isLoading?: boolean;
  disabled?: boolean;
  buttons?: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const ModalLayout = ({
  onClose,
  onConfirm,
  children,
  isLoading,
  disabled,
  opened,
  title,
  confirmBtnTitle,
  status,
  buttons,
}: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

  let statusClassName = '';

  if (status) {
    statusClassName = status === 'success' ? cls.success : cls.error;
  }

  const handleClose = () => {
    if (onClose) {
      onClose();

      return;
    }

    onConfirm();
  };

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onConfirm();
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
          <header className={cls.modal_header}>
            <h2 className={cls.title}>{title}</h2>

            <MdOutlineClose className={cls.modal_btn_close} onClick={handleClose} />
          </header>

          <div className={cls.modal_content}>{children}</div>

          <footer className={cls.modal_footer}>
            <Button onClick={onConfirm} isLoading={isLoading} disabled={disabled}>
              {confirmBtnTitle || 'OK'}
            </Button>

            {buttons && <>{buttons}</>}
          </footer>
        </div>
      </CSSTransition>
    </div>
  );
};
