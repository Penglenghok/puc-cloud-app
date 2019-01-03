import { StyleSheet } from "react-native";
import { COLORS, LAYOUT, ICONS } from "../modules";

export default StyleSheet.create({
    icon:{
        width: 45,
        height: 45,   
    },
    lableTabActive:{
        color:COLORS.PRIMARY,
        fontSize:12,
        fontWeight: '500'
    },
    lableTab:{
        fontSize:12,
        color: COLORS.TAB_COLOR
    },
  textMemo:{
    fontSize:14,
    fontWeight:'800',
    color:COLORS.TEXT
  },
  payWidth: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.WHITE
  },
  buttonCard: {
    borderTopColor: COLORS.BORDER,
    borderTopWidth:1,
    backgroundColor: COLORS.BLANK,
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL,
    paddingVertical: 10,
    // borderRadius: 10,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#CFCCDC",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5
  },
  buttonPay: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50
  },
  bodyTop:{
    paddingTop: LAYOUT.BODY_HORIZONTAL,
  },
  control:{
    width:100,
    height:100,
    borderColor:COLORS.PRIMARY,
    borderWidth:1,
    marginRight: LAYOUT.BODY_HORIZONTAL,
    backgroundColor:COLORS.WHITE
  },
  controlBody:{
    padding: LAYOUT.BODY_HORIZONTAL,
  },
  rows:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  cardBody: {
    padding: LAYOUT.CARD_PENDING
  },
  body:{
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL,
  },
  footerCard:{
    height:100,
  },
  pendingCard:{
    height:LAYOUT.BODY_HORIZONTAL,
  },
  titleSmall:{
    fontSize:16,
    fontWeight:'800',
    color:COLORS.SUB_TITLE
  },
  actions:{
    marginVertical: LAYOUT.BODY_HORIZONTAL,
    marginHorizontal: LAYOUT.BODY_HORIZONTAL,
  },
  paddingBody:{
    paddingTop: LAYOUT.BODY_HORIZONTAL,
  },
  arrowList: {
    color: COLORS.ICON_LIGHT,
    fontSize: 16,
    marginLeft: 8
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.SUB_TITLE,
    marginBottom: LAYOUT.BODY_HORIZONTAL
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.TEXT,
    marginBottom: 5
  },
  flex1: {
    flex: 1
  },
  avatar: {
    alignSelf: "center",
    height: LAYOUT.AVATAR,
    width: LAYOUT.AVATAR,
    borderWidth: 1,
    borderRadius: LAYOUT.AVATAR / 2,
    borderColor: COLORS.BORDER
  },
  containerPrimary: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY
  },
  container: {
    flex: 1,
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL
  },
  containerWhite: {
    flex: 1,
    backgroundColor:COLORS.WHITE
  },
  fullContainer: {
    flex: 1
  },
  welcomeBackground: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer:{
    height:50,
  },
  containerCenter:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authBackground: {
    backgroundColor: COLORS.BLANK,
    position: "absolute",
    width: LAYOUT.VIEW_PORT_WIDTH,
    height: LAYOUT.VIEW_PORT_HEIGHT,
    resizeMode: "cover",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  card: {
    borderRadius: LAYOUT.CARD_RADIUS,
    backgroundColor: COLORS.WHITE,
    shadowColor: "#CFCCDC",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 0.45,
    elevation: 10,
    marginBottom: 30
  },
  cardBackground: {
    position: "absolute",
    height: LAYOUT.CARD_HEADER,
    width: "120%",
    resizeMode: "cover",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  cardBackgroundGrid: {
    position: "absolute",
    width: "120%",
    height: 200,
    resizeMode: "cover"
  },
  h1: {
    fontSize: 24,
    fontWeight: "700"
  },
  h5: {
    fontSize: 16,
    fontWeight: "500"
  },
  modalContent: {
    backgroundColor: "white",
    paddingBottom: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalButton:{
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal:LAYOUT.BODY_HORIZONTAL_ACTION,
    paddingVertical:LAYOUT.PADDING,
  },
  divider:{
    borderTopColor:COLORS.DIVIDER,
    borderTopWidth: 1 
  },
  modalButtonIcon:{
    fontSize:24,
    color: COLORS.ICON_COLOR,
    marginRight: 24,
  },
  modalButtonText:{
    flex:1,
    fontSize: 16,
    color: COLORS.TEXT
  }

});

export const date = {
  dateInput: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
    alignItems: "flex-start"
  },
  dateText: {
    fontSize: 16,
    color: COLORS.TEXT,
    fontWeight:'600',
    padding: 0,
    margin: 0
  },
  dateTouchBody: {
    padding: 0,
    margin: 0,
    height: 20
  },
  btnTextConfirm: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: "700",
    height: 24
  },
  btnTextCancel: {
    color: COLORS.TEXT,
    fontSize: 18,
    height: 24,
    fontWeight: "700",
  },
  placeholderText: {
    fontSize: 16
  },
  
};
