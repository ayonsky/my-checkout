import React, { useEffect, useState } from "react";
import { Switch } from "@material-ui/core";

function CKTSwitch(props) {
  const { onChange, ...rest } = props;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    onChange && onChange(toggle);
  }, [toggle]);

  const _handleToggle = (event) => {
    setToggle(event.target.checked);
  };
  return (
    <Switch
      checked={toggle}
      onChange={_handleToggle}
      value="toggleFavorite"
      {...rest}
    />
  );
}

export default CKTSwitch;
