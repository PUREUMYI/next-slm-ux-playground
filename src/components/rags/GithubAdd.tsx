import { CirclePlus, Loader2, PackageXIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";

export const GithubAdd = ({}) => {
  const [isClone, setIsClone] = useState(false);
  const [badges, setBadges] = useState<String[]>([]);
  const [directory, setDirectory] = useState('');

  const handleClone = () => {
    setIsClone(true);
  };

  const handleAddBadge = () => {
    if (directory.trim() !== '') {
      setBadges([...badges, directory]);
      setDirectory(''); // 입력 필드를 비웁니다.
    }
  };

  const handleRemoveBadge = (index) => {
    setBadges(badges.filter((_, i) => i !== index));
  };

  const handleAddTarget = () => {
    console.log('handleAddTarget')
  };

  const items = [
    {
      directory: "Test",
      fileType: "Javascript",
      fileCount: "330",
      progressRatio: 30,
    },
    {
      directory: "Test2",
      fileType: "Python",
      fileCount: "567",
      progressRatio: 50,
    },
  ]
  
  return (
    <div className="h-[600px] overflow-y-auto">
      <div>
        <div id="step1">
          <h2 className="font-extrabold text-3xl">Step I. Github Info</h2>
          <h1 className="font-bold text-base text-gray-400">Change general settings on Gitnub RAG.</h1>
          {/* step1 input area */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="owner" className="font-extrabold">Owner</Label>
                <Input type="text" id="owner" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="repo" className="font-extrabold">Repo</Label>
                <Input type="text" id="repo"/>
            </div>
          </div>
          <h1 className="font-bold text-base text-gray-400 mt-1">
            The final generated URL will be https://github.com/&#123;owner&#125;/&#123;repo&#125;
          </h1>
          {/* step1 button area */}
          <div className="mt-3">
            <Button disabled={isClone} onClick={handleClone}>
              {isClone && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isClone ? 'Please wait' : 'Temp Clone'}
            </Button>
          </div>
        </div>
        <hr className="my-6 border-gray-300"></hr> {/* gray line */}
        
        <div id="step2">
          <h2 className="font-extrabold text-3xl">Step II. Target Files</h2>
          <h1 className="font-bold text-base text-gray-400">Select the target files to collect.</h1>    
          {/* step2 select area */}
          <div className="grid grid-cols-2 gap-4 mt-4"> 
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file" className="font-extrabold">File Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select the file type to collect." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="py">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="js">JavaScript</SelectItem>
                  <SelectItem value="ts">TypeScript</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <h1 className="font-bold text-base text-gray-400 mt-1">
            Select the file type to collect.
          </h1>
          {/* step2 badge area */}
          <div className="grid grid-cols-2 gap-4 mt-4"> 
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="directories " className="font-extrabold">Directories</Label>
              <div className="grid grid-flow-col">
                <Input type="text" id="directories" onChange={(e) => setDirectory(e.target.value)}/>
                <Button variant="outline" size="icon" className="ml-1" onClick={handleAddBadge}>
                  <CirclePlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid-flow-col mt-2">
          {badges.map((badge, index) => (
            <Badge key={index} className="mr-1">
              {badge}
              <XIcon className="ml-1 h-3 w-3 cursor-pointer" onClick={() => handleRemoveBadge(index)} />
            </Badge>
          ))}
          </div>
          {/* step2 button area */}
          <div className="mt-5">
            <Button onClick={handleAddTarget}>
              Add Target
            </Button>
          </div>
        </div>
        <hr className="my-6 border-gray-300"></hr> {/* gray line */}
        
        <div id="step3">
          <h2 className="font-extrabold text-3xl">Step III. Create VectorDB</h2>
          <h1 className="font-bold text-base text-gray-400">Select the target files to collect.</h1>
          {/* step3 table area */}
          <div>
            <Table>
              {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20%]">Directory</TableHead>
                  <TableHead className="w-[15%]">File Type</TableHead>
                  <TableHead className="w-[10%]">Files</TableHead>
                  <TableHead className="w-[50%]">Progress</TableHead>
                  <TableHead>Remove</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((items) => (
                  <TableRow key={items.directory}>
                    <TableCell className="font-medium">{items.directory}</TableCell>
                    <TableCell>{items.fileType}</TableCell>
                    <TableCell>{items.fileCount}</TableCell>
                    <TableCell>
                      <Progress value={items.progressRatio} className="w-[90%]" />
                    </TableCell>
                    <TableCell className="text-right">
                      <PackageXIcon className="h-5 w-5 cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* step3 button area */}
          <div className="mt-5">
            <Button>Create DB</Button>
          </div> 
        </div>
      </div>
    </div>
  )
};
