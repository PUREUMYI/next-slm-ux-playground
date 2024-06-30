import { useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";

export const SettingsModel = () => {
  const [model, setModel] = useState("");
  const [temperature, setTemperature] = useState(1);
  const [maxLength, setMaxLength] = useState(256);
  const [topP, setTopP] = useState(1);

  return (
    <form className="grid w-full items-start gap-6">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
        <div className="grid gap-3">
          <Label htmlFor="model">Model</Label>
          <Select value={model} onValueChange={(value) => setModel(value)}>
            <SelectTrigger className="items-start [&_[data-description]]:hidden">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Local Model</SelectLabel>
                <SelectItem value="aya">Aya3</SelectItem>
                <SelectItem value="eeve">EEVE Korean</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="temperature">Temperature ({temperature})</Label>
          <Slider defaultValue={[1]} min={0} max={2} step={0.01} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="max-length">Maximum length ({maxLength})</Label>
          <Slider defaultValue={[256]} min={1} max={4096} step={1} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="top-p">Top P ({topP})</Label>
          <Slider defaultValue={[1]} min={0} max={1} step={0.01} />
        </div>
      </fieldset>
    </form>
  );
};
