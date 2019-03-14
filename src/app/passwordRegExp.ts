export const lengthRegex: RegExp = /^[A-Za-zd@$!%*?&]{8,}$/;
export const upperLetterRegex: RegExp = /(?=.*[A-Z])[A-Za-zd@$!%*?&]/;
export const lowerLetterRegex: RegExp = /(?=.*[a-z])[A-Za-zd@$!%*?&]/;
export const digitRegex: RegExp = /(?=.*\d.*)[A-Za-zd@$!%*?&]/;
export const specialSymRegex: RegExp = /(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]/;
export const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;