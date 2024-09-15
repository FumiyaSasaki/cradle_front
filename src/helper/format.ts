export const formatDate = (date: Date) => date.toLocaleDateString('ja', { year: 'numeric', month: 'short', day: 'numeric' });
export const emailPattern: string = '^[a-z0-9._%+\\-]+@[a-z0-9.\\-]+[.]{1}[a-z]{2,}$';
export const phonePattern: string = '(^([0-9]{10})$)|(^([0-9]{11})$)';
export const excludeHalfKanaSymbolsOmitHyphen: string = '(^[^\uFF61-\uFF9F!#$%&\\(\\)*,.+\'"\\/:-@¥\\[-`\\{-~]+$)';
export const excludeHalfKanaSymbols: string = '(^[^\uFF61-\uFF9F!-\\/:-@¥\\[-`\\{-~]+$)';