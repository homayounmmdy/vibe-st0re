import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState<string>('0');
    const [previousValue, setPreviousValue] = useState<string>('');
    const [operation, setOperation] = useState<string>('');
    const [newNumber, setNewNumber] = useState<boolean>(true);

    const handleNumber = (num: string) => {
        if (newNumber) {
            setDisplay(num);
            setNewNumber(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const handleDecimal = () => {
        if (newNumber) {
            setDisplay('0.');
            setNewNumber(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleOperation = (op: string) => {
        if (operation && !newNumber) {
            calculate();
        } else {
            setPreviousValue(display);
        }
        setOperation(op);
        setNewNumber(true);
    };

    const calculate = () => {
        const prev = parseFloat(previousValue);
        const current = parseFloat(display);
        let result = 0;

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = current !== 0 ? prev / current : 0;
                break;
            default:
                return;
        }

        setDisplay(String(result));
        setPreviousValue('');
        setOperation('');
        setNewNumber(true);
    };

    const handleClear = () => {
        setDisplay('0');
        setPreviousValue('');
        setOperation('');
        setNewNumber(true);
    };

    const handleDelete = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
            setNewNumber(true);
        }
    };

    const handlePercent = () => {
        setDisplay(String(parseFloat(display) / 100));
    };

    const handleToggleSign = () => {
        setDisplay(String(parseFloat(display) * -1));
    };

    const Button: React.FC<{
        value: string;
        onClick: () => void;
        className?: string;
        wide?: boolean;
    }> = ({ value, onClick, className = '', wide = false }) => (
        <button
            onClick={onClick}
            className={`
        ${wide ? 'col-span-2' : ''}
        h-16 rounded-2xl text-lg font-semibold
        bg-gray-200 text-gray-700
        shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]
        active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]
        transition-all duration-150
        hover:text-gray-900
        ${className}
      `}
        >
            {value}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                {/* Back Button */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all duration-150 hover:text-gray-900"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back
                </a>
                <div className="bg-gray-200 rounded-3xl p-8 shadow-[20px_20px_60px_#b8b9be,-20px_-20px_60px_#ffffff]">
                    {/* Display */}
                    <div className="mb-6 p-6 rounded-2xl bg-gray-200 shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff]">
                        <div className="text-right">
                            <div className="text-sm text-gray-500 h-6 mb-1">
                                {previousValue && `${previousValue} ${operation}`}
                            </div>
                            <div className="text-4xl font-bold text-gray-800 truncate">
                                {display}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-4 gap-3">
                        <Button value="AC" onClick={handleClear} className="text-red-500" />
                        <Button value="⌫" onClick={handleDelete} className="text-orange-500" />
                        <Button value="%" onClick={handlePercent} className="text-blue-500" />
                        <Button value="÷" onClick={() => handleOperation('÷')} className="text-blue-500" />

                        <Button value="7" onClick={() => handleNumber('7')} />
                        <Button value="8" onClick={() => handleNumber('8')} />
                        <Button value="9" onClick={() => handleNumber('9')} />
                        <Button value="×" onClick={() => handleOperation('×')} className="text-blue-500" />

                        <Button value="4" onClick={() => handleNumber('4')} />
                        <Button value="5" onClick={() => handleNumber('5')} />
                        <Button value="6" onClick={() => handleNumber('6')} />
                        <Button value="-" onClick={() => handleOperation('-')} className="text-blue-500" />

                        <Button value="1" onClick={() => handleNumber('1')} />
                        <Button value="2" onClick={() => handleNumber('2')} />
                        <Button value="3" onClick={() => handleNumber('3')} />
                        <Button value="+" onClick={() => handleOperation('+')} className="text-blue-500" />

                        <Button value="±" onClick={handleToggleSign} />
                        <Button value="0" onClick={() => handleNumber('0')} />
                        <Button value="." onClick={handleDecimal} />
                        <Button value="=" onClick={calculate} className="text-green-600 font-bold" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;