import { LoadingSpinner } from "./loading-spinner"

export function Loading(){
    return(
        <div className="flex justify-center items-center">
            <LoadingSpinner />
        </div>
    )
}