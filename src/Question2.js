import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Headline, Button, Title, Subheading } from 'react-native-paper';
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
      <View>
        <Headline style={styles.headline}>
          Awesome!
        </Headline>
        <Subheading style={styles.subheading}>
          You have a plan with Health Insurance, Inc. with the following detail
        </Subheading>
      </View>
      <View style={styles.detail}>
        <Text>Deductible</Text>
        <AnimatedNumbers
          includeComma
          animateToNumber={6500}
          fontStyle={{fontSize: 30, fontWeight: 'bold'}}
        />
      </View>
      <View style={styles.detail}>
        <Text>Spent</Text>
        <TouchableOpacity onPress={()=>setAnimateToNumber(2499)}>
          <AnimatedNumbers
            includeComma
            animateToNumber={animateToNumber}
            fontStyle={{fontSize: 30, fontWeight: 'bold'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBar}>
        <Button
          style={styles.buttonP}
          onPress={()=>navigation.goBack()}
        >Previous</Button>
        <Button
          style={styles.buttonN}
          onPress={()=>navigation.navigate("Question3")}
        >Next ></Button>
      </View>
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
  detail: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 40
  },
  buttonN: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 120,
  },
  buttonP: {
    width: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "navy"
  }
});

export default Question1;
