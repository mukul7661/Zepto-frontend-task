import React, { useState, useRef, useEffect } from "react";
import "./ChipInput.scss";

interface ChipInputProps {
  availableItems: string[];
  setAvailableItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChipInput: React.FC<ChipInputProps> = ({
  availableItems,
  setAvailableItems,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleBackspace = (inputEvent: KeyboardEvent) => {
      if (
        inputEvent.key === "Backspace" &&
        inputValue === "" &&
        selectedItems.length > 0
      ) {
        if (highlightedIndex === null) {
          setHighlightedIndex(selectedItems.length - 1);
        } else {
          const updatedSelectedItems = [...selectedItems];
          const removedItem = updatedSelectedItems.splice(
            highlightedIndex,
            1
          )[0];
          setSelectedItems(updatedSelectedItems);
          setHighlightedIndex(null);
          if (removedItem !== undefined) {
            setAvailableItems((prevItems) => [...prevItems, removedItem]);
          }
        }
      }
    };

    document.addEventListener("keydown", handleBackspace);

    return () => {
      document.removeEventListener("keydown", handleBackspace);
    };
  }, [inputValue, selectedItems, highlightedIndex, setAvailableItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setFocusedIndex(null);
  };

  const handleItemClick = (item: string, index: number) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
    setInputValue("");
    setFocusedIndex(null);

    const updatedAvailableItems = availableItems.filter((_, i) => i !== index);
    setAvailableItems(updatedAvailableItems);
  };

  const handleChipRemove = (index: number) => {
    const updatedSelectedItems = [...selectedItems];
    const removedItem = updatedSelectedItems.splice(index, 1)[0];
    setSelectedItems(updatedSelectedItems);

    setAvailableItems((prevItems) => [...prevItems, removedItem]);
  };

  const handleArrowDown = () => {
    setFocusedIndex((prevIndex) =>
      prevIndex === null || prevIndex === availableItems.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleArrowUp = () => {
    setFocusedIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0
        ? availableItems.length - 1
        : prevIndex - 1
    );
  };

  const handleEnterKey = () => {
    if (focusedIndex !== null) {
      handleItemClick(availableItems[focusedIndex], focusedIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "Enter":
        handleEnterKey();
        break;
      default:
        break;
    }
  };

  return (
    <div className="chip-input">
      <div className="chips">
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className={`chip ${
              highlightedIndex === index ? "highlighted" : ""
            }`}
          >
            {item}
            <button
              onClick={() => handleChipRemove(index)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))}
        <div>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type to filter"
            className="input-field"
          />
          <div className="item-list">
            {availableItems
              .filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(item, index)}
                  className={`item ${focusedIndex === index ? "focused" : ""}`}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
