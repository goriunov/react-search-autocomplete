# react-search-autocomplete-rev

Forked from: [react-search-autocomplete](https://github.com/sickdyd/react-search-autocomplete)

### Installing

```bash
$ npm install react-search-autocomplete-rev
or
$ yarn add react-search-autocomplete-rev
```

### Changes

* Remove React version limitation
* Add props `hideResultsOnBlur`, set `false` to keep results open when input is blurred
* Add props `disableFuse`, set `true` to disable Fuse search. It is useful for implementing remote search.
* Support `Escape` key to close results
