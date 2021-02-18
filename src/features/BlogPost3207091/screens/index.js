import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_163_624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I163_624_144_381}
        />
        <View style={styles.View_I163_624_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I163_624_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I163_624_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I163_624_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I163_624_144_400}
        />
      </View>
      <View style={styles.View_163_627} />
      <View style={styles.View_163_677}>
        <View style={styles.View_163_674}>
          <Text style={styles.Text_163_674}>Post Title Here...</Text>
        </View>
        <View style={styles.View_163_678}>
          <Text style={styles.Text_163_678}>Author</Text>
        </View>
        <View style={styles.View_163_675}>
          <Text style={styles.Text_163_675}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat. Enim
            reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non
            labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est
            laboris cupidatat ad est anim adipisicing sit labore do dolor
            officia. Fugiat consequat in excepteur reprehenderit id aliquip
            voluptate sint enim proident aliquip occaecat quis non. Ad nulla
            aliqua est amet aliqua sint est occaecat amet sunt. Ullamco laborum
            qui sint officia officia ad Lorem culpa minim voluptate occaecat id
            duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat
            proident ex ad elit laboris. Nulla aute sit occaecat laboris.
            Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit
            anim laborum proident cillum laboris. Et cillum tempor esse sit anim
            et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor
            quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla.
            Eu sunt laborum elit consectetur tempor sunt dolore in sunt
            reprehenderit voluptate dolore adipisicing. Proident eiusmod
            reprehenderit quis sint exercitation voluptate non labore. Sunt non
            sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem
            ipsum officia.
          </Text>
        </View>
      </View>
      <View style={styles.View_163_635}>
        <View style={styles.View_I163_635_150_580}>
          <View style={styles.View_I163_635_150_581} />
          <View style={styles.View_I163_635_150_582}>
            <View style={styles.View_I163_635_150_583} />
          </View>
        </View>
        <View style={styles.View_I163_635_150_584}>
          <View style={styles.View_I163_635_150_618} />
          <View style={styles.View_I163_635_150_619} />
          <View style={styles.View_I163_635_150_620} />
          <View style={styles.View_I163_635_150_621} />
          <View style={styles.View_I163_635_150_622} />
        </View>
        <View style={styles.View_I163_635_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_163_624: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I163_624_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I163_624_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I163_624_144_387: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.33349609375,
    top: 0.002685546875
  },
  ImageBackground_I163_624_144_391: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.02685546875,
    top: 0
  },
  ImageBackground_I163_624_144_395: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.3359375
  },
  ImageBackground_I163_624_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_163_627: {
    width: 343,
    minWidth: 343,
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 76,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_163_677: {
    width: 343,
    minWidth: 343,
    height: 1117,
    minHeight: 1117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 304
  },
  View_163_674: {
    flexGrow: 1,
    width: 343,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_163_674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_678: {
    flexGrow: 1,
    width: 343,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 37
  },
  Text_163_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_675: {
    flexGrow: 1,
    width: 343,
    minHeight: 1045,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 72
  },
  Text_163_675: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_635: {
    flexGrow: 1,
    width: 375,
    height: 83.5,
    minHeight: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 729,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_635_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I163_635_150_581: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I163_635_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I163_635_150_583: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_635_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I163_635_150_618: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I163_635_150_619: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I163_635_150_620: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I163_635_150_621: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I163_635_150_622: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I163_635_150_614: {
    flexGrow: 1,
    width: 375,
    height: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(189, 197, 205, 1)"
  },
  View_2: { height: 812 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
