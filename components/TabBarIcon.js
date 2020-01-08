import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR } from "../constants/Color";
import { INACTIVE_COLOR } from "../constants/Color";

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    size={24}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

TabBarIcon.PropTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
