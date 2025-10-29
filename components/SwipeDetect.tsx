import React, { useRef, ReactNode } from "react";
import { View, GestureResponderEvent, StyleSheet } from "react-native";

type SwipeDetectProps = {
  SwipeLeft?: () => void;
  SwipeRight?: () => void;
  children: ReactNode;
};

export default function SwipeDetect({
  SwipeLeft,
  SwipeRight,
  children,
}: SwipeDetectProps) {
  const swipeStartX = useRef(0);
  const swipeEndX = useRef(0);

  const handleTouchStart = (e: GestureResponderEvent) => {
    swipeStartX.current = e.nativeEvent.pageX;
    console.log("Swipe started:", swipeStartX.current);
  };

  const handleTouchMove = (e: GestureResponderEvent) => {
    swipeEndX.current = e.nativeEvent.pageX;
  };

  const handleTouchEnd = () => {
    const deltaX = swipeEndX.current - swipeStartX.current;
    console.log("Swipe delta:", deltaX);
    if (deltaX > 50) {
      SwipeRight?.();
    } else if (deltaX < -50) {
      SwipeLeft?.();
    }

    swipeStartX.current = 0;
    swipeEndX.current = 0;
  };

  return (
    <View
      style={styles.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
