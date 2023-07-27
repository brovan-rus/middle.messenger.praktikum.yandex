import { FormData } from '../types/formData';

const notOnlyDigits = /(?!^\d+$)^.+$/;
const min3Chars = /^.{3,}$/;
const min8Chars = /^.{8,}$/;
const min10Chars = /^.{10,}$/;
const max15Chars = /^.{0,15}$/;
const max30Chars = /^.{0,30}$/;
const max40Chars = /^.{0,30}$/;
const noSpaces = /^\S*$/;
const allowedLatinChars = /^[\w\-]*$/;
const capitalLetter = /[A-ZА-Я-]/;
const evenOneDigit = /\d/;
const noDigits = /\D$/;
const latinOrCyrillic = /[\wа-яё]*$/;
const firstLetterCapital = /[A-ZЁА-Я]\S+/;
const isEmail = /^\w+@[A-Z_a-z]+?\.[A-Za-z]{2,3}$/;
const firstCharMayBePlus = /[\d+]$/;

const validationRules = {
  login: {
    min: min3Chars,
    max: max30Chars,
    notOnlyDigits: notOnlyDigits,
    no_spaces: noSpaces,
    allowedChars: allowedLatinChars,
  },
  password: {
    min: min8Chars,
    max: max40Chars,
    capitalLetter,
    evenOneDigit,
  },
  email: {
    isEmail,
  },
  name: {
    noDigits,
    latinOrCyrillic,
    firstLetterCapital,
    noSpaces,
  },
  phone: {
    min: min10Chars,
    max: max15Chars,
    firstCharMayBePlus,
  },
};

export const validate = (data: FormData) => {
  const validationErrors: Record<string, Array<string>> = {};

  const makeErrorsArray = (name: string) => {
    if (!validationErrors[name]) {
      validationErrors[name] = [];
    }
  };

  if (data.login) {
    const rules = validationRules.login;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.login)) {
        makeErrorsArray('login');
        validationErrors.login.push(`login ${key} rule validation error`);
      }
    }
  } else if (data.login?.length === 0) {
    makeErrorsArray('login');
    validationErrors.login.push('empty login validation error');
  }

  if (data.password) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.password)) {
        makeErrorsArray('password');
        validationErrors.password.push(`password ${key} rule validation error`);
      }
    }
  } else if (data.password?.length === 0) {
    makeErrorsArray('password');
    validationErrors.password.push('empty password validation error');
  }

  if (data.oldPassword) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.oldPassword)) {
        makeErrorsArray('oldPassword');
        validationErrors.oldPassword.push(
          `oldPassword ${key} rule validation error`,
        );
      }
    }
  } else if (data.oldPassword?.length === 0) {
    makeErrorsArray('oldPassword');
    validationErrors.oldPassword.push('empty oldPassword validation error');
  }

  if (data.newPassword) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.newPassword)) {
        makeErrorsArray('newPassword');
        validationErrors.newPassword.push(
          `newPassword ${key} rule validation error`,
        );
      }
    }
  } else if (data.newPassword?.length === 0) {
    makeErrorsArray('newPassword');
    validationErrors.newPassword.push('empty newPassword validation error');
  }

  if (data.newPasswordRepeat) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.newPasswordRepeat)) {
        makeErrorsArray('newPasswordRepeat');
        validationErrors.newPasswordRepeat.push(
          `newPasswordRepeat ${key} rule validation error`,
        );
      }
    }
  } else if (data.newPasswordRepeat?.length === 0) {
    makeErrorsArray('newPasswordRepeat');
    validationErrors.newPasswordRepeat.push(
      'empty passwordRepeat validation error',
    );
  }

  if (data.passwordRepeat) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.password)) {
        makeErrorsArray('passwordRepeat');
        validationErrors.passwordRepeat.push(
          `passwordRepeat ${key} rule validation error`,
        );
      }
    }
  } else if (data.passwordRepeat?.length === 0) {
    makeErrorsArray('passwordRepeat');
    validationErrors.passwordRepeat.push(
      'empty passwordRepeat validation error',
    );
  }

  if (data.email) {
    const rules = validationRules.email;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.email)) {
        makeErrorsArray('email');
        validationErrors.email.push(`email ${key} rule validation error`);
      }
    }
  }

  if (data.first_name) {
    const rules = validationRules.name;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.first_name)) {
        makeErrorsArray('first_name');
        validationErrors.first_name.push(
          `first_name ${key} rule validation error`,
        );
      }
    }
  }

  if (data.second_name) {
    const rules = validationRules.name;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.second_name)) {
        makeErrorsArray('second_name');
        validationErrors.second_name.push(
          `second_name ${key} rule validation error`,
        );
      }
    }
  }

  if (data.phone) {
    const rules = validationRules.phone;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.phone)) {
        makeErrorsArray('phone');
        validationErrors.phone.push(`phone ${key} rule validation error`);
      }
    }
  }

  if (data.message?.length === 0) {
    makeErrorsArray('message');
    validationErrors.message.push(`message is empty validation error`);
  }

  if (Object.keys(validationErrors).length > 0) {
    console.log(validationErrors);
  }
};
