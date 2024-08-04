import { forwardRef } from "react";
import PropTypes from "prop-types";
function Child(props, ref) {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        style={{ border: `2px solid ${props.color}` }}
        {...props}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
}
Child.propTypes = {
  color: PropTypes.string.isRequired, // color should be a string and is required
  setName: PropTypes.func.isRequired, // setName should be a function and is required
};
Child.displayName = "Child";
export default forwardRef(Child);
