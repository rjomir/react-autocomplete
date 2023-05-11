import React, { useState, ChangeEvent } from 'react';

import './Autocomplete.css'

interface AutocompleteProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filtered = await filterOptions(options, term);
        setFilteredOptions(filtered);
        setActiveOptionIndex(-1);
    };

    const handleOptionSelect = (selectedOption: string) => {
        onSelect(selectedOption);
        setSearchTerm('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowUp') {
            setActiveOptionIndex(prev => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
        } else if (event.key === 'ArrowDown') {
            setActiveOptionIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
        } else if (event.key === 'Enter' && activeOptionIndex !== -1) {
            handleOptionSelect(filteredOptions[activeOptionIndex]);
        }
    };

    const filterOptions = async (options: string[], searchTerm: string): Promise<string[]> => {
        return new Promise(resolve => {
            setTimeout(() => {
                const filtered = options.filter(option =>
                    option.toLowerCase().includes(searchTerm.toLowerCase())
                );
                resolve(filtered);
            }, 1000);
        });
    };

    const highlightMatch = (option: string, searchTerm: string) => {
        const index = option.toLowerCase().indexOf(searchTerm.toLowerCase());
        if (index === -1) return option;
        const beforeMatch = option.slice(0, index);
        const match = option.slice(index, index + searchTerm.length);
        const afterMatch = option.slice(index + searchTerm.length);
        return (
            <>
                {beforeMatch}
                <strong>{match}</strong>
                {afterMatch}
            </>
        );
    };

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                className="autocomplete-input"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            {filteredOptions.length > 0 && (
                <ul className="autocomplete-options">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={option}
                            className={`autocomplete-option${index === activeOptionIndex ? ' active' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {highlightMatch(option, searchTerm)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;