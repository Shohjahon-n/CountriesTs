import { Filter } from "../Filter/Filter"
import { Input } from "../Input/Input"
export const Search = () => {
    return (
        <div className="container w-full m-auto mt-8 md:my-16 flex justify-between items-start md:items-center flex-col md:flex-row px-2">
            <Input />
            <Filter />
        </div>
    )
}
