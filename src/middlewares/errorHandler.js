import createHttpError, { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  err =
    err.name === 'CastError' ? createHttpError(404, 'Contact not found') : err;

  err =
    err.name === 'ValidationError'
      ? createHttpError(400, "Contact couldn't create!")
      : err;
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err,
  });
};
