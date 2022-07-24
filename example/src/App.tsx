import * as React from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';

import OutsideTouch from 'react-native-outside-touch';

const Test = () => {
  const [popupShown, setPopupShown] = React.useState<boolean>(false);
  const popupRef = React.useRef(null);
  const inputRef = React.useRef(null);

  return (
    <OutsideTouch
      popupRef={popupRef}
      popupShown={popupShown}
      setPopupShown={setPopupShown}
      style={{
        height: '100%',
        backgroundColor: '#e6e6e6',
        borderStyle: 'dotted',
        borderWidth: 2,
        margin: 2,
      }}
    >
      <Pressable
        onPress={() => {
          setPopupShown(true);
          inputRef.current?.blur();
        }}
        style={{
          backgroundColor: '#99d6ff',
          width: '20%',
          left: '40%',
        }}
      >
        <Text>Show popup</Text>
      </Pressable>

      <TextInput ref={inputRef} placeholder="Start typing..."></TextInput>
      {popupShown && (
        <View
          ref={popupRef}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderStyle: 'dotted',
            position: 'absolute',

            top: '45%',
            left: '45%',
          }}
        >
          <Text>Popup here!</Text>
        </View>
      )}
    </OutsideTouch>
  );
};
const App = () => {
  return (
    <View>
      <Test />
    </View>
  );
};

export default App;
