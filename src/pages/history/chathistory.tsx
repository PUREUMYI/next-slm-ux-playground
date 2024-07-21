const GeneralPage = () => {

return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-4 lg:p-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Chat History</h1>
            <div className="bg-background/95 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/60 ml-auto md:w-[300px] lg:w-[300px]" >
                <form>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-2 top-2 h-4 w-4 text-muted-foreground">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input type="search" className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8" />
                    </div>
                </form>
            </div>
        </div>
        <div className="flex flex-col lg:h-full">
            <header className="sticky top-0 z-10 flex items-center gap-1 border-b bg-background px-4" />
            <div className="flex items-center my-2">
                <div role="tablist" aria-orientation="horizontal" className="inline-flex h-7 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"  data-orientation="horizontal" >
                    <button type="button" role="tab" aria-selected="true" aria-controls="radix-:R4qb9uuuuu6ja:-content-week" data-state="active" id="radix-:R4qb9uuuuu6ja:-trigger-week" className="inline-flex items-center justify-center whitespace-nowrap rounded px-2 py-1 h-5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"  data-orientation="horizontal" data-radix-collection-item="">Week</button>
                    <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R4qb9uuuuu6ja:-content-month" data-state="inactive" id="radix-:R4qb9uuuuu6ja:-trigger-month" className="inline-flex items-center justify-center whitespace-nowrap rounded px-2 py-1 h-5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" data-orientation="horizontal" data-radix-collection-item="">Month</button>
                    <button type="button" role="tab" aria-selected="false" aria-controls="radix-:R4qb9uuuuu6ja:-content-year" data-state="inactive" id="radix-:R4qb9uuuuu6ja:-trigger-year" className="inline-flex items-center justify-center whitespace-nowrap rounded px-2 py-1 h-5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"  data-orientation="horizontal" data-radix-collection-item="">Year</button>
                </div>
                
                <div className="ml-auto flex items-center gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-xs" type="button" id="radix-:Rcsqb9uuuuu6ja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-filter h-3.5 w-3.5">
                            <path d="M3 6h18"></path><path d="M7 12h10"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                        <span className="sr-only sm:not-sr-only">Filter</span>
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 h-7 gap-1 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file h-3.5 w-3.5">
                         <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        </svg>
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </button>
                </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-3" >
                <div className="flex flex-col space-y-1.5 p-6 px-7 pt-5">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Weekly Chart History</h3>
                    <p className="text-sm font-bold text-muted-foreground">Change general settings on Github RAG</p>
                </div>
                
                <div className="p-6 pt-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b">
                                <tr className="border-b transition-colors">
                                    <th className="w-[64%] h-10 px-4 text-left align-middle font-bold text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">User Question</th>
                                    <th className="w-[13%] h-10 px-4 text-center align-middle font-bold text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Avg. Resp Time</th>
                                    <th className="w-[10%] h-10 px-4 text-center align-middle font-bold text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Tokens</th>
                                    <th className="w-[13%] h-10 px-4 text-center align-middle font-bold text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Creation Date</th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">c</td>
                                    <td className="p-4 align-middle text-center [&amp;:has([role=checkbox])]:pr-0 font-medium">320</td>
                                    <td className="p-4 align-middle text-center [&amp;:has([role=checkbox])]:pr-0">
                                        1,234                                    </td>
                                    <td className="p-4 align-middle text-center [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">2024/07/09</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
);
};

export default GeneralPage;
  

