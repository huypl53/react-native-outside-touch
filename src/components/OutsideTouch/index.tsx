import React from 'react';
import { View, GestureResponderEvent } from 'react-native';

interface IProps {
  popupRef: React.MutableRefObject<React.ReactNode>;

  popupShown: boolean;
  setPopupShown: (arg0: boolean) => void;
  children?: React.ReactNode;
  style?: Object;
}

const isInside = (src: any, tg: any) => {
  console.log(src?._nativeTag, tg?._nativeTag);
  if (src && tg && src._nativeTag === tg._nativeTag) {
    return true;
  }

  if (tg?._children?.length > 0) {
    const n = tg._children.length;
    for (let i = 0; i < n; i++) {
      if (isInside(src, tg._children[i])) {
        return true;
      }
    }
  }

  return false;
};

const OutsideTouch = (props: IProps) => {
  const { popupShown, setPopupShown, popupRef, children, style } = props;

  return (
    <View
      style={style}
      onStartShouldSetResponderCapture={(evt: GestureResponderEvent) => {
        if (popupShown && !isInside(evt.target, popupRef.current)) {
          // console.log('Capture outside Popup, ');
          setPopupShown(false);
          return true;
        }
        // console.log('Not capture respond');
        return false;
      }}
    >
      {children}
    </View>
  );
};

export default OutsideTouch;
