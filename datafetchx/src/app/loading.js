import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return(
        <div>
            <Skeleton className="min-h-screen w-full" />
        </div>
    )
}