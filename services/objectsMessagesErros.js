const WRONG_INPUT_FORMAT_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: 'Wrong input format',
  },
  status: 422,
};

const WRONG_NAME_LENGTH_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
  status: 422,
};

const NAME_ALREADY_EXISTS_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
  status: 422,
};

const WRONG_QUANTITY_VALUE_SIZE_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
  status: 422,
};

const WRONG_QUANTITY_INPUT_TYPE_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
  status: 422,
};

const WRONG_ID_FORMAT_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
  status: 422,
};

module.exports = {
  WRONG_INPUT_FORMAT_MESSAGE,
  WRONG_NAME_LENGTH_MESSAGE,
  NAME_ALREADY_EXISTS_MESSAGE,
  WRONG_QUANTITY_VALUE_SIZE_MESSAGE,
  WRONG_QUANTITY_INPUT_TYPE_MESSAGE,
  WRONG_ID_FORMAT_MESSAGE,
};
