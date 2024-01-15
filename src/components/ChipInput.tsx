import React, { useState, useRef, useEffect } from "react";
import "./ChipInput.scss";

interface ChipInputProps {
  availableItems: string[];
  setAvailableItems: React.Dispatch<React.SetStateAction<string[]>>;
}
interface KeyboardEvent {
  key: string;
}
const ChipInput: React.FC<ChipInputProps> = ({
  availableItems,
  setAvailableItems,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleBackspace = (inputEvent: KeyboardEvent) => {
      if (
        inputEvent.key === "Backspace" &&
        inputValue === "" &&
        selectedItems.length > 0
      ) {
        const updatedSelectedItems = [...selectedItems];
        const removedItem = updatedSelectedItems.splice(
          selectedItems.length - 1,
          1
        )[0]; // Remove the last selected item
        setSelectedItems(updatedSelectedItems);
        setAvailableItems([...availableItems, removedItem]);
      }
    };

    document.addEventListener("keydown", handleBackspace);

    return () => {
      document.removeEventListener("keydown", handleBackspace);
    };
  }, [inputValue, selectedItems]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setFocusedIndex(null);
  };

  const handleItemClick = (item: string, index: number) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
    setInputValue("");
    setFocusedIndex(null);

    const updatedAvailableItems = [...availableItems];
    updatedAvailableItems.splice(index, 1);
    setAvailableItems(updatedAvailableItems);
  };

  const handleChipRemove = (index: number) => {
    const updatedSelectedItems = [...selectedItems];
    const removedItem = updatedSelectedItems.splice(index, 1)[0];
    setSelectedItems(updatedSelectedItems);

    setAvailableItems([...availableItems, removedItem]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === availableItems.length - 1
          ? 0
          : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0
          ? availableItems.length - 1
          : prevIndex - 1
      );
    } else if (event.key === "Enter" && focusedIndex !== null) {
      handleItemClick(availableItems[focusedIndex], focusedIndex);
    }
  };

  return (
    <div className="chip-input">
      <div className="chips">
        {selectedItems.map((item, index) => (
          <div key={index} className="chip">
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
          <div
            className="item-list"
            style={{
              width: "200px",
              position: "absolute",
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
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
