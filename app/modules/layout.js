import { Dimensions } from "react-native";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const layout = {
  BODY_HORIZONTAL: 15,
  BODY_HORIZONTAL_ACTION:30,
  PADDING: 15,
  RADIUS: 6,
  RADIUS_BUTTON: 50,
  VIEW_PORT_WIDTH: viewportWidth,
  VIEW_PORT_HEIGHT: viewportHeight,
  PADDING_BAR:45,
  AVATAR:50,
  HEADER_ICON_BUTTON:40,
  CARD_HEADER:120,
  AVATAR_LIST:38,
  AVATAR_GRID:65,
  START_LINE_GRADIENT:{x: 0.25, y: 0},
  END_LINE_GRADIENT:{x: 0.5, y: 0.5},
  START_LINE_GRADIENT_V:{x: 0, y: 0.1},
  END_LINE_GRADIENT_V:{x: 1, y: .9},
  START_LINE_GRADIENT_V2:{x: 1, y: 0.5},
  END_LINE_GRADIENT_V2:{x: 0, y: 0.25},
  CARD:350,
  CARD_RADIUS: 12,
  CARD_PENDING:20
};

module.exports = layout;
