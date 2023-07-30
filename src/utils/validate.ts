import { FormData } from '../types/formData';
import { isObjectKey } from './isObjectKey';

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

export type ValidationData = Record<string, string[]>;

type ValidationMessages = {
  login: {
    min: string;
    max: string;
    notOnlyDigits: string;
    noSpaces: string;
    allowedChars: string;
  };
  password: {
    min: string;
    max: string;
    capitalLetter: string;
    evenOneDigit: string;
  };
  email: {
    isEmail: string;
  };
  name: {
    noDigits: string;
    latinOrCyrillic: string;
    firstLetterCapital: string;
    noSpaces: string;
  };
  phone: {
    max: string;
    min: string;
    firstCharMayBePlus: string;
  };
};

const validationMessages: ValidationMessages = {
  login: {
    min: 'Логин должен быть не менее 3 сиимволов',
    max: 'Логин должен быть не более 30 символов',
    notOnlyDigits: 'Логин не может состоять только из цифр',
    noSpaces: 'В логине не допустимы пробелы',
    allowedChars:
      'Логин должен состоять только из символов латинского алфавита',
  },
  password: {
    min: 'Пароль должен быть не менее 8 символов',
    max: 'Пароль должен быть не более 40 символов',
    capitalLetter: 'Пароль должен содержать хотябы одну заглавную букву',
    evenOneDigit: 'Пароль должен содержать хотябы одну цифру',
  },
  email: {
    isEmail: 'Недопустимый формат электронной почты',
  },
  name: {
    noDigits: 'Имя не может содержать цифры',
    latinOrCyrillic:
      'Имя может содержать только символы русского или латиского алфавита',
    firstLetterCapital: 'Первая буква имени должна быть заглавной',
    noSpaces: 'В имени недопустимы пробелы',
  },
  phone: {
    min: 'Минимальное количество символов в телефонном номере - 8',
    max: 'Максимально количество символов в телефонном номере - 15',
    firstCharMayBePlus: '',
  },
};

const validationRules = {
  login: {
    min: min3Chars,
    max: max30Chars,
    notOnlyDigits: notOnlyDigits,
    noSpaces: noSpaces,
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

export const validate = (data: FormData): ValidationData => {
  const validationErrors: Record<string, Array<string>> = {};

  const makeErrorsArray = (name: string) => {
    if (!validationErrors[name]) {
      validationErrors[name] = [];
    }
  };

  if (data.login) {
    const rules = validationRules.login;
    for (const [key, rule] of Object.entries(rules)) {
      if (!isObjectKey(key, rules)) {
        return validationErrors;
      }
      if (!rule.test(data.login)) {
        makeErrorsArray('login');
        validationErrors.login.push(validationMessages.login[key]);
      }
    }
  } else if (data.login?.length === 0) {
    makeErrorsArray('login');
    validationErrors.login.push('Логин не может быть пустым');
  }

  if (data.password) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!isObjectKey(key, rules)) {
        return validationErrors;
      }
      if (!rule.test(data.password)) {
        makeErrorsArray('password');
        validationErrors.password.push(validationMessages.password[key]);
      }
    }
  } else if (data.password?.length === 0) {
    makeErrorsArray('password');
    validationErrors.password.push('Поле пароль не может быть пустым');
  }

  if (data.oldPassword) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!isObjectKey(key, rules)) {
        return validationErrors;
      }
      if (!rule.test(data.oldPassword)) {
        makeErrorsArray('oldPassword');
        validationErrors.oldPassword.push(validationMessages.password[key]);
      }
    }
  } else if (data.oldPassword?.length === 0) {
    makeErrorsArray('oldPassword');
    validationErrors.oldPassword.push('Пароль не может быть пустым');
  }

  if (data.newPassword) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.newPassword)) {
        if (!isObjectKey(key, rules)) {
          return validationErrors;
        }
        makeErrorsArray('newPassword');
        validationErrors.newPassword.push(validationMessages.password[key]);
      }
    }
  } else if (data.newPassword?.length === 0) {
    makeErrorsArray('newPassword');
    validationErrors.newPassword.push('Пароль не может быть пустым');
  }

  if (data.newPasswordRepeat) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.newPasswordRepeat)) {
        if (!isObjectKey(key, rules)) {
          return validationErrors;
        }
        makeErrorsArray('newPasswordRepeat');
        validationErrors.newPasswordRepeat.push(
          validationMessages.password[key],
        );
      }
    }
  } else if (data.newPasswordRepeat?.length === 0) {
    makeErrorsArray('newPasswordRepeat');
    validationErrors.newPasswordRepeat.push('Поле пароль не может быть пустым');
  }

  if (data.passwordRepeat) {
    const rules = validationRules.password;
    for (const [key, rule] of Object.entries(rules)) {
      if (!isObjectKey(key, rules)) {
        return validationErrors;
      }
      if (!rule.test(data.passwordRepeat)) {
        makeErrorsArray('passwordRepeat');
        validationErrors.passwordRepeat.push(validationMessages.password[key]);
      }
    }
  } else if (data.passwordRepeat?.length === 0) {
    makeErrorsArray('passwordRepeat');
    validationErrors.passwordRepeat.push('Пароль не может быть пустым');
  }

  if (data.email) {
    const rules = validationRules.email;
    for (const [key, rule] of Object.entries(rules)) {
      if (!isObjectKey(key, rules)) {
        return validationErrors;
      }
      if (!rule.test(data.email)) {
        makeErrorsArray('email');
        validationErrors.email.push(validationMessages.email[key]);
      }
    }
  }

  if (data.first_name) {
    const rules = validationRules.name;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.first_name)) {
        if (!isObjectKey(key, rules)) {
          return validationErrors;
        }
        makeErrorsArray('first_name');
        validationErrors.first_name.push(validationMessages.name[key]);
      }
    }
  }

  if (data.second_name) {
    const rules = validationRules.name;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.second_name)) {
        if (!isObjectKey(key, rules)) {
          return validationErrors;
        }
        makeErrorsArray('second_name');
        validationErrors.second_name.push(validationMessages.name[key]);
      }
    }
  }

  if (data.phone) {
    const rules = validationRules.phone;
    for (const [key, rule] of Object.entries(rules)) {
      if (!rule.test(data.phone)) {
        if (!isObjectKey(key, rules)) {
          return validationErrors;
        }
        makeErrorsArray('phone');
        validationErrors.phone.push(validationMessages.phone[key]);
      }
    }
  }

  if (data.message?.length === 0) {
    makeErrorsArray('message');
    validationErrors.message.push(`Сообщение не может быть пустым`);
  }

  if (
    data.password &&
    data.passwordRepeat &&
    data.password !== data.passwordRepeat
  ) {
    makeErrorsArray('password');
    makeErrorsArray('passwordRepeat');
    validationErrors.password.push('Пароли не совпадают');
    validationErrors.passwordRepeat.push('Пароли не совпадают');
  }

  if (
    data.newPassword &&
    data.newPasswordRepeat &&
    data.newPassword !== data.newPasswordRepeat
  ) {
    makeErrorsArray('newPassword');
    makeErrorsArray('newPasswordRepeat');
    validationErrors.newPassword.push('Пароли не совпадают');
    validationErrors.newPasswordRepeat.push('Пароли не совпадают');
  }

  return validationErrors;
};
