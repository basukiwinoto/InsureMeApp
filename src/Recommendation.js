import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Headline, Button, Title, Subheading, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedNumbers from 'react-native-animated-numbers';

const Question1 = (props) => {
  const { navigation } = props;
  const [animateToNumber, setAnimateToNumber] = React.useState(0);

  return (
    <View style={styles.mainView}>
      <View style={styles.heading}>
        <Icon name="menu" size={30} />
        <Title style={styles.title} >InsureMe Choose</Title>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
      >
      <ScrollView>
        <View>
          <Headline style={styles.headline}>
            Here is what I recommend, Jeff!
          </Headline>
        </View>
        <View style={styles.detail}>
          <Text>Medical</Text>
          <Title>Health Insurance, Inc.</Title>
        </View>
        <View style={styles.detail}>
          <Text>Health Saving Account</Text>
          <Title>$600 monthly contribution max ($7,200/year)</Title>
        </View>
        <View style={styles.detail}>
          <Text>Account Insurance</Text>
          <Title>Health Inc Critical Illness - $10,000</Title>
        </View>
        <View style={styles.buttonBar}>
          <Button
            style={styles.buttonN}
            onPress={()=>{}}
          >Compare Plans</Button>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  heading: {
    height:100,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20
  },
  title: {
    color: "navy",
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  headline: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 40,
    marginTop: 30
  },
  subheading: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  inputView: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    height: 40
  },
  detail: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20
  },
  buttonN: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 200,
  },
});

export default Question1;
