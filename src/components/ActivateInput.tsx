import _ from "lodash";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const ActivateInput = ({
  value,
  onChange,
  activate,
  onActivateChange,
  title = "",
  description = "",
  placeholder = "",
}) => {
  const [input, setInput] = useState(value);
  const [inputActivate, setInputActivate] = useState(activate);

  const timestamp = `${new Date().getTime()}`;

  const handleInput = (e) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  const handleActivate = (value) => {
    setInputActivate(value);
    onActivateChange(value);
  };

  return (
    <>
      {_.isEmpty(title) ? "" : <Label htmlFor={timestamp}>{title}</Label>}
      <div className="w-full relative">
        <Input
          id={timestamp}
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={handleInput}
        />
        <Switch
          className="absolute top-2 right-2"
          checked={inputActivate}
          onCheckedChange={handleActivate}
        />
      </div>
      {_.isEmpty(description) ? (
        ""
      ) : (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </>
  );
};
