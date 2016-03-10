import delay from '../../helpers/delay';

export default function commandMiddleware () {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const { commandSteps, ...rest } = action;
            if(!commandSteps) {
                return next(action);
            }
            
            const [BEGIN, DO, END] = commandSteps;
            
            next({...rest, type: BEGIN});
            return  delay().then(() => {
                next({...rest, type: DO});
                return delay();
            }).then(() => {
                return next({...rest, type: END});
            });
        };
    };
}