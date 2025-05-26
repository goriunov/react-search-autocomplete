import { ChangeEventHandler, FocusEventHandler } from 'react';
interface SearchInputProps {
    searchString: string;
    setSearchString: ChangeEventHandler<HTMLInputElement>;
    eraseResults: Function;
    autoFocus: boolean;
    hideResultsOnBlur?: boolean;
    onFocus: FocusEventHandler<HTMLInputElement>;
    onKeyDown: Function;
    onClear: Function;
    placeholder: string;
    showIcon: boolean;
    showClear: boolean;
    maxLength: number;
}
export default function SearchInput({ searchString, setSearchString, onKeyDown, eraseResults, autoFocus, onFocus, onClear, placeholder, hideResultsOnBlur, showIcon, showClear, maxLength }: SearchInputProps): JSX.Element;
export {};
