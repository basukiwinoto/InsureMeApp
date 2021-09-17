import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Headline, Button, Title } from 'react-native-paper';

const CoverScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.mainView}>
      <View style={styles.heading}>
        <Title style={styles.headline} >InsureMe Choose</Title>
      </View>
      <View style={styles.topView}>
        <View style={styles.floating}>
          <Headline style={styles.headline} >Welcome to{"\n"}Open Enrollment.</Headline>
        </View>
        <Button style={styles.button}
          onPress={() => navigation.navigate('Question1')}
        >Let's Begin ></Button>
      </View>
      <View style={styles.midView}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 200">
          <Path fill="blue" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,80C960,53,1056,43,1152,74.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </Path>
        </Svg>
      </View>
      <View style={styles.bottomView}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "navy",
    flex: 1
  },
  heading: {
    height:100,
    justifyContent: "flex-end"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 20
  },
  topView: {
    flex: 4,
    justifyContent: "center"
  },
  midView: {
    flex:1,
  },
  bottomView: {
    flex:3,
    backgroundColor: "blue"
  },
  headline: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 20,

  },
  floating: {
    paddingTop: 60,
    height: 120
  },
  button: {
    marginTop: 40,
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 200,
    marginLeft: 20
  }
});

export default CoverScreen;
