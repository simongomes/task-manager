import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Flex, Input, Tag, theme, Tooltip } from "antd";
import { ADD_TAG, DELETE_TAG } from "../../store/actions";
const tagInputStyle = {
  width: 64,
  height: 22,
  marginInlineEnd: 8,
  verticalAlign: "top",
};

const Tags = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  const { tags } = selectedTodo;

  const { token } = theme.useToken();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Focus on input when it is visible
  useEffect(() => {
    var _a;
    if (inputVisible) {
      (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    dispatch({ type: DELETE_TAG, payload: removedTag });
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      dispatch({ type: ADD_TAG, payload: inputValue });
    }
    setInputVisible(false);
    setInputValue("");
  };

  const tagPlusStyle = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  return (
    <Flex gap="4px 0" wrap style={{ marginTop: 15 }}>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={tag}
            closable={true}
            style={{ userSelect: "none" }}
            onClose={() => handleClose(tag)}
          >
            <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
          New Tag
        </Tag>
      )}
    </Flex>
  );
};

export default Tags;
