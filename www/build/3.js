webpackJsonp([3],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdPopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WoPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SdPopupPage = /** @class */ (function () {
    function SdPopupPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionsRange = {};
        this.new_date = new Date(__WEBPACK_IMPORTED_MODULE_2_moment__(new Date(), "DD-MM-YYYY").add(1, 'days').toString());
        var dateFormatType = this.navParams.data;
        if ('default' === dateFormatType.dataType) {
            this.optionsRange = {
                from: new Date(),
                color: 'secondary',
            };
        }
        else if ('complaints' === dateFormatType.dataType) {
            this.optionsRange = {
                // defaultScrollTo: new Date	,
                pickMode: 'single',
                from: new Date('1/1/2019'),
                to: new Date('12/12/2030'),
                // disableWeeks: [0, 6],
                color: 'primary',
                daysConfig: [
                    {
                        date: new Date('6/15/2018'),
                        subTitle: 'Hari Raya',
                        disable: true
                    },
                    {
                        date: new Date('6/24/2018'),
                        subTitle: 'Public Holiday',
                        disable: true
                    }
                ]
            };
        }
        else if ('test_form' === dateFormatType.dataType) {
            this.optionsRange = {
                pickMode: 'single',
                // disableWeeks: [0, 6],
                from: new Date('1/1/2019'),
                to: new Date('12/12/2025'),
                color: 'primary'
            };
        }
        else if ('DCD' === dateFormatType.dataType) {
            var mintoday = new Date();
            mintoday.setDate(mintoday.getDate());
            var minmonth = Number(mintoday.getMonth()) + 1;
            var min = minmonth + '/' + mintoday.getDate() + '/' + mintoday.getFullYear();
            var maxtoday = new Date();
            maxtoday.setDate(maxtoday.getDate() + 30);
            var maxmonth = Number(maxtoday.getMonth()) + 1;
            var max = maxmonth + '/' + maxtoday.getDate() + '/' + maxtoday.getFullYear();
            this.optionsRange = {
                pickMode: 'single',
                from: new Date(min),
                // to: new Date(max), if remove this line should be ok for user to select
                disableWeeks: [0, 6],
                color: 'primary',
                daysConfig: []
            };
        }
    }
    SdPopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WoPopupPage');
    };
    SdPopupPage.prototype.backup = function () {
        var data = this.navParams.get('data');
        //save(data);
        this.viewCtrl.dismiss();
    };
    SdPopupPage.prototype.onChange = function ($event) {
        debugger;
        //console.log($event.date);
        var responseDate = __WEBPACK_IMPORTED_MODULE_2_moment__($event).format('DD/MM/YYYY');
        console.log('response date  : ' + responseDate);
        this.close(responseDate);
    };
    SdPopupPage.prototype.close = function (typeVal) {
        console.log('close button clicks..');
        var parent = this.navParams.get('parentWoValue');
        var popType = this.navParams.get('popType');
        parent.showConfirm(typeVal, popType);
        this.viewCtrl.dismiss();
    };
    SdPopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wo-popup',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/sd-popup/sd-popup.html"*/'<ion-calendar [(ngModel)]="datevalue" (onChange)="onChange($event)" [options]="optionsRange" [type]="type" [format]="YYYY-MM-DD">\n</ion-calendar>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/sd-popup/sd-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SdPopupPage);
    return SdPopupPage;
}());

//# sourceMappingURL=sd-popup.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdPopupPageModule", function() { return SdPopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sd_popup__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SdPopupPageModule = /** @class */ (function () {
    function SdPopupPageModule() {
    }
    SdPopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sd_popup__["a" /* SdPopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sd_popup__["a" /* SdPopupPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"],
            ],
        })
    ], SdPopupPageModule);
    return SdPopupPageModule;
}());

//# sourceMappingURL=sd-popup.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = {
    DATE_FORMAT: 'YYYY-MM-DD',
    COLOR: 'primary',
    WEEKS_FORMAT: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    MONTH_FORMAT: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
};
exports.pickModes = {
    SINGLE: 'single',
    RANGE: 'range',
    MULTI: 'multi'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.safeOpt = function (calendarOptions) {
        var _disableWeeks = [];
        var _daysConfig = [];
        var _a = calendarOptions || {}, _b = _a.from, from = _b === void 0 ? new Date() : _b, _c = _a.to, to = _c === void 0 ? 0 : _c, _d = _a.weekStart, weekStart = _d === void 0 ? 0 : _d, _e = _a.step, step = _e === void 0 ? 3 : _e, _f = _a.id, id = _f === void 0 ? '' : _f, _g = _a.cssClass, cssClass = _g === void 0 ? '' : _g, _h = _a.closeLabel, closeLabel = _h === void 0 ? 'CANCEL' : _h, _j = _a.doneLabel, doneLabel = _j === void 0 ? 'DONE' : _j, _k = _a.monthFormat, monthFormat = _k === void 0 ? 'MMM YYYY' : _k, _l = _a.title, title = _l === void 0 ? 'CALENDAR' : _l, _m = _a.defaultTitle, defaultTitle = _m === void 0 ? '' : _m, _o = _a.defaultSubtitle, defaultSubtitle = _o === void 0 ? '' : _o, _p = _a.autoDone, autoDone = _p === void 0 ? false : _p, _q = _a.canBackwardsSelected, canBackwardsSelected = _q === void 0 ? false : _q, _r = _a.closeIcon, closeIcon = _r === void 0 ? false : _r, _s = _a.doneIcon, doneIcon = _s === void 0 ? false : _s, _t = _a.showYearPicker, showYearPicker = _t === void 0 ? false : _t, _u = _a.isSaveHistory, isSaveHistory = _u === void 0 ? false : _u, _v = _a.pickMode, pickMode = _v === void 0 ? config_1.pickModes.SINGLE : _v, _w = _a.color, color = _w === void 0 ? config_1.defaults.COLOR : _w, _x = _a.weekdays, weekdays = _x === void 0 ? config_1.defaults.WEEKS_FORMAT : _x, _y = _a.daysConfig, daysConfig = _y === void 0 ? _daysConfig : _y, _z = _a.disableWeeks, disableWeeks = _z === void 0 ? _disableWeeks : _z, _0 = _a.showAdjacentMonthDay, showAdjacentMonthDay = _0 === void 0 ? true : _0;
        return {
            id: id,
            from: from,
            to: to,
            pickMode: pickMode,
            autoDone: autoDone,
            color: color,
            cssClass: cssClass,
            weekStart: weekStart,
            closeLabel: closeLabel,
            closeIcon: closeIcon,
            doneLabel: doneLabel,
            doneIcon: doneIcon,
            canBackwardsSelected: canBackwardsSelected,
            isSaveHistory: isSaveHistory,
            disableWeeks: disableWeeks,
            monthFormat: monthFormat,
            title: title,
            weekdays: weekdays,
            daysConfig: daysConfig,
            step: step,
            showYearPicker: showYearPicker,
            defaultTitle: defaultTitle,
            defaultSubtitle: defaultSubtitle,
            defaultScrollTo: calendarOptions.defaultScrollTo || from,
            defaultDate: calendarOptions.defaultDate || null,
            defaultDates: calendarOptions.defaultDates || null,
            defaultDateRange: calendarOptions.defaultDateRange || null,
            showAdjacentMonthDay: showAdjacentMonthDay
        };
    };
    CalendarService.prototype.createOriginalCalendar = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth();
        var firstWeek = new Date(year, month, 1).getDay();
        var howManyDays = moment(time).daysInMonth();
        return {
            year: year,
            month: month,
            firstWeek: firstWeek,
            howManyDays: howManyDays,
            time: new Date(year, month, 1).getTime(),
            date: new Date(time)
        };
    };
    CalendarService.prototype.findDayConfig = function (day, opt) {
        if (opt.daysConfig.length <= 0)
            return null;
        return opt.daysConfig.find(function (n) { return day.isSame(n.date, 'day'); });
    };
    CalendarService.prototype.createCalendarDay = function (time, opt, month) {
        var _time = moment(time);
        var date = moment(time);
        var isToday = moment().isSame(_time, 'days');
        var dayConfig = this.findDayConfig(_time, opt);
        var _rangeBeg = moment(opt.from).valueOf();
        var _rangeEnd = moment(opt.to).valueOf();
        var isBetween = true;
        var disableWee = opt.disableWeeks.indexOf(_time.toDate().getDay()) !== -1;
        if (_rangeBeg > 0 && _rangeEnd > 0) {
            if (!opt.canBackwardsSelected) {
                isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
            }
            else {
                isBetween = moment(_time).isBefore(_rangeBeg) ? false : isBetween;
            }
        }
        else if (_rangeBeg > 0 && _rangeEnd === 0) {
            if (!opt.canBackwardsSelected) {
                var _addTime = _time.add(1, 'day');
                isBetween = !_addTime.isAfter(_rangeBeg);
            }
            else {
                isBetween = false;
            }
        }
        var _disable = false;
        if (dayConfig && util_1.isBoolean(dayConfig.disable)) {
            _disable = dayConfig.disable;
        }
        else {
            _disable = disableWee || isBetween;
        }
        var title = new Date(time).getDate().toString();
        if (dayConfig && dayConfig.title) {
            title = dayConfig.title;
        }
        else if (opt.defaultTitle) {
            title = opt.defaultTitle;
        }
        var subTitle = '';
        if (dayConfig && dayConfig.subTitle) {
            subTitle = dayConfig.subTitle;
        }
        else if (opt.defaultSubtitle) {
            subTitle = opt.defaultSubtitle;
        }
        return {
            time: time,
            isToday: isToday,
            title: title,
            subTitle: subTitle,
            selected: false,
            isLastMonth: date.month() < month,
            isNextMonth: date.month() > month,
            marked: dayConfig ? dayConfig.marked || false : false,
            cssClass: dayConfig ? dayConfig.cssClass || '' : '',
            disable: _disable,
            isFirst: date.date() === 1,
            isLast: date.date() === date.daysInMonth()
        };
    };
    CalendarService.prototype.createCalendarMonth = function (original, opt) {
        var days = new Array(6).fill(null);
        var len = original.howManyDays;
        for (var i = original.firstWeek; i < len + original.firstWeek; i++) {
            var itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
            days[i] = this.createCalendarDay(itemTime, opt);
        }
        var weekStart = opt.weekStart;
        if (weekStart === 1) {
            if (days[0] === null) {
                days.shift();
            }
            else {
                days.unshift.apply(days, new Array(6).fill(null));
            }
        }
        if (opt.showAdjacentMonthDay) {
            var _booleanMap = days.map(function (e) { return !!e; });
            var thisMonth = moment(original.time).month();
            var startOffsetIndex = _booleanMap.indexOf(true) - 1;
            var endOffsetIndex = _booleanMap.lastIndexOf(true) + 1;
            for (startOffsetIndex; startOffsetIndex >= 0; startOffsetIndex--) {
                var dayBefore = moment(days[startOffsetIndex + 1].time).clone().subtract(1, 'd');
                days[startOffsetIndex] = this.createCalendarDay(dayBefore.valueOf(), opt, thisMonth);
            }
            if (!(_booleanMap.length % 7 === 0 && _booleanMap[_booleanMap.length - 1])) {
                for (endOffsetIndex; endOffsetIndex < days.length + (endOffsetIndex % 7); endOffsetIndex++) {
                    var dayAfter = moment(days[endOffsetIndex - 1].time).clone().add(1, 'd');
                    days[endOffsetIndex] = this.createCalendarDay(dayAfter.valueOf(), opt, thisMonth);
                }
            }
        }
        return {
            days: days,
            original: original
        };
    };
    CalendarService.prototype.createMonthsByPeriod = function (startTime, monthsNum, opt) {
        var _array = [];
        var _start = new Date(startTime);
        var _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();
        for (var i = 0; i < monthsNum; i++) {
            var time = moment(_startMonth).add(i, 'M').valueOf();
            var originalCalendar = this.createOriginalCalendar(time);
            _array.push(this.createCalendarMonth(originalCalendar, opt));
        }
        return _array;
    };
    CalendarService.prototype.wrapResult = function (original, pickMode) {
        var _this = this;
        var result;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                result = this.multiFormat(original[0].time);
                break;
            case config_1.pickModes.RANGE:
                result = {
                    from: this.multiFormat(original[0].time),
                    to: this.multiFormat(original[1].time)
                };
                break;
            case config_1.pickModes.MULTI:
                result = original.map(function (e) { return _this.multiFormat(e.time); });
                break;
            default:
                result = original;
        }
        return result;
    };
    CalendarService.prototype.multiFormat = function (time) {
        var _moment = moment(time);
        return {
            time: _moment.valueOf(),
            unix: _moment.unix(),
            dateObj: _moment.toDate(),
            string: _moment.format(config_1.defaults.DATE_FORMAT),
            years: _moment.year(),
            months: _moment.month() + 1,
            date: _moment.date()
        };
    };
    CalendarService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CalendarService.ctorParameters = function () { return []; };
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CalendarMonth = /** @class */ (function () {
    function CalendarMonth() {
    }
    return CalendarMonth;
}());
exports.CalendarMonth = CalendarMonth;
var CalendarResult = /** @class */ (function () {
    function CalendarResult() {
    }
    return CalendarResult;
}());
exports.CalendarResult = CalendarResult;
var CalendarComponentMonthChange = /** @class */ (function () {
    function CalendarComponentMonthChange() {
    }
    return CalendarComponentMonthChange;
}());
exports.CalendarComponentMonthChange = CalendarComponentMonthChange;
//# sourceMappingURL=calendar.model.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(11);
var calendar_service_1 = __webpack_require__(946);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, viewCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.datesTemp = [null, null];
        this._s = true;
    }
    CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
    };
    CalendarModal.prototype.ionViewDidLoad = function () {
        this.findCssClass();
        this.scrollToDefaultDate();
    };
    CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.params.get('options'));
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < 1) {
            this.step = 1;
        }
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        var _a = this._d, pickMode = _a.pickMode, defaultDate = _a.defaultDate, defaultDateRange = _a.defaultDateRange, defaultDates = _a.defaultDates;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
                }
                break;
            case config_1.pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case config_1.pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this._d.cssClass;
        if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
                if (_class.trim() !== '')
                    _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        var _a = this._d, pickMode = _a.pickMode, autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
    };
    CalendarModal.prototype.onCancel = function () {
        this.viewCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.viewCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        var pickMode = this._d.pickMode;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case config_1.pickModes.RANGE:
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case config_1.pickModes.MULTI:
                return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
            default:
                return false;
        }
    };
    CalendarModal.prototype.nextMonth = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = moment(final.original.time).add(1, 'M').valueOf();
        var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            infiniteScroll.enable(false);
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, 1, this._d));
        infiniteScroll.complete();
        var _a;
    };
    CalendarModal.prototype.backwardsMonth = function () {
        var first = this.calendarMonths[0];
        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }
        var firstTime = moment(first.original.time).subtract(1, 'M').valueOf();
        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, 1, this._d));
        this.ref.detectChanges();
        var _a;
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        var _this = this;
        var defaultDateIndex = this.findInitMonthNumber(this._d.defaultScrollTo);
        var defaultDateMonth = this.monthsEle.nativeElement.children["month-" + defaultDateIndex].offsetTop;
        if (defaultDateIndex === 0 || defaultDateMonth === 0)
            return;
        setTimeout(function () {
            _this.content.scrollTo(0, defaultDateMonth, 128);
        }, 300);
    };
    CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;
        if (!this._d.canBackwardsSelected)
            return;
        if ($event.scrollTop <= 200 && this._s) {
            this._s = !1;
            var lastHeight_1 = this.content.getContentDimensions().scrollHeight;
            setTimeout(function () {
                _this.backwardsMonth();
                var nowHeight = _this.content.getContentDimensions().scrollHeight;
                _this.content.scrollTo(0, nowHeight - lastHeight_1, 0)
                    .then(function () {
                    _this._s = !0;
                });
            }, 180);
        }
    };
    CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = moment(this._d.from);
        var defaultScrollTo = moment(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return 0;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarModal.prototype.trackByIndex = function (index, moment) {
        return moment.original ? moment.original.time : index;
    };
    CalendarModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-modal',
                    template: "\n    <ion-header>\n      <ion-navbar [color]=\"_d.color\">\n\n        <ion-buttons start>\n          <button type='button' ion-button icon-only clear (click)=\"onCancel()\">\n            <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{_d.closeLabel}}</span>\n            <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-title>{{_d.title}}</ion-title>\n\n        <ion-buttons end>\n          <button type='button' ion-button icon-only *ngIf=\"!_d.autoDone\" clear [disabled]=\"!canDone()\" (click)=\"done()\">\n            <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{_d.doneLabel}}</span>\n            <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n          </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{_monthFormat(month.original.date)}}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (onChange)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarModal.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: ionic_angular_1.NavParams, },
        { type: ionic_angular_1.ViewController, },
        { type: core_1.ChangeDetectorRef, },
        { type: calendar_service_1.CalendarService, },
    ]; };
    CalendarModal.propDecorators = {
        "content": [{ type: core_1.ViewChild, args: [ionic_angular_1.Content,] },],
        "monthsEle": [{ type: core_1.ViewChild, args: ['months',] },],
    };
    return CalendarModal;
}());
exports.CalendarModal = CalendarModal;
//# sourceMappingURL=calendar.modal.js.map

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var config_1 = __webpack_require__(945);
var CalendarWeekComponent = /** @class */ (function () {
    function CalendarWeekComponent() {
        this._weekArray = config_1.defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = config_1.defaults.COLOR;
    }
    Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function (value) {
            if (value && value.length === 7) {
                this._weekArray = value.slice();
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function (value) {
            if (value === 0 || value === 1) {
                this._weekStart = value;
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
            var cacheWeekArray = this._weekArray.slice();
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = cacheWeekArray.slice();
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = this._weekArray.slice();
        }
    };
    CalendarWeekComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-week',
                    template: "\n    <ion-toolbar class=\"week-toolbar\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{w}}</li>\n      </ul>\n    </ion-toolbar>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekComponent.ctorParameters = function () { return []; };
    CalendarWeekComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "weekArray": [{ type: core_1.Input },],
        "weekStart": [{ type: core_1.Input },],
    };
    return CalendarWeekComponent;
}());
exports.CalendarWeekComponent = CalendarWeekComponent;
//# sourceMappingURL=calendar-week.component.js.map

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(25);
var calendar_model_1 = __webpack_require__(948);
var config_1 = __webpack_require__(945);
exports.MONTH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MonthComponent; }),
    multi: true
};
var MonthComponent = /** @class */ (function () {
    function MonthComponent(ref) {
        this.ref = ref;
        this.readonly = false;
        this.color = config_1.defaults.COLOR;
        this.onChange = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onSelectStart = new core_1.EventEmitter();
        this.onSelectEnd = new core_1.EventEmitter();
        this._date = [null, null];
        this._isInit = false;
    }
    Object.defineProperty(MonthComponent.prototype, "_isRange", {
        get: function () {
            return this.pickMode === config_1.pickModes.RANGE;
        },
        enumerable: true,
        configurable: true
    });
    MonthComponent.prototype.ngAfterViewInit = function () {
        this._isInit = true;
    };
    MonthComponent.prototype.writeValue = function (obj) {
        if (Array.isArray(obj)) {
            this._date = obj;
        }
    };
    MonthComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    MonthComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MonthComponent.prototype.trackByTime = function (index, item) {
        return item ? item.time : index;
    };
    MonthComponent.prototype.isEndSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[1] === null) {
            return false;
        }
        return this._date[1].time === day.time;
    };
    MonthComponent.prototype.isBetween = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit) {
            return false;
        }
        if (this._date[0] === null || this._date[1] === null) {
            return false;
        }
        var start = this._date[0].time;
        var end = this._date[1].time;
        return day.time < end && day.time > start;
    };
    MonthComponent.prototype.isStartSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[0] === null) {
            return false;
        }
        return this._date[0].time === day.time && this._date[1] !== null;
    };
    MonthComponent.prototype.isSelected = function (time) {
        if (Array.isArray(this._date)) {
            if (this.pickMode !== config_1.pickModes.MULTI) {
                if (this._date[0] !== null) {
                    return time === this._date[0].time;
                }
                if (this._date[1] !== null) {
                    return time === this._date[1].time;
                }
            }
            else {
                return this._date.findIndex(function (e) { return e !== null && e.time === time; }) !== -1;
            }
        }
        else {
            return false;
        }
    };
    MonthComponent.prototype.onSelected = function (item) {
        if (this.readonly)
            return;
        item.selected = true;
        this.onSelect.emit(item);
        if (this.pickMode === config_1.pickModes.SINGLE) {
            this._date[0] = item;
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === config_1.pickModes.RANGE) {
            if (this._date[0] === null) {
                this._date[0] = item;
                this.onSelectStart.emit(item);
            }
            else if (this._date[1] === null) {
                if (this._date[0].time < item.time) {
                    this._date[1] = item;
                    this.onSelectEnd.emit(item);
                }
                else {
                    this._date[1] = this._date[0];
                    this.onSelectEnd.emit(this._date[0]);
                    this._date[0] = item;
                    this.onSelectStart.emit(item);
                }
            }
            else {
                this._date[0] = item;
                this.onSelectStart.emit(item);
                this._date[1] = null;
            }
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === config_1.pickModes.MULTI) {
            var index = this._date.findIndex(function (e) { return e !== null && e.time === item.time; });
            if (index === -1) {
                this._date.push(item);
            }
            else {
                this._date.splice(index, 1);
            }
            this.onChange.emit(this._date.filter(function (e) { return e !== null; }));
        }
    };
    MonthComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-month',
                    providers: [exports.MONTH_VALUE_ACCESSOR],
                    template: "\n    <div [class]=\"color\">\n      <ng-template [ngIf]=\"!_isRange\" [ngIfElse]=\"rangeBox\">\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n\n      <ng-template #rangeBox>\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\"\n                 [class.startSelection]=\"isStartSelection(day)\"\n                 [class.endSelection]=\"isEndSelection(day)\"\n                 [class.is-first-wrap]=\"day?.isFirst\"\n                 [class.is-last-wrap]=\"day?.isLast\"\n                 [class.between]=\"isBetween(day)\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.is-first]=\"day.isFirst\"\n                        [class.is-last]=\"day.isLast\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    MonthComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef, },
    ]; };
    MonthComponent.propDecorators = {
        "month": [{ type: core_1.Input },],
        "pickMode": [{ type: core_1.Input },],
        "isSaveHistory": [{ type: core_1.Input },],
        "id": [{ type: core_1.Input },],
        "readonly": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onSelect": [{ type: core_1.Output },],
        "onSelectStart": [{ type: core_1.Output },],
        "onSelectEnd": [{ type: core_1.Output },],
    };
    return MonthComponent;
}());
exports.MonthComponent = MonthComponent;
//# sourceMappingURL=month.component.js.map

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_service_1 = __webpack_require__(946);
var forms_1 = __webpack_require__(25);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
exports.ION_CAL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CalendarComponent; }),
    multi: true
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = config_1.defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.onChange = new core_1.EventEmitter();
        this.monthChange = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onSelectStart = new core_1.EventEmitter();
        this.onSelectEnd = new core_1.EventEmitter();
        this._onChanged = function () {
        };
        this._onTouched = function () {
        };
    }
    Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
        get: function () {
            return this._showToggleButtons;
        },
        set: function (value) {
            this._showToggleButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
        get: function () {
            return this._showMonthPicker;
        },
        set: function (value) {
            this._showMonthPicker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            this.initOpt();
            if (this.monthOpt && this.monthOpt.original) {
                this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    };
    CalendarComponent.prototype.getViewDate = function () {
        return this._handleType(this.monthOpt.original.time);
    };
    CalendarComponent.prototype.setViewDate = function (value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    };
    CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
    };
    CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    };
    CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    };
    CalendarComponent.prototype.prevYear = function () {
        if (moment(this.monthOpt.original.time).year() === 1970)
            return;
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'year').valueOf();
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.nextYear = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'year').valueOf();
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime)
        });
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days')
            return true;
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
    };
    CalendarComponent.prototype.backMonth = function () {
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime)
        });
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days')
            return true;
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
    };
    CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = moment(this.monthOpt.original.time).month(month).valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth)
        });
        this.monthOpt = this.createMonth(newMonth);
    };
    CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
            case config_1.pickModes.SINGLE:
                var date = this._handleType($event[0].time);
                this._onChanged(date);
                this.onChange.emit(date);
                break;
            case config_1.pickModes.RANGE:
                if ($event[0] && $event[1]) {
                    var rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time)
                    };
                    this._onChanged(rangeDate);
                    this.onChange.emit(rangeDate);
                }
                break;
            case config_1.pickModes.MULTI:
                var dates = [];
                for (var i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        dates.push(this._handleType($event[i].time));
                    }
                }
                this._onChanged(dates);
                this.onChange.emit(dates);
                break;
            default:
        }
    };
    CalendarComponent.prototype.swipeEvent = function ($event) {
        var isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    };
    CalendarComponent.prototype._payloadToTimeNumber = function (value) {
        var date;
        if (this.type === 'string') {
            date = moment(value, this.format);
        }
        else {
            date = moment(value);
        }
        return date.valueOf();
    };
    CalendarComponent.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarComponent.prototype.initOpt = function () {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    };
    CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    };
    CalendarComponent.prototype._createCalendarDay = function (value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    };
    CalendarComponent.prototype._handleType = function (value) {
        var date = moment(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'moment':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
        }
        return date;
    };
    CalendarComponent.prototype.writeValue = function (obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
                }
                if (value.to) {
                    this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(function (e) {
                        return _this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [null, null];
                }
                break;
            default:
        }
    };
    CalendarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar',
                    providers: [exports.ION_CAL_VALUE_ACCESSOR],
                    template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <button type=\"button\"\n                ion-button\n                clear\n                class=\"switch-btn\"\n                (click)=\"switchView()\">\n          {{_monthFormat(monthOpt.original.time)}}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'\"></ion-icon>\n        </button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\">\n          {{_monthFormat(monthOpt.original.time)}}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <button type='button' ion-button clear class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </button>\n        <button type='button' ion-button clear class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n        </button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month class=\"component-mode\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (onChange)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (onSelect)=\"onSelect.emit($event)\"\n                          (onSelectStart)=\"onSelectStart.emit($event)\"\n                          (onSelectEnd)=\"onSelectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (onSelect)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: calendar_service_1.CalendarService, },
    ]; };
    CalendarComponent.propDecorators = {
        "format": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "readonly": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "monthChange": [{ type: core_1.Output },],
        "onSelect": [{ type: core_1.Output },],
        "onSelectStart": [{ type: core_1.Output },],
        "onSelectEnd": [{ type: core_1.Output },],
        "options": [{ type: core_1.Input },],
    };
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(11);
var calendar_modal_1 = __webpack_require__(949);
var calendar_service_1 = __webpack_require__(946);
var CalendarController = /** @class */ (function () {
    function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    /**
       * @deprecated
       * @param {CalendarModalOptions} calendarOptions
       * @param {ModalOptions} modalOptions
       * @returns {any}
       */
    CalendarController.prototype.openCalendar = /**
       * @deprecated
       * @param {CalendarModalOptions} calendarOptions
       * @param {ModalOptions} modalOptions
       * @returns {any}
       */
    function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) { modalOptions = {}; }
        var options = this.calSvc.safeOpt(calendarOptions);
        var calendarModal = this.modalCtrl.create(calendar_modal_1.CalendarModal, Object.assign({
            options: options
        }, options), modalOptions);
        calendarModal.present();
        return new Promise(function (resolve, reject) {
            calendarModal.onDidDismiss(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject('cancelled');
                }
            });
        });
    };
    CalendarController.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CalendarController.ctorParameters = function () { return [
        { type: ionic_angular_1.ModalController, },
        { type: calendar_service_1.CalendarService, },
    ]; };
    return CalendarController;
}());
exports.CalendarController = CalendarController;
//# sourceMappingURL=calendar.controller.js.map

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(948));
var calendar_modal_1 = __webpack_require__(949);
exports.CalendarModal = calendar_modal_1.CalendarModal;
var calendar_week_component_1 = __webpack_require__(953);
exports.CalendarWeekComponent = calendar_week_component_1.CalendarWeekComponent;
var month_component_1 = __webpack_require__(954);
exports.MonthComponent = month_component_1.MonthComponent;
var calendar_component_1 = __webpack_require__(955);
exports.CalendarComponent = calendar_component_1.CalendarComponent;
var calendar_module_1 = __webpack_require__(966);
exports.CalendarModule = calendar_module_1.CalendarModule;
var calendar_controller_1 = __webpack_require__(956);
exports.CalendarController = calendar_controller_1.CalendarController;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_controller_1 = __webpack_require__(956);
var ionic_angular_1 = __webpack_require__(11);
var calendar_service_1 = __webpack_require__(946);
var index_1 = __webpack_require__(967);
function calendarController(modalCtrl, calSvc) {
    return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
}
exports.calendarController = calendarController;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [ionic_angular_1.IonicModule],
                    declarations: index_1.CALENDAR_COMPONENTS,
                    exports: index_1.CALENDAR_COMPONENTS,
                    entryComponents: index_1.CALENDAR_COMPONENTS,
                    providers: [
                        calendar_service_1.CalendarService,
                        {
                            provide: calendar_controller_1.CalendarController,
                            useFactory: calendarController,
                            deps: [ionic_angular_1.ModalController, calendar_service_1.CalendarService]
                        }
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calendar_modal_1 = __webpack_require__(949);
var calendar_week_component_1 = __webpack_require__(953);
var month_component_1 = __webpack_require__(954);
var calendar_component_1 = __webpack_require__(955);
var month_picker_component_1 = __webpack_require__(968);
exports.CALENDAR_COMPONENTS = [
    calendar_modal_1.CalendarModal,
    calendar_week_component_1.CalendarWeekComponent,
    month_component_1.MonthComponent,
    calendar_component_1.CalendarComponent,
    month_picker_component_1.MonthPickerComponent
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_model_1 = __webpack_require__(948);
var config_1 = __webpack_require__(945);
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent() {
        this.color = config_1.defaults.COLOR;
        this.onSelect = new core_1.EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = config_1.defaults.MONTH_FORMAT;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function () {
            return this._monthFormat;
        },
        set: function (value) {
            if (Array.isArray(value) && value.length === 12) {
                this._monthFormat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype._onSelect = function (month) {
        this.onSelect.emit(month);
    };
    MonthPickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-month-picker',
                    template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\">{{item}}</button>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return []; };
    MonthPickerComponent.propDecorators = {
        "month": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "onSelect": [{ type: core_1.Output },],
        "monthFormat": [{ type: core_1.Input },],
    };
    return MonthPickerComponent;
}());
exports.MonthPickerComponent = MonthPickerComponent;
//# sourceMappingURL=month-picker.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map