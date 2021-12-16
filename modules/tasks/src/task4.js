"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateDigitToStr = exports.checkDate = exports.timeSecondsToStr = void 0;
/// Дано seconds -- время в секундах, прошедшее с начала дня.
/// Вернуть текущее время в виде строки в формате "ЧЧ:ММ:СС".
function timeSecondsToStr(digital) {
    throw "Not implement.";
}
exports.timeSecondsToStr = timeSecondsToStr;
/// На вход функции передается дата формата 15.07.2016.
/// Используя Regex проверить, дата соответствует формату или нет.
/// Вохвратить true если соответствует.
function checkDate(digital) {
    throw "Not implement.";
}
exports.checkDate = checkDate;
/// Дата представлена строкой вида "15.07.2016".
/// Перевести её в строковый формат вида "15 июля 2016".
/// При неверном формате входной строки вернуть пустую строку
/// 
/// Обратите внимание: некорректная с точки зрения календаря дата (например, 30 февраля 2009) считается неверными
/// входными данными.
function dateDigitToStr(digital) {
    throw "Not implement.";
}
exports.dateDigitToStr = dateDigitToStr;
