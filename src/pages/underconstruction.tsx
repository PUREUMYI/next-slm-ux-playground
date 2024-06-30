import { Construction } from "lucide-react";

export default function UnderConstructionPage() {
  return (
    <div className="mx-auto my-auto">
      <Construction className="mx-auto text-amber-300" size={200} />
      <div className="text-center text-8xl">Under</div>
      <div className="text-center text-8xl">Construction</div>
    </div>
  );
}
