let peakTime = (firstTimeIn, firstTimeOut) => {
  return (v) =>
    (v && parseFloat(v) > firstTimeOut) ||
    `${firstTimeIn} must be less than or equal to ${firstTimeOut}`;
};

export default {
  peakTime,
};
