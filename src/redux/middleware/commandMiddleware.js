import delay from '../../helpers/delay';

export default function commandMiddleware() {
  return ({ dispatch, getState }) =>
    next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { types, ...rest } = action;
      if (!types) {
        return next(action);
      }

      const [BEGIN, DO, END] = types;

      next({ ...rest, type: BEGIN });
      return delay().then(() => {
        next({ ...rest, type: DO });
        return delay();
      }).then(() =>
        next({ ...rest, type: END })
      );
    };
}
