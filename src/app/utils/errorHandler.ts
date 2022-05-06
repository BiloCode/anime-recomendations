type onCatcher = () => any;
type onError = (error: Error) => any;

const errorHandler = (onCatcher: onCatcher, onError?: onError) => {
  try {
    return onCatcher();
  } catch (err) {
    return onError ? onError(err as Error) : null;
  }
};

export default errorHandler;
