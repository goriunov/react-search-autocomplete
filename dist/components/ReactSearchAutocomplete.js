"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_RESULTS = exports.DEFAULT_INPUT_DEBOUNCE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fuse_js_1 = __importDefault(require("fuse.js"));
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var config_1 = require("../config/config");
var utils_1 = require("../utils/utils");
var Results_1 = __importDefault(require("./Results"));
var SearchInput_1 = __importDefault(require("./SearchInput"));
exports.DEFAULT_INPUT_DEBOUNCE = 200;
exports.MAX_RESULTS = 10;
function ReactSearchAutocomplete(_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.disableFuse, disableFuse = _c === void 0 ? false : _c, _d = _a.fuseOptions, fuseOptions = _d === void 0 ? config_1.defaultFuseOptions : _d, _e = _a.inputDebounce, inputDebounce = _e === void 0 ? exports.DEFAULT_INPUT_DEBOUNCE : _e, _f = _a.onSearch, onSearch = _f === void 0 ? function () { } : _f, _g = _a.onHover, onHover = _g === void 0 ? function () { } : _g, _h = _a.onSelect, onSelect = _h === void 0 ? function () { } : _h, _j = _a.onFocus, onFocus = _j === void 0 ? function () { } : _j, _k = _a.onClear, onClear = _k === void 0 ? function () { } : _k, _l = _a.showIcon, showIcon = _l === void 0 ? true : _l, _m = _a.showClear, showClear = _m === void 0 ? true : _m, _o = _a.maxResults, maxResults = _o === void 0 ? exports.MAX_RESULTS : _o, _p = _a.placeholder, placeholder = _p === void 0 ? '' : _p, _q = _a.autoFocus, autoFocus = _q === void 0 ? false : _q, _r = _a.styling, styling = _r === void 0 ? {} : _r, _s = _a.resultStringKeyName, resultStringKeyName = _s === void 0 ? 'name' : _s, _t = _a.inputSearchString, inputSearchString = _t === void 0 ? '' : _t, formatResult = _a.formatResult, _u = _a.hideResultsOnBlur, hideResultsOnBlur = _u === void 0 ? true : _u, _v = _a.showNoResults, showNoResults = _v === void 0 ? true : _v, _w = _a.showNoResultsText, showNoResultsText = _w === void 0 ? 'No results' : _w, _x = _a.showItemsOnFocus, showItemsOnFocus = _x === void 0 ? false : _x, _y = _a.maxLength, maxLength = _y === void 0 ? 0 : _y, className = _a.className;
    var theme = __assign(__assign({}, config_1.defaultTheme), styling);
    var options = __assign(__assign({}, config_1.defaultFuseOptions), fuseOptions);
    var fuse = new fuse_js_1.default(items, options);
    fuse.setCollection(items);
    var _z = (0, react_1.useState)(inputSearchString), searchString = _z[0], setSearchString = _z[1];
    var _0 = (0, react_1.useState)([]), results = _0[0], setResults = _0[1];
    var _1 = (0, react_1.useState)(-1), highlightedItem = _1[0], setHighlightedItem = _1[1];
    var _2 = (0, react_1.useState)(false), isSearchComplete = _2[0], setIsSearchComplete = _2[1];
    var _3 = (0, react_1.useState)(false), isTyping = _3[0], setIsTyping = _3[1];
    var _4 = (0, react_1.useState)(false), showNoResultsFlag = _4[0], setShowNoResultsFlag = _4[1];
    var _5 = (0, react_1.useState)(false), hasFocus = _5[0], setHasFocus = _5[1];
    (0, react_1.useEffect)(function () {
        setSearchString(inputSearchString);
        var timeoutId = setTimeout(function () { return setResults(disableFuse ? items : fuseResults(inputSearchString)); }, 0);
        return function () { return clearTimeout(timeoutId); };
    }, [inputSearchString]);
    (0, react_1.useEffect)(function () {
        // on results?.length > 0
        if (disableFuse) {
            setResults(items);
        }
        else {
            (searchString === null || searchString === void 0 ? void 0 : searchString.length) > 0 &&
                results &&
                (results === null || results === void 0 ? void 0 : results.length) > 0 &&
                setResults(fuseResults(searchString));
        }
    }, [items]);
    (0, react_1.useEffect)(function () {
        if (showNoResults &&
            searchString.length > 0 &&
            !isTyping &&
            results.length === 0 &&
            !isSearchComplete) {
            setShowNoResultsFlag(true);
        }
        else {
            setShowNoResultsFlag(false);
        }
    }, [isTyping, showNoResults, isSearchComplete, searchString, results]);
    (0, react_1.useEffect)(function () {
        if (showItemsOnFocus && results.length === 0 && searchString.length === 0 && hasFocus) {
            setResults(items.slice(0, maxResults));
        }
    }, [showItemsOnFocus, results, searchString, hasFocus]);
    (0, react_1.useEffect)(function () {
        if (hideResultsOnBlur) {
            var handleDocumentClick_1 = function () {
                eraseResults();
                setHasFocus(false);
            };
            document.addEventListener('click', handleDocumentClick_1);
            return function () { return document.removeEventListener('click', handleDocumentClick_1); };
        }
    }, []);
    var handleOnFocus = function (event) {
        onFocus(event);
        setHasFocus(true);
    };
    var handleOnKeyDown = function (event) {
        handleSetHighlightedItem({ event: event });
        if (event.key === 'Escape') {
            eraseResults();
            setHasFocus(false);
        }
    };
    var callOnSearch = function (keyword) {
        var newResults = [];
        if (disableFuse) {
            setResults(items);
        }
        else {
            (keyword === null || keyword === void 0 ? void 0 : keyword.length) > 0 && (newResults = fuseResults(keyword));
            setResults(newResults);
        }
        onSearch(keyword, newResults, 0);
        setIsTyping(false);
    };
    var handleOnSearch = react_1.default.useCallback(inputDebounce > 0
        ? (0, utils_1.debounce)(function (keyword) { return callOnSearch(keyword); }, inputDebounce)
        : function (keyword) { return callOnSearch(keyword); }, [items]);
    var handleOnClick = function (result) {
        eraseResults();
        onSelect(result);
        setSearchString(result[resultStringKeyName]);
        setHighlightedItem(0);
    };
    var fuseResults = function (keyword) {
        return fuse
            .search(keyword, { limit: maxResults })
            .map(function (result) { return (__assign({}, result.item)); })
            .slice(0, maxResults);
    };
    var handleSetSearchString = function (_a) {
        var target = _a.target;
        var keyword = target.value;
        setSearchString(keyword);
        handleOnSearch(keyword);
        setIsTyping(true);
        if (isSearchComplete) {
            setIsSearchComplete(false);
        }
    };
    var eraseResults = function () {
        setResults([]);
        setIsSearchComplete(true);
    };
    var handleSetHighlightedItem = function (_a) {
        var index = _a.index, event = _a.event;
        var itemIndex = -1;
        var setValues = function (index) {
            setHighlightedItem(index);
            (results === null || results === void 0 ? void 0 : results[index]) && onHover(results[index]);
        };
        if (index !== undefined) {
            setHighlightedItem(index);
            (results === null || results === void 0 ? void 0 : results[index]) && onHover(results[index]);
        }
        else if (event) {
            switch (event.key) {
                case 'Enter':
                    if (results.length > 0 && results[highlightedItem]) {
                        event.preventDefault();
                        onSelect(results[highlightedItem]);
                        setSearchString(results[highlightedItem][resultStringKeyName]);
                        onSearch(results[highlightedItem][resultStringKeyName], results, event.keyCode);
                    }
                    else {
                        onSearch(searchString, results, event.keyCode);
                    }
                    setHighlightedItem(-1);
                    eraseResults();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    itemIndex = highlightedItem > -1 ? highlightedItem - 1 : results.length - 1;
                    setValues(itemIndex);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    itemIndex = highlightedItem < results.length - 1 ? highlightedItem + 1 : -1;
                    setValues(itemIndex);
                    break;
                default:
                    break;
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)(StyledReactSearchAutocomplete, __assign({ className: className }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsx)(SearchInput_1.default, { searchString: searchString, setSearchString: handleSetSearchString, eraseResults: eraseResults, autoFocus: autoFocus, onFocus: handleOnFocus, onClear: onClear, placeholder: placeholder, showIcon: showIcon, showClear: showClear, onKeyDown: handleOnKeyDown, maxLength: maxLength }), (0, jsx_runtime_1.jsx)(Results_1.default, { results: results, onClick: handleOnClick, setSearchString: setSearchString, showIcon: showIcon, maxResults: maxResults, resultStringKeyName: resultStringKeyName, formatResult: formatResult, highlightedItem: highlightedItem, setHighlightedItem: handleSetHighlightedItem, showNoResultsFlag: showNoResultsFlag, showNoResultsText: showNoResultsText })] })) })) })));
}
exports.default = ReactSearchAutocomplete;
var StyledReactSearchAutocomplete = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  height: ", ";\n\n  .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n    &:active {\n      box-shadow: ", ";\n    }\n    &:focus-within {\n      box-shadow: ", ";\n    }\n  }\n"], ["\n  position: relative;\n\n  height: ", ";\n\n  .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ", ";\n    border-radius: ", ";\n\n    background-color: ", ";\n    color: ", ";\n\n    font-size: ", ";\n    font-family: ", ";\n\n    z-index: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n    &:active {\n      box-shadow: ", ";\n    }\n    &:focus-within {\n      box-shadow: ", ";\n    }\n  }\n"])), function (props) { return parseInt(props.theme.height) + 2 + 'px'; }, function (props) { return props.theme.border; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.backgroundColor; }, function (props) { return props.theme.color; }, function (props) { return props.theme.fontSize; }, function (props) { return props.theme.fontFamily; }, function (props) { return props.theme.zIndex; }, function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.boxShadow; });
var templateObject_1;
