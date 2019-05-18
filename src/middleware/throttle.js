
const throttled = {};

const throttle = () => next => action => {
  const time = action.meta && action.meta.throttle;

  if (!time) {
    return next(action);
  }

  // Just ignore the action if its already throttled
  if (throttled[action.type]) {
    return;
  }

  console.log('Throttling actions')
  throttled[action.type] = true;

  setTimeout(
    () => throttled[action.type] = false,
    time
  );

  return next(action);
};

export default throttle;
