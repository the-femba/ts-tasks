"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amountAfterThreeYears = exports.getThirdDigit = exports.trackLength = void 0;
/// Найти длину отрезка, соединяющего точки на плоскости с координатами (x1, y1) и (x2, y2).
/// Например, расстояние между (3, 0) и (0, 4) равно 5
function trackLength(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
exports.trackLength = trackLength;
/// Пользователь задает целое число, большее 100 (например, 3801).
/// Определить третью цифру справа в этом числе (в данном случае 8).
function getThirdDigit(number) {
    throw "Not implement.";
}
exports.getThirdDigit = getThirdDigit;
/// Человек положил в банк сумму в s рублей под p% годовых (проценты начисляются в конце года).
/// Сколько денег будет на счету через 3 года (с учётом сложных процентов)?
/// Например, 100 рублей под 10% годовых превратятся в 133.1 рубля
function amountAfterThreeYears(initial, percent) {
    throw "Not implement.";
}
exports.amountAfterThreeYears = amountAfterThreeYears;
