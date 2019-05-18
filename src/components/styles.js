import { StyleSheet } from 'react-native';
  
 // Styles for layout
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerViewStyle: {
    flex: 0.13,
  },
  sectionalFlatListStyle: {
    flex: 0.87,
  },
  sectionHeaderView: {
    flex: 1,
    backgroundColor: 'rgb(245,245,245)',
    height: 50,
    paddingLeft: 20,
    paddingBottom: 4,
    justifyContent: 'flex-end',
  },
  sectionTextStyle: {
    fontFamily: 'system font',
    fontSize: 14,
    fontStyle: 'normal',
    letterSpacing: 0.06,
    color: 'rgb(128,128,128)',
  },
  settingsCellView: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
    height: 50,
    paddingLeft: 21,
    justifyContent: 'center',
  },
  settingsCellTextStyle: {
    fontFamily: 'system font',
    fontSize: 16,
    letterSpacing: 0.42,
    color: 'rgb(0,0,0)',
  },
  settingAccountCellTextStyle: {
    fontFamily: 'system font',
    fontSize: 36,
    letterSpacing: 0.42,
    color: 'rgb(0,0,0)',
  },
 
  seperatorStyle: {
    height: 1,
    backgroundColor: 'rgb(245,245,245)',
    position: 'absolute',
    bottom: 1,
   },
  sectionCellStyle: {
    flexDirection: 'column',
  },
  imageStyle: {
    width: 16,
    height: 16,
  },
});

export default styles;
