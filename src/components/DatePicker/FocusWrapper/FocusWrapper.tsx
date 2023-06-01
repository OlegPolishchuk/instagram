import React, { ReactNode, RefObject, useState } from 'react';

import FocusTrap from 'focus-trap-react';
import { usePopper } from 'react-popper';

interface Props {
  children?: ReactNode;
  closePopper: () => void;
  popperRef: RefObject<HTMLDivElement>;
}

export const FocusWrapper = ({ children, closePopper, popperRef }: Props) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  });

  return (
    <FocusTrap
      active
      focusTrapOptions={{
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        onDeactivate: closePopper,
      }}
    >
      <div
        tabIndex={-1}
        style={popper.styles.popper}
        {...popper.attributes.popper}
        ref={setPopperElement}
        role="dialog"
        aria-label="DayPicker calendar"
      >
        {children}
      </div>
    </FocusTrap>
  );
};
